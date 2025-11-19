import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { z } from 'zod';

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:8081',
      'http://localhost:5173',
    ],
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json({ limit: '10kb' }));
app.use(helmet());

// Detectar configuração de SMTP e Resend
const hasSMTP = !!(
  process.env.SMTP_HOST &&
  process.env.SMTP_PORT &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
);
const hasResend = !!process.env.RESEND_API_KEY;

// Inicializar transporter SMTP se configurado
let transporter = null;
if (hasSMTP) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465, // true para 465, false para 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Inicializar Resend somente se houver chave
const resend = hasResend ? new Resend(process.env.RESEND_API_KEY) : null;

// (rota duplicada removida; versão com validação e proteção está abaixo)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
  console.log(`SMTP configurado: ${hasSMTP}`);
  console.log(`Resend configurado: ${hasResend}`);
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
const contactSpeed = slowDown({
  windowMs: 60 * 1000,
  delayAfter: 3,
  delayMs: 500,
});
const contactSchema = z.object({
  nome: z.string().min(2).max(100),
  email: z.string().email().max(200),
  empresa: z.string().max(100).optional(),
  mensagem: z.string().max(2000).optional(),
  website: z.string().optional(), // honeypot
});

const sanitize = (s = '') => s.replace(/[\u0000-\u001F\u007F]/g, '').replace(/[<>]/g, '').trim();
const limitStr = (s = '', n = 200) => (s.length > n ? s.slice(0, n) : s);

app.post('/api/send-contact', contactLimiter, contactSpeed, async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body || {});
    if (!parsed.success) {
      return res.status(400).json({ ok: false, error: 'Dados inválidos.' });
    }

    const { nome, email, empresa, mensagem, website } = parsed.data;

    // honeypot: se preenchido, bloquear
    if (website && website.trim()) {
      return res.status(400).json({ ok: false, error: 'Solicitação inválida.' });
    }

    const sNome = limitStr(sanitize(nome), 100);
    const sEmail = limitStr(sanitize(email), 200);
    const sEmpresa = empresa ? limitStr(sanitize(empresa), 100) : undefined;
    const sMensagem = mensagem ? limitStr(sanitize(mensagem), 2000) : undefined;

    const subject = `Contato - ${sNome}`;
    const text = `Nome: ${sNome}\nEmail: ${sEmail}\nEmpresa: ${sEmpresa || '-'}\n\nMensagem:\n${sMensagem || '-'}`;

    // Tentar via SMTP primeiro, se configurado
    if (transporter) {
      try {
        const info = await transporter.sendMail({
          from: process.env.SMTP_USER, // Em Gmail, deve ser o próprio usuário autenticado
          to: 'acausvision@gmail.com',
          subject,
          text,
        });
        return res.status(200).json({ ok: true, id: info.messageId });
      } catch (smtpErr) {
        console.error('SMTP send error:', smtpErr);
        // Se falhar, seguir para Resend se disponível
      }
    }

    // Fallback para Resend
    if (resend) {
      const result = await resend.emails.send({
        from: 'Acaus Contact <onboarding@resend.dev>',
        to: 'acausvision@gmail.com',
        subject,
        text,
      });

      if (result?.error) {
        return res.status(500).json({ ok: false, error: result.error.message || 'Erro ao enviar email.' });
      }

      return res.status(200).json({ ok: true, id: result?.data?.id });
    }

    // Nenhuma configuração ativa
    return res.status(501).json({ ok: false, error: 'Envio de email não configurado. Configure SMTP ou RESEND_API_KEY.' });
  } catch (err) {
    console.error('send-contact error:', err);
    return res.status(500).json({ ok: false, error: 'Falha interna ao enviar email.' });
  }
});