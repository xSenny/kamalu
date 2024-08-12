import React from 'react'
import { testimonials } from '../../data'
import Testimonial from '../Testimonial'

const Testimonials = () => {
  return (
    <section className='bg-testimonials w-full min-h-screen relative py-24 flex flex-col items-center gap-12 justify-center'>
      <div className='w-full min-h-screen h-full bg-black/40 flex flex-col items-center absolute top-0 left-0 z-10'></div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-accent font-bold text-2xl text-center mt-26 z-20 relative'>TESTIMONIALS</h1>
        <h1 className='text-white relative z-20 font-bold text-4xl text-center'>What Do Our Customers Say?</h1>
      </div>
      <div className='flex flex-wrap gap-6 justify-center'>
        {testimonials.map((i, ind) => (
          <Testimonial data={i} key={ind}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
