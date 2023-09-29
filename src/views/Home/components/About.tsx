// packages
import React from 'react';

// types
import { AboutProps } from '@/types';

// assets
import SERVE_FOOD_URL from '@/assets/serve-food.jpg';

const About: React.FC<AboutProps> = props => {
  const { heading, subHeading, description, buttonText } = props;

  return (
    <section className='relative flex justify-between items-center w-full mb-2 p-4 md:p-8 lg:p-16 bg-primary-1'>
      <div>
        <h1 className='mb-2 text-primary-2 text-3xl md:text-4xl lg:text-6xl font-bold'>{heading}</h1>
        <h2 className='mb-4 text-white text-2xl md:text-3xl lg:text-5xl font-bold'>{subHeading}</h2>
        <p className='w-full max-w-[420px] mb-8 text-white text-base md:text-lg lg:text-xl'>{description}</p>
        <button className='px-4 py-2 font-bold bg-primary-2 rounded-[16px]'>{buttonText}</button>
      </div>
      <div className='absolute top-[120px] right-[100px] hidden lg:block lg:w-[320px] lg:h-[360px] xl:w-[420px] xl:h-[460px] rounded-[32px] overflow-hidden'>
        <img className='' src={SERVE_FOOD_URL} alt='serve-food' />
      </div>
    </section>
  );
};

export default About;