import React from 'react'
import { motion } from 'framer-motion'
import NumberTicker from '../magicui/NumberTicker'
import { whyTrustUs } from '../../data'
import { CheckIcon } from 'lucide-react'
import Button from '../Button'

const CallToAction = () => {
  return (
    <section className='min-h-screen w-full flex flex-col-reverse xl:flex-row justify-between items-center gap-6'>
      <div className='flex w-full items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{
              y: 40,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1
            }}
          className='px-4 py-6 absolute top-0 right-0 bg-accent flex flex-col justify-center items-center font-bold text-4xl text-white'>
            <div>
              <NumberTicker value={5}/><span>+</span>
            </div>
            <p className='text-sm font-normal text-center'>Years of experience</p>
          </motion.div>
          <img src="./assets/backpacks.jpg" alt="Backpacks" className='w-full xl:w-[500px] h-full object-contain'/>
        </div>
      </div>
      <div className='w-full flex flex-col px-12 xl:px-0 xl:items-start gap-6'>
        <div>
          <h1 className='font-bold text-accent text-lg'>WHY TRUST US?</h1>
          <motion.h1 initial={{
              y: 40,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1
            }} className='font-bold text-black text-4xl'>Committed To Always <br /> Provide The Best</motion.h1>
        </div>
        <p className='max-w-[540px]'>With a passion for the great outdoors, we meticulously curate gear from top brands, ensuring every product meets the highest standards of quality and durability.</p>
        <div className='flex flex-col gap-2'>
          {whyTrustUs.map(i => (
            <div key={i} className='flex gap-3'>
              <CheckIcon className='text-accent'/>
              <p>{i}</p>
            </div>
          ))}
        </div>
        <div className='flex gap-12 items-center justify-center'>
          <Button>
            <a href="/#hiking">Buy Now!</a>
          </Button>
          <p className='text-xl font-bold text-accent'>+61 089 988 8722</p>
        </div>
      </div>
      
    </section>
  )
}

export default CallToAction
