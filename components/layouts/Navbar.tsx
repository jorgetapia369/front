import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full p-2 border-b flex justify-between'>
      <p className='text-2xl font-medium'>CARMEN ORELLANA</p>
      <ul className='flex gap-4 my-auto'>
        <li><Link href='/'>Inicio</Link></li>
        <li><Link href='/banco-santander'>Banco Santander</Link></li>
      </ul>
    </div>
  )
}
