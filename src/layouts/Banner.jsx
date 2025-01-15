import React from 'react'
import Container from './../components/Container';
import Flex from '../components/Flex';
import Button from '../components/Button';
import InputCard from '../components/InputCard';
import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <section className='bg-banner'>
        <Container>
          <Flex>
            <div className="w-1/2 pt-[27px] pb-[100px]">
              <h1 className='pt-10 pb-2 w-[590px] text-[65px] text-primary font-semibold font-poppins leading-[70px]'>
                Start Exploring to Find Inner Peace by Traveling.</h1>
              <p className="pt-5 pb-7 w-[590px] text-base text-third font-normal font-poppins text-paraText leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi amet est. 
                Incidunt officia vero beatae est, nostrum similique veniam?
              </p>
              <Button text='Discover Now'/>
              <div className="relative w-[825px] mt-10 bg-white rounded-lg rounded-tl-none pb-0">
                <Flex className='py-9 px-6 gap-[50px]'>
                  <InputCard/>
                  <InputCard/>
                  <InputCard/>
                </Flex>
                <button className='absolute top-5 right-7 p-[30px] bg-secondary rounded-lg'>
                  <FiSearch className='text-white text-xl'/>
                </button>
              </div>
            </div>
            <div className="w-1/2"></div>
          </Flex>
        </Container>
    </section>
  )
}

export default Banner