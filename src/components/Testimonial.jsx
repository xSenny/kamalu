import React from 'react'

const Testimonial = ({data}) => {
  return (
    <div className='bg-black/60 p-5 border-b-accent border-b-4 flex flex-col gap-4 text-white relative z-20'>
      <p className='max-w-[300px] h-4/5'>{data.message}</p>
      <div>
        <p>{data.name}</p>
        <p>{data.occupation}</p>
      </div>
    </div>
  )
}

export default Testimonial
