import React from 'react'
import Button from './Button'

const Card = ({data}) => {
  return (
    <div className='w-[300px] h-[400px] bg-white shadow-lg flex flex-col'>
      <div className='h-3/4 flex items-center'>
        <img src={data.image} alt="" className='h-full w-full object-contain' />
      </div>
      <div className='flex flex-col justify-start px-4 gap-2'>
        <h1 className='text-2xl font-bold'>{data.name}</h1>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold text-accent'>{data.price}</h1>
          <Button>Buy</Button>
        </div>
      </div>
    </div>
  )
}

export default Card
