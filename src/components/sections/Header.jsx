import React from 'react'
import { navLinks } from './../..//data';
import Button from '../Button';

const Header = () => {
  return (
    <div className='p-6 flex justify-between items-center bg-white'>
      <img src="./assets/logo.png" alt="" />
      <div className='flex gap-12 items-center'>
        {navLinks.map(({link, label}) => (
          <a key={link} href={link} className='hover:text-accent text-lg transition-all duration-200 hidden xl:block'>
            {label}
          </a>
        ))}
        <Button><a href="#hiking">Buy Now</a></Button>
      </div>
    </div>
  )
}

export default Header
