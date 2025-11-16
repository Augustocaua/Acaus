import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

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
app.use(express.json());

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

app.post('/api/send-contact', async (req, res) => {
  try {
    const { nome, email, empresa, mensagem } = req.body || {};

    if (!nome || !email) {
      return res.status(400).json({ ok: false, error: 'Nome e Email são obrigatórios.' });
    }

    const subject = `Contato - ${nome}`;
    const text = `Nome: ${nome}\nEmail: ${email}\nEmpresa: ${empresa || '-'}\n\nMensagem:\n${mensagem || '-'}`;

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
  console.log(`SMTP configurado: ${hasSMTP}`);
  console.log(`Resend configurado: ${hasResend}`);
});