// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { acess } from '@/pass/email';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuração do transporte de e-mail
    let transporter = nodemailer.createTransport({
      host: "br.lando3070.com.br", // substitua pelo seu servidor SMTP
      port: 465,
      secure: true, // true para 465, false para outras portas
      auth: {
        user: acess.login, // substitua pelo seu e-mail
        pass: acess.password, // substitua pela sua senha
      },
    });

    try {
      // Envio do e-mail
      await transporter.sendMail({
        from: '"Ibremp Revista" <envio@rbdsre.ibremp.org.br>', // substitua pelo seu e-mail e nome
        to: "contato@ibremp.org.br", // substitua pelo e-mail do destinatário
        subject: "Mensagem do site da revista IBREMP",
        bcc:'lucasdantasprogramador@gmail.com',
        text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
        html: `<p>Nome: ${name}</p><p>E-mail: ${email}</p><p>Mensagem: ${message}</p>`,
      });

      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar e-mail', error });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
