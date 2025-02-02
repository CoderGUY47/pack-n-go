import React from 'react'
import Container from '../components/Container'
import ParaHeader from '../components/ParaHeader'
import ParaText from '../components/ParaText'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='bg-secondary py-[200px]'>
        <Container>
            <Flex className='flex-col items-center mx-auto justify-center text-center'>
                <ParaHeader className='w-[659px] text-white' text='Subscribe To Get The Latest News About Us'/>
                <ParaText className='w-[565px] text-white font-normal font-poppins text-base' 
                text='We Recommended you to subscribe to our newspaperm, enter your email below to get daily update about us.'/>
            <div className="flex items-center bg-white w-[700px] py-[7px] mt-7 rounded-2xl">
            <input className="w-[545px] text-paraText px-4 focus:outline-none 
            placeholder:text-paraText placeholder:normal font-poppins"
            type="text" placeholder="Enter your email address"/>
            <Button className='py-[25px]' text='Subscribe'/>
            </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Subscribe