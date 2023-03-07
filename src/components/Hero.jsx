import { motion } from 'framer-motion'

import { styles } from "../styles";

import { ComputersCanvas } from "./canvas/index";
import herobg from '../assets/herobg.svg';

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}
        style={{
            backgroundImage: `url(${herobg})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundPositionY: '0px',
            backgroundPositionX: '0px',
            transform: 'translateY(0px)'
        }}
        >
          <div
            className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
    
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className='text-[#915EFF]'>EVS</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                A Passionate FullStack , <br className='sm:block hidden' />
                Opensource developer
              </p>
            </div>
          </div>

        {/* <ComputersCanvas /> */}

        </section>
      );
}

export default Hero