import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import Img1 from "../assets/projectone.png"
import Img2 from "../assets/projecttwo.png"
import Img3 from "../assets/projectthree.png"



const Work = () => {
  
  const openGitInNewTab = () => {
    window.open('https://github.com/rajeshbakhrel', '_blank');
  };
  return <div className='section'id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>

        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}} 
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* {text} */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br/>
              Work.
            </h2>
            <p className='max-w-sm mb-16'>This is some of my most recent work. Click the View all projects button to view additional GitHub projects.
               </p>
               <button className='btn btn-sm' onClick={openGitInNewTab}>View all projects</button>
          </div>



          {/* firstcard */}



          {/* {image} */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
         {/* overlay */}
         <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
         {/* img */}
         <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='sorry'/>
         {/* pretitle */}
         <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>Web Developement</span>
          </div>
         {/* title  */}
         <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3xl text-white'>E-Commerce site</span>
         </div>
        </div>
        </motion.div>
        
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}} 
        className='flex-1 flex flex-col gap-y-10'>


          {/* secondcard */}


          {/* image  */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
         {/* overlay */}
         <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
         {/* img */}
         <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='sorry'/>
         {/* pretitle */}
         <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>Web Developement</span>
          </div>
         {/* title  */}
         <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3xl text-white'>Rental System</span>
         </div>
        </div>



          {/* thirdcard */}


        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
         {/* overlay */}
         <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
         {/* img */}
         <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='sorry'/>
         {/* pretitle */}
         <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>UI/UX Designer</span>
          </div>
         {/* title  */}
         <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3xl text-white'>Futsal Booking</span>
         </div>
        </div>


        </motion.div>
      </div>
    </div>
  </div>;
};

export default Work;
