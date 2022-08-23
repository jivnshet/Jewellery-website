import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Collection Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image src="https://images.pexels.com/photos/1516357/pexels-photo-1516357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" layout='responsive' width='677' height='451' />
        </div>
        <div className='w-full h-full'>
          <Image src="https://images.pexels.com/photos/634242/pexels-photo-634242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" layout='responsive' width='215' height='217' objectFit='cover' />
        </div>
        <div className='w-full h-full'>
          <Image src="https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" layout='responsive' width='215' height='217' objectFit='cover' />
        </div>
        <div className='w-full h-full'>
          <Image src="https://images.unsplash.com/photo-1601121141412-75c39efebac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=938&q=80" alt="/" layout='responsive' width='215' height='217' objectFit='cover' />
        </div>
        <div className='w-full h-full'>
          <Image src="https://images.pexels.com/photos/5442465/pexels-photo-5442465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" layout='responsive' width='215' height='217' objectFit='cover' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio