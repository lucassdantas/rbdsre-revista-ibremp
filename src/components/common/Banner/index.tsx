import React from 'react'
import { Button } from '../Button';
import { currentMagazineFileName } from '@/utils/globals/currentMagazineFileName';

type BannerProps = {
    title:string;
    haveCtaButton?:boolean;
}
export const Banner = ({title, haveCtaButton=true}:BannerProps) => {
  return (
    <section className='bg-ibremp-blue flex justify-center items-center align-middle py-8 text-white '>
        <div className="w-max-[1280px] gap-6 flex flex-col items-center">
            <h1 className='font-bold text-4xl'>{title}</h1>
            {haveCtaButton &&
              <Button text={'VER PUBLICAÇÃO ATUAL'} url={currentMagazineFileName}/>
            }
        </div>
    </section>
  )
}
