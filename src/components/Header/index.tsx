'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/IBREmp.png';
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col align-center items-center justify-center">
      <div className="topHeaderContainer bg-ibremp-blue w-full flex justify-center text-white p-2">
        <div className="limiterContainer w-[1080px] max-w-[1080px]">
          <div className="topHeader">
            <ul>
              <li><a className='flex items-center gap-4' href='mailto:contato@ibremp.org.br'><AiOutlineMail />contato@ibremp.org.br</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mainHeaderContainer bg-gray-200 w-full flex justify-center p-2">
        <div className="limiterContainer w-[1080px] max-w-[1080px]">
          <div className={`mainHeader flex justify-between items-center ${isMenuOpen? 'flex-col':''}`}>
            <Link href='/' className={`justify-start ${isMenuOpen? 'w-full':''} `}>
              <Image className='w-64' src={logo} alt='Logo ibremp' />
            </Link>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-3xl">
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
            <nav className={`lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col lg:flex-row gap-4 text-lg">
                <li><Link href="/expediente">Expediente</Link></li>
                <li><Link href="/apresentacao">Apresentação</Link></li>
                <li><Link href="/regulamento">Regulamento</Link></li>
                <li><Link href="/contato">Contato</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
