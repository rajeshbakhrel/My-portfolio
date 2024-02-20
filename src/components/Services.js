import React from 'react';
import {BsArrowUpRightCircleFill} from "react-icons/bs"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name:'UI/UX Design',
    description:'Possess a great deal of expertise and knowledge in HTML, CSS, and Figma. as well as a sketch artist.  ',
    link: 'Learn more',
   
  },
  {
    name:'Web Developement',
    description:'Possess knowledge of JavaScript programming language. accomplished numerous projects with React Js. possess extensive expertise using APIs',
    link: 'Learn more',
   
  },
  {
    name:'Git',
    description:'A solid understanding of git. can cooperate with others. possess prior experience working in a branch.',
    link: 'Learn more',
   
  },
 
  {
    name:'Other skills',
    description:'Own two hackathon experiences, strong leadership, amicable, and cooperative',
    link: 'Learn more',
   
  },
]


const Services = () => {
  const openGitInNewTab = () => {
    window.open('https://github.com/rajeshbakhrel', '_blank');
  };
  return <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* {text and image} */}
        <motion.div
             variants={fadeIn('right', 0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount:0.3}} 
        className='flex-1
        lg:bg-services bg-contain
        
         
         lg:bg-bottom 
         bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          I'am a Frontend developer specializing in creating attractive and functional user interfaces,
          </h3>
          <button className='btn btn-sm' onClick={openGitInNewTab}> See my work</button>
        </motion.div>
        {/* {services} */}
        <motion.div
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount:0.3}} 
        className='flex-1'>
          {/* {serviceslist} */}
          <div>
            {services.map((service, index)=>{

              // destructuring
              const{name, description, link} = service
              return<div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#'className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRightCircleFill/>
                    </a>
                  <a href='#' className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
            })}

          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
