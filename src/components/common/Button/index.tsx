import { currentMagazinePdfDir } from '@/utils/globals/currentMagazinePdfDir';
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
    text:string;
    url:string;
}
export const Button = ({text, url}:ButtonProps) => {
  return (
    <Link href={ currentMagazinePdfDir + url} className='bg-ibremp-yellow lg:px-4 px-1 lg:text-lg text-sm py-3 text-white font-bold rounded-lg uppercase shadow-md hover:bg-yellow-400 transition-colors' >{text}</Link>
  )
}
