import React from 'react';
import Image from '../assets/rajeshh.png'
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import {ImGithub} from "react-icons/im"
import {FaFacebook} from "react-icons/fa"
import {PiInstagramLogoFill} from "react-icons/pi"
import { motion } from 'framer-motion';
import {fadeIn} from "../variants"

const Banner = () => {

  const openFacebookInNewTab = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const openGitInNewTab = () => {
    window.open('https://github.com/rajeshbakhrel', '_blank');
  };

  const openInstaInNewTab = () => {
    window.open('https://www.instagram.com/ramosjesh_/', '_blank');
  };

  return (<section  className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:item-center lg:pap-x-12'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          RAJESH <span>BAKHREL</span>
        </motion.h1>
        <motion.div
         variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary
        font-semibold uppercase leading-[1]'>
          <span className='me-4'>I am a</span>
          <TypeAnimation sequence={[
            'Developer',
            2000,
            'Designer',
            2000,
          ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
         
        </motion.div>
        <motion.p
         variants={fadeIn('up', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.7}}
        className='mb-8 max-w-lg mx-auto lg:mx-0'>
          Inquisitive, Enthusiastic and Optimistic person with a good taste in music, sketching and 
Sports. Passionate about crafting digital experiences, creating art, staying active, and playing music.

       </motion.p>
       <motion.div
       variants={fadeIn('up', 0.6)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7}}
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
        <Link smooth={true}  to='contact'  className='cursor-pointer'><button className='btn btn-lg'>Contact me</button></Link>
        <Link smooth={true}  to='home' className='cursor-pointer text-gradient btn-link '>
          my portfolio
        </Link>
       </motion.div>
       <motion.div 
       variants={fadeIn('up', 0.7)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7}}
       className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
        <p onClick={openGitInNewTab}><ImGithub/></p>
        <p onClick={openFacebookInNewTab}><FaFacebook/></p>
        <p onClick={openInstaInNewTab}><PiInstagramLogoFill/></p>
       </motion.div>
      </div>
      <motion.div
      variants={fadeIn('down', 0.5)}
      initial='hidden'
      whileInView={'show'}

       className='image-container-full hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
      <img className='image-container' src={Image} alt='sorry'/>
      
      </motion.div>
     
      </div>
    </div>
  </section>);
};

export default Banner;
