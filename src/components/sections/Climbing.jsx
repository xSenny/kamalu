import React from 'react'
import { climbingProducts } from '../../data'
import Card from '../Card'

const Climbing = () => {
  return (
    <section id="climbing" className='min-h-screen bg-gray-300 flex flex-col items-center p-6 xl:p-24 gap-2'>
      <h1 className='text-accent text-lg text-center'>POPULAR ITEMS</h1>
      <h1 className='text-black text-4xl font-bold text-center'>Popular Climbing Equipment</h1>

      <div className='flex gap-6 flex-wrap mt-16 justify-center'>
        {climbingProducts.map((i, ind) => (
          <Card data={i} key={ind}/>
        ))}
      </div>
    </section>
  )
}

export default Climbing
