'use client'
import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import { Banner } from '@/components/common/Banner';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMapPin } from 'react-icons/hi2';
import './style.css';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/backend/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <>
      <Head><title>Contato - Ibremp</title></Head>
      <Banner title='Contato' />
      <section className='flex flex-col justify-center items-center text-gray-700 py-8 px-4 gap-8'>
        <div className="flex justify-between max-w-[1280px] w-full gap-4">
          <div className='flex flex-col w-full rounded'>
            <h2 className='font-bold text-2xl'>Fale conosco</h2>
            <div className="flex">
              <ul className='flex lg:flex-row flex-col gap-4'>
                <li><a className='flex items-center gap-2' href='mailto:contato@ibremp.org.br'><AiOutlineMail />contato@ibremp.org.br</a></li>
                <li><a className='flex items-center gap-2' href='https://maps.app.goo.gl/HA4jr1yCWptGzNGF8' target='_blank'><HiOutlineMapPin />Av. Treze de Maio, 23 - Centro, Rio de Janeiro - RJ, 20031-007</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between max-w-[1280px] w-full gap-4">
          <div className='flex flex-col border w-full border-slate-950 rounded px-4 py-8'>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nome">
                    Nome
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  focus:border-gray-500"
                    id="nome"
                    type="text"
                    name='name'
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    name='email'
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Mensagem
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="message"
                    name='message'
                    placeholder="Sua mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-ibremp-blue hover:bg-ibremp-yellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
              {status && <p>{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;
