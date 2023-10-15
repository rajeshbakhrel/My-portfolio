import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return <div className='py-16 lg:section mb-14'id='contact'>
    <div className="container mx-auto">
  <div className="flex flex-col lg:flex-row">

 
      {/* text  */}
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount:0.3}} 
      className='flex-1 flex justify-start items-center'>
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
             Get in touch
             </h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
            Let's work <br/> together
          </h2>
        </div>
      </motion.div>



      {/* form  */}
      <motion.form
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount:0.3}} 
      action="https://formspree.io/f/xrgwrqea"
      method='post'
      className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-18 p-5 items-start mb-4'>
        <input
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-whiite focus:border-accent transition-all'
        type='text'
        name='UserName' autoComplete='off' required
        placeholder='Your name'
        />

        <input
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-whiite focus:border-accent transition-all'
        type='email'
        name='E-mail' autoComplete='off' required
        placeholder='Your email'
        />

        <textarea
        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-whiite focus:border-accent transition-all resize-none mb-12'
        placeholder='your message'
        autoComplete='off' name='Message' required />
        <button
        type='submit'
        typeof='submit'
        value='send'
         className='btn btn-lg '
        >Send message</button>
        


      </motion.form>
    </div>
    </div>
  </div>;
};

export default Contact;
