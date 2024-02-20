import React from 'react';
import { Link } from 'react-scroll';
import img5 from "../assets/again.png"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import{fadeIn} from '../variants'

const About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,
  })
  return <div className='section' id='about' ref={ref}>
 <div className="container mx-auto">

        {/* respomsive image  */}

      {/* <img className=' external-css-one flex-1 bg-myphoto3 bg-contain bg-no-repeat mix-blend-lighten bg-top' src={img5}/> */}


  <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 ig:gap-y-0 h-screen'>
    <motion.div 
    variants={fadeIn('right', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount:0.3}}
    className="flex-1 
       external-css-two
     custom-background 
    bg-contain bg-no-repeat 
    h-[740px] 
    
    mix-blend-lighten bg-top">

    {/* <img className='flex-1 bg-myphoto3 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top' src={img5}/> */}

    </motion.div>

    <motion.div
     variants={fadeIn('left', 0.5)}
     initial='hidden'
     whileInView={'show'}
     viewport={{once: false, amount:0.3}}
    className='flex-1'>
      <h2 className='h2 text-accent'>About me. </h2>
      <h3 className='h3 mb-4'>I'm a Front-end Developer 
        with over 4 years of experience
      </h3>
      <p className='mb-6 '>
      A frontend developer who specializes in creating the visual elements and user interface of websites and web applications.Collaborate with UI/UX designers and backend developers to bring web projects to life.familiarity using the React Js and high experience of working with API.
      </p>
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

      <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={4} duration={3}/> : null}
          </div>
          <div className='font-primary text-sm tracking=[2px]'>
            Years of <br/>
            Experience
          </div>
        </div>

        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={11} duration={3}/> : null}
            {/* k+ */}
          </div>
          <div className='font-primary text-sm tracking=[2px]'>
            Project <br/>
            Completed
          </div>
        </div>
        
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={11} duration={3}/> : null}
            {/* k+ */}
          </div>
          <div className='font-primary text-sm tracking=[2px]'>
           Satisfied <br/>
            Clients
          </div>
        </div>
        
      </div>
      <div className='flex gap-x-8 items-center'>
          <Link smooth={true} to='contact'className='cursor-pointer' ><button className='btn btn-lg'>Contact me</button></Link>
          <Link smooth={true} to='home'className='cursor-pointer text-gradient btn-link'>My Portfolio</Link>
        </div>
    </motion.div>
  </div>
  
  
</div>   
    
</div>;
};

export default About;
