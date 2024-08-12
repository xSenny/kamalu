import React from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col xl:flex-row justify-between items-center'>
      <div className='w-full flex flex-col gap-12 items-center'>
        <motion.h1 initial={{
          y: 100,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }} className="font-black text-[20px] md:text-[48px] text-center text-accent">Hiking & Camping <br /> Equipment</motion.h1>
        <motion.p initial={{
          x: -100,
          opacity: 0
        }} whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }} className="text-[15px] md:text-[24px] text-center">Branded and quality we used product and we give the best</motion.p>
        <Button >Discover More</Button>
      </div>
      <div className='flex w-full items-center justify-center'>
        <img src="./assets/hero.png" alt="Hero" className='w-[500px] h-[500px] object-contain rotate-12' />
      </div>
    </section>
  )
}

export default Hero
