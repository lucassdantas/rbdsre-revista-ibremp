import React from 'react'
import './style.css'
import { Banner } from '@/components/common/Banner'
import Head from 'next/head'

const Expediente = () => {
  const colStyles = 'flex flex-col lg:w-1/3 w-full border border-slate-950 rounded p-4'
  return (
    <>
      <Head><title>Expediente - Ibremp</title></Head>
      <Banner title='Expediente/editorial'/>
      <section className='flex flex-col justify-center items-center text-gray-700 py-8 px-4 gap-8'>
        <div className="flex lg:flex-row flex-col justify-between max-w-[1280px] w-full gap-4">
          <div className={`${colStyles}`}>
            <p><span className='font-bold'>Periodicidade: </span>Semestral</p>
            <p><span className='font-bold'>Idiomas: </span>Português</p>
            <p><span className='font-bold'>Editor: </span>IBREmp</p>
            <p>(Instituto Brasileiro de Registro Empresarial)</p>
          </div>
          <div className={`${colStyles}`}>
            <p><span className='font-bold'>Autor Corporativo: </span></p>
            <p>IBREmp</p>
            <p>Instituto Brasileiro de Registro Empresarial</p>
            <p>Av. Treze de Maio, 23, grupo 721,
            Centro, Rio de Janeiro – RJ – CEP 20031-007</p>
          </div>
          <div className={`${colStyles}`}>
          <p><span className='font-bold'>Coordenação </span></p>
          <p>Teresa Cristina G. Pantoja (RJ)</p>
          <p>Helisia C. Góes (AP)</p>
          <p>José A. Cerezoli (RJ)</p>
          </div>
        </div>
        <div className="flex justify-center max-w-[1280px] w-full gap-4">
          <div className={`flex flex-col w-full border border-slate-950 rounded p-4`}>
          <p><span className='font-bold'>Conselho Editorial: </span></p>
            <ul className='whitespace-pre-line'>
              <li>Anderson Rodrigues da Silva (SP)</li>
              <li>André Luiz Santa Cruz Ramos (DF)</li>
              <li>Armando Rovai (SP)</li>
              <li>Carlos Martins Neto (RJ)</li>
              <li>Carolina Gedeon (RJ)</li>
              <li>Cássia Mizusaki Funada (RO)</li>
              <li>Cássio Cavalli (SP)</li>
              <li>Celso Mogioni (SP)</li>
              <li>Eduardo Rodrigues Junior (RJ)</li>
              <li>João Ricardo Coelho (PB)</li>
              <li>Marcelo Vieira von Adamek (SP)</li> 
              <li>Márcio Guimarães (RJ)</li>
              <li>Marcus Vinicius Tadeu Pereira (PR)</li>
              <li>Maurício Moreira M. de Menezes (RJ)</li>
              <li>Paulo Sérgio Mazzardo (RS)</li>
              <li>Ronald Sharp Jr. (RJ)</li>
              <li>Sérgio Campinho (RJ)</li> 
            </ul>
          </div>
        </div>
        <div className={`flex flex-col w-full text-center`}>
          <p>Todos os direitos reservados. É proibida a reprodução total ou parcial, de qualquer forma ou por qualquer meio eletrônico ou mecânico, inclusive através de processos xerográficos de fotocópias ou de gravação, sem permissão por escrito do possuidor dos direitos de cópias (Lei nº 0.610, de 19.02.1998).</p>
        </div>
      </section>
    </>
  )
}

export default Expediente
