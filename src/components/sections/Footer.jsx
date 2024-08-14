import { Facebook, Youtube, Twitter, Linkedin, Mail, CheckCheck } from 'lucide-react'
import React from 'react'
import { contactUsData, usefullLinks } from '../../data'

const Footer = () => {
  return (
    <footer className='p-12 bg-[#999995] flex items-center flex-col gap-8 pb-2'>

      <div className='w-full max-w-5xl flex flex-col'>
        <div className='w-full flex justify-center md:justify-between pb-8 border-b-2 border-[#595957]'>
          <img src="./assets/logo.png" alt="" className='hidden md:block' />
          <div className='flex gap-4'>
            <div className='bg-[#595957] p-2 rounded-full flex items-center justify-center cursor-pointer text-white'>
              <Facebook />
            </div>
            <div className='bg-[#595957] p-2 rounded-full flex items-center justify-center cursor-pointer text-white'>
              <Twitter />
            </div>
            <div className='bg-[#595957] p-2 rounded-full flex items-center justify-center cursor-pointer text-white'>
              <Youtube />
            </div>
            <div className='bg-[#595957] p-2 rounded-full flex items-center justify-center cursor-pointer text-white'>
              <Linkedin />
            </div>
            <div className='bg-[#595957] p-2 rounded-full flex items-center justify-center cursor-pointer text-white'>
              <Mail />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap pt-8 gap-4 justify-center md:justify-between'>
          <div className=' flex flex-col gap-4 text-white'>
            <h1 className='font-bold tracking-wider text-xl'>ABOUT US</h1>
            <p className='max-w-xs'>With a passion for the great outdoors, we meticulously curate gear from top brands, ensuring every product meets the highest standards of quality and durability.</p>
          </div>
          <div className=' flex flex-col gap-4 text-white'>
            <h1 className='font-bold tracking-wider text-xl'>USEFULL LINKS</h1>
            <div className='flex flex-col gap-2'>
              {usefullLinks.map(({label, href}) => (
                <div className='flex gap-2' key={label}>
                  <CheckCheck className='text-accent'/>
                  <a href={href}>{label}</a>
                </div>
              ))}
            </div>
          </div>
          <div className=' flex flex-col gap-4 text-white'>
            <h1 className='font-bold tracking-wider text-xl'>CONTACT US</h1>
            <div className='flex flex-col gap-2'>
              {contactUsData.map(({icon, text}) => (
                <div className='flex gap-2' key={text}>
                  {icon}
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className='text-center text-white'>Copyright © All Right Reserved by xSenny 2024 (for Candor Services)</p>
      
    </footer>
  )
}

export default Footer
