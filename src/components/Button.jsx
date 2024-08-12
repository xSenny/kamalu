import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children, className, onClick}) => {
  return (
    <button className={twMerge('bg-accent text-lg text-white px-6 py-2', className)}>
      {children}
    </button>
  )
}

export default Button
