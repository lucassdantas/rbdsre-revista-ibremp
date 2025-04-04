import Image from 'next/image';
import logo from '@/assets/images/IBREmp.png'
import './style.css'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMapPin } from 'react-icons/hi2';


export const Footer: React.FC = () => (
  <footer>
    <div className="firstRowContainer w-full flex justify-center bg-gray-200 py-12">
      <div className="limiter w-full max-w-[1280px] flex justify-center align-middle">
        <div className="flex lg:flex-row flex-wrap w-full justify-center px-8">
          <div className="flex lg:w-2/4 w-full mb-4">
            <Link href='/' className='flex'>
              <Image className={'w-1/2 object-contain'} src={logo} alt='Logo ibremp'/>
            </Link>
          </div>
          <div className="flex flex-col lg:w-1/4 md:w-1/2 w-full mb-4">
            <h4 className='font-bold text-2xl text-gray-600 mb-4'>Páginas</h4>
            <ul className='font-bold text-gray-600 space-y-1'>
              <li><Link href='/expediente'>Expediente</Link></li>
              <li><Link href='/apresentacao'>Apresentação</Link></li>
              <li><Link href='/regulamento'>Regulamento</Link></li>
              <li><Link href='/contato'>Contato</Link></li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/4 md:w-1/2 w-full">
            <h4 className='font-bold text-2xl text-gray-600 mb-4'>Contato</h4>
            <ul >
              <li><a className='flex items-center gap-4' href='mailto:contato@ibremp.org.br'><AiOutlineMail />contato@ibremp.org.br</a></li>
              <li><a className='flex items-center gap-2' href='https://maps.app.goo.gl/HA4jr1yCWptGzNGF8' target='_blank'><HiOutlineMapPin className='text-3xl' />Av. Treze de Maio, 23 - Centro, Rio de Janeiro - RJ, 20031-007</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="flex bg-ibremp-blue text-white p-2 align-middle justify-center">
      <p>&copy; Copyright - 2025 IBREMP – Todos os direitos reservados</p>
    </div>
  </footer>
);


  