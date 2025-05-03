'use client';
import React from 'react';
import Head from 'next/head';
import { Banner } from '@/components/common/Banner';

const PrivacyPolicy = () => {
  return (
    <>
      <Head><title>Política de Privacidade - Ibremp</title></Head>
      <Banner title='Política de Privacidade' />
      <section className='flex flex-col justify-center items-center text-gray-700 py-8 px-4 gap-8'>
        <div className="max-w-[1280px] w-full">
          <h2 className="text-2xl font-bold mb-4">1. Coleta de informações</h2>
          <p className="mb-6">
            Coletamos informações que você nos fornece diretamente, como nome, e-mail e mensagens enviadas por formulários, com a finalidade de oferecer atendimento e melhorar nossos serviços.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Uso de dados</h2>
          <p className="mb-6">
            Utilizamos os dados coletados para responder às suas solicitações, enviar comunicações e aprimorar a experiência do usuário em nosso site.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de informações</h2>
          <p className="mb-6">
            Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou necessário para a prestação de serviços solicitados por você.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
          <p className="mb-6">
            Utilizamos cookies para melhorar a funcionalidade do site e analisar o tráfego. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar o uso de algumas funcionalidades.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Segurança</h2>
          <p className="mb-6">
            Adotamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acessos não autorizados, uso indevido ou divulgação.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Seus direitos</h2>
          <p className="mb-6">
            Você pode solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento, entrando em contato conosco através dos meios disponíveis neste site.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Alterações nesta política</h2>
          <p className="mb-6">
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre nossas práticas.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta política, entre em contato pelo e-mail:{" "}
            <a href="mailto:contato@ibremp.org.br" className="text-[color:var(--color-ibremp-blue)] underline">contato@ibremp.org.br</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
