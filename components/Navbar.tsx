import Image from 'next/image'
import React from 'react'
import { Socials } from '@/constants'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      {/* <div className='flex flex-row gap-3 items-center'>
        <div className='relative'>
          <Image
            src='/horseLogo.jpg'
            alt='logo'
            width={40}
            height={40}
            className='w-full h-full object-contain rounded-full'
          />
        </div>
      </div> */}
      <Link href='/resume'>
        <h1 className='text-white text-[25px] font-semibold'>
        Honghao
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
          
           <span>'s Resume</span>
        </span>
        
        </h1>
      </Link>
      
      <div className='flex flex-row gap-5 mb-2'>
        {Socials.map((social) => (
          <Link href={social.link} key={social.name}>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={40}
              height={40}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar
