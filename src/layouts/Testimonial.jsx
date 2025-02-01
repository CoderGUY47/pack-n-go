import React from 'react'
import Image from '../components/Image';
import Container from '../components/Container';
import ParaHeader from '../components/ParaHeader';
import ParaText from '../components/ParaText';
import Flex from './../components/Flex';
import { GoDotFill } from "react-icons/go";

const Testimonial = () => {
  return (
    <section className='py-[100px]'>
    <Flex>
        <div className="w-1/2 relative">
            <Image className='absolute ml-[77%] w-[90px] h-[90px]' src='/src/assets/p6.png'/>
            <Image className='absolute ml-[20%] mt-[250px] w-[100px] h-[100px]' src='/src/assets/p7.png'/>
            <Image className='absolute ml-[51%] mt-[150px] w-[60px] h-[60px]' src='/src/assets/p4.png'/>
            <Image className='absolute ml-[40%] mt-[50%] w-[85px] h-[85px]' src='/src/assets/p3.png'/>
            <Image className='absolute ml-[85%] mt-[300px] w-[75px] h-[75px]' src='/src/assets/p2.png'/>
        </div>
        <div className="w-1/2">
        <Container>
            <div className='px-[15px]'>
                <ParaHeader className='w-[489px]' 
                text='Testimonial'/>
                <Image className='py-[40px] ml-[45px] mt-[40px]' src='/src/assets/quote-100.png'/>
                <ParaText className='w-[432px] py-6' 
                text='Since 2014, we’ve helped more than 500,000 people  of all ages 
                enjoy the best outdoor experience of their lives. Whether 
                it’s for one day or a two-week vacation'/>
                <p className='text-base text-primary font-poppins font-bold'>Farah smith - Visitor</p>
                <Flex className='ml-[-4px] py-4'>
                    <GoDotFill className='text-secondary'/>
                    <GoDotFill className='text-[#c4c4c4]'/>
                    <GoDotFill className='text-[#c4c4c4]'/>
                </Flex>
            </div>
        </Container>
        </div>
    </Flex>
    </section>
  )
}

export default Testimonial