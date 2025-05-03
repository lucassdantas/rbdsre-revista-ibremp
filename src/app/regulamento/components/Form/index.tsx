'use client'

import React, { useState } from 'react'

export const Form = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    idade: '',
    localizacao: '',
    redes_sociais: '',
    profissao: '',
    empregado: '',
  })
  const [message, setMessage] = useState<string>('')
  const [subscriptionStatus, setSubscriptionStatus] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const isInvalidEmail = (email: string) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return true;
    }
    return false
  }

  // Função de validação para cada etapa
  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        if (!formData.nome || !formData.whatsapp || !formData.email) {
          setMessage('Por favor, preencha todos os campos');
          return false;
        }
        if (isInvalidEmail(formData.email)) {
          setMessage('Por favor, insira um e-mail válido');
          return false;
        }
        break;
      case 2:
        if (!formData.idade || !formData.localizacao) {
          setMessage('Por favor, preencha todos os campos');
          return false;
        }
        break;
      case 3:
        if (!formData.profissao || !formData.empregado) {
          setMessage('Por favor, preencha todos os campos');
          return false;
        }
        break;
      default:
        break;
    }
    setMessage(''); // Limpa a mensagem de erro se tudo estiver válido
    return true;
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  }

  const prevStep = () => setStep((prev) => prev - 1)

  // Máscara para telefone
  const handleMaskPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (value.length <= 11) {
      let formatted = value;
      if (value.length > 6) {
        formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
      } else if (value.length > 2) {
        formatted = `(${value.slice(0, 2)}) ${value.slice(2, 6)}`;
      }
      setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(!validateStep(3)) return

    // Envio do formulário via fetch
    fetch('/backend/send-regulament-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setMessage('Inscrição realizada com sucesso')
        setSubscriptionStatus(true)
        // Redirecionar ou mostrar mensagem de sucesso
      })
      .catch((error) => {
        setMessage('Ocorreu um erro')
        setSubscriptionStatus(false)
        console.error('Error:', error);
      });
  }

  return (
    <form
      action="/send-email.php"
      method="POST"
      className="bg-[rgba(255,255,255,0.7)] p-6 rounded-lg shadow-md w-full max-w-md"
      style={{ '--ibremp-blue': '#25346E', '--ibremp-yellow': '#EDB401' } as React.CSSProperties}
    >
      <h2 className="text-2xl font-bold mb-4  text-ibremp-blue">
        Formulário de Cadastro
      </h2>

      <div className="space-y-4">
        {step === 1 && (
          <>
            <label className="block">
              Nome:
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="input"
                placeholder='Seu nome'
              />
            </label>

            <label className="block">
              Contato de WhatsApp:
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleMaskPhone}
                required
                className="input"
                placeholder="(XX) XXXX-XXXX"
              />
            </label>

            <label className="block">
              Email:
              <input
                placeholder='seuemail@gmail.com'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block">
              Idade:
              <input
                placeholder='30 anos'
                type="text"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                required
                className="input"
              />
            </label>

            <label className="block">
              Localização:
              <input
                placeholder='Rio de Janeiro - RJ'
                type="text"
                name="localizacao"
                value={formData.localizacao}
                onChange={handleChange}
                required
                className="input"
              />
            </label>

            <label className="block">
              Redes Sociais:
              <input
                placeholder='facebook.com/meuperfil'
                type="text"
                name="redes_sociais"
                value={formData.redes_sociais}
                onChange={handleChange}
                className="input"
              />
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <label className="block">
              Profissão:
              <input
                placeholder='Gestor'
                type="text"
                name="profissao"
                value={formData.profissao}
                onChange={handleChange}
                required
                className="input"
              />
            </label>

            <fieldset className="block">
              <legend className="mb-1">Está empregado?</legend>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="empregado"
                    value="sim"
                    checked={formData.empregado === 'sim'}
                    onChange={handleChange}
                    required
                  />
                  <span className="ml-1">Sim</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="empregado"
                    value="nao"
                    checked={formData.empregado === 'nao'}
                    onChange={handleChange}
                  />
                  <span className="ml-1">Não</span>
                </label>
              </div>
            </fieldset>
          </>
        )}
        <div className='flex flex-col gap-12'>
          {!subscriptionStatus &&
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
              >
                Voltar
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto bg-ibremp-blue hover:bg-ibremp-yellow text-white py-2 px-4 rounded"
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="ml-auto bg-[color:var(--ibremp-yellow)] hover:brightness-110 text-black font-bold py-2 px-4 rounded"
              >
                Enviar
              </button>
            )}
          </div>
          }
            {message && <span>{message}</span>}
            {subscriptionStatus &&  <a href="mailto:contato@ibremp.org.br" className="ml-auto bg-[color:var(--ibremp-yellow)] hover:brightness-110 text-black font-bold py-2 px-4 rounded">
              Envie seu artigo por e-mail
            </a>}
        </div>
      </div>

      {/* Estilo padrão dos inputs */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.5rem;
          margin-top: 0.25rem;
          border: 1px solid #ccc;
          border-radius: 0.375rem;
          background-color:#fff;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </form>
  )
}
