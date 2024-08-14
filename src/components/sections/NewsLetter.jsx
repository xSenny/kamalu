import React from 'react'
import Button from '../Button'

const NewsLetter = () => {
  return (
    <section id='newsletter' className='py-28 bg-gray-300 flex justify-center items-center'>
      <div className='flex flex-col items-center gap-4 bg-gray-500 p-8 rounded-xl'>
        <h1 className='text-4xl font-bold text-gray-800'>Newsletter</h1>
        <p className='text-white'>Stay up to date with our latest news and products.</p>
        <div className='flex gap-4'>
          <input type="email" placeholder='Your Email Address' className='rounded-lg p-2' />
          <Button className={'rounded-lg'}>Subscribe</Button>
        </div>
        <p className='text-gray-300'>Your email is safe with us. We do not spam!</p>
      </div>
    </section>
  )
}

export default NewsLetter
