import React from 'react'
import Image, { StaticImageData } from 'next/image'
import magazineThirdYearImage from '@/assets/images/magazine-photos/revista-n-3.jpg'
import magazineSecondYearImage from '@/assets/images/magazine-photos/revista-2-ano-1.jpg'
import magazineFirstYearImage from '@/assets/images/magazine-photos/revista-ibremp-unidade-1-ano-1.png'
import { Button } from '@/components/common/Button'
import './style.css'

interface MagazineSectionProps {
  image:StaticImageData;
  title:string;
  magazineEditionNumber:string;
  content:string;
  imageSide?:'left' | 'right';
  fileName:string;
}
interface MagazineSectionPropsComponent extends MagazineSectionProps{
    buttonText:string;
}

export const HomePage:React.FC = () => {
  const magazineSectionsContent:MagazineSectionProps[] = [
    {
      image:magazineThirdYearImage,
      title:'Revista Brasileira De Direito Societário E Registro Empresarial',
      fileName:'REVISTA-3.pdf',
      magazineEditionNumber:'N° 3',
      content:`O contínuo processo de transformação, A “Revista Brasileira de 
Direito Societário ed Raesg pisetrsos odaes Eem pdraessas”
foi criada em 2020 pelo Instituto Brasileiro de Registro Empresarial
(IBREmp), com o objetivo de divulgar Artigos Científicos, Pareceres
e Pesquisas na área de Direito Societário, Registro e Legalização de
Empresas e Regulação Econômica.
Ela é editada semestralmente (duas edições por ano) e conta
com artigos e pareceres importantíssimos para empresários e para todos
que atuam nas áreas abrangentes e correlatas.
Nosso Conselho Editorial é ilustre, de grande conceito, formado
por professores e profissionais experientes, sob a coordenação da Dra.
Teresa Cristina G. Pantoja (PUC-RJ), Mestre José A. Cerezoli (IBREmp/
JUCERJA), da Dra. Helisia C. Góes (UNIFAP/JUCEAP), e por um Conselho
Editorial competentíssimo, composto por professores e profissionais
renomados nas suas áreas de atuação.
Nesta terceira edição apresentamos quatro artigos científicos de
alta relevância na matéria, elaborados por proeminentes profissionais
e, também incluímos dois pareceres emitidos pela Procuradoria Regional
da Junta Comercial do Estado do Rio de Janeiro, que analisa questões
muito interessantes, submetidas ao Registro de Empresas.
Espero que gostem da leitura!
      `,
    },
    {
      image:magazineSecondYearImage,
      title:'Revista Brasileira De Direito Societário E Registro Empresarial',
      fileName:'revista-ano-1-2.pdf',
      magazineEditionNumber:'Ano I, n°2, jun-dez 2020 - ISSN 2764-8877',
      content:`O contínuo processo de transformação, das pessoas e das instituições, exige a rápida atualização do conhecimento, para a adequada adaptação social, econômica e política a cada novo tempo, como elemento essencial ao desenvolvimento das nações.
O Instituto Brasileiro de Registro Empresarial – IBREmp estruturou-se pela conexão de pessoas que valorizam a liberdade de ideias, a pesquisa científica e a convivência acadêmica, sob a perspectiva da necessidade de fortalecimento da atividade empresarial, bem como da importância do registro de empresas como instrumento de estabilização das relações jurídicas comerciais, sendo estas intimamente ligadas à própria existência humana e sua vivência em comunidade.`,
      imageSide:'right'
    },
    {
      image:magazineFirstYearImage,
      title:'Revista Brasileira De Direito Societário E Registro Empresarial',
      fileName:'revista-ano-1-1.pdf',
      magazineEditionNumber:'Ano I, n°1, jan-jun 2020 ISSN 2764-8877',
      content:`O Registro de Empresas é atividade essencial para o desenvolvimento econômico do País; em meio a multiplicidade de órgãos federais, estaduais e municipais dedicados ao fomento da atividade empresarial, sem dúvida o papel mais relevante é exercido pelas tradicionais Juntas Comerciais que – em todos os Estados do Brasil, inclusive no Distrito Federal – e de modo cada vez mais eficiente, desempenham essa atividade.
Ao redor do mundo, há muitos órgãos que efetivam o registro dos empresários individuais e das sociedades empresárias. As distinções entre os mecanismos de funcionamento desses entes são inúmeras: ditadas, na maior parte das ocasiões, pelo grau de desenvolvimento econômico do país em questão, assim como pelo nível de liberdade de iniciativa existente e ainda pelo sistema jurídico adotado.`
    },
  ]
  return (
  <section className='flex flex-col items-center text-gray-700'>
    {magazineSectionsContent.map((magazineSection:MagazineSectionProps,i:number) => (
          <MagazineSection 
            image={magazineSection.image} 
            title={magazineSection.title} 
            magazineEditionNumber={magazineSection.magazineEditionNumber}
            content={magazineSection.content}
            fileName={magazineSection.fileName}
            imageSide={i%2 === 0? 'left':'right'}
            buttonText={i===0? 'Ir para publicação atual':'Acessar revista'}
            key={i}
          />
    ))}
    </section>
  )
}


export const MagazineSection = ({image, title, magazineEditionNumber, content, imageSide = 'left', fileName, buttonText = 'Acessar Revista'}:MagazineSectionPropsComponent) => {

  return(
    <div className={`
      flex ${imageSide === 'left'? 'lg:flex-row':'lg:flex-row-reverse'} lg:justify-center items-center max-w-[1280px] lg:py-4 lg:my-12 space-x-12 
      flex-col my-12 px-8
    `}>
      <div className={`
        flex flex-col lg:w-6/12 ${imageSide === 'left'? 'lg:items-end':'lg:items-start'}
        w-full  lg:justify-center mb-4
      `}>
        <Image src={image} alt='Revista brasileira de direito societário' className='lg:w-full w-48 max-w-[512px]'/>
      </div>
      <div className={`
        flex-col lg:w-6/12 w-full lg:justify-center lg:text-left 
      `}>
          <h2 className='lg:text-4xl text-2xl text-gray-700 font-bold '>{title}</h2>
          <p className='my-4'>{magazineEditionNumber}</p>
          <p className='whitespace-pre-wrap my-5'>{content}</p>
          <Button text={buttonText} url={fileName}/>
      </div>
    </div>
  )
}
