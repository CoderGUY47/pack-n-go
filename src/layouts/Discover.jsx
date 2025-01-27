import React from 'react'
import Container from './../components/Container';
import Flex from './../components/Flex';
import ParaHeader from '../components/ParaHeader';
import ParaText from '../components/ParaText';
import Button from '../components/Button';
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { GiTrophy } from "react-icons/gi";
import { TbLocationPin } from "react-icons/tb";
import DiscoCard from '../components/DiscoCard';
// import { FaUser, BsPeopleFill, GiTrophy, TbLocationPin } from "react-icons/fa6";

const Discover = () => {
  return (
    <section className='bg-banner pt-[120px] pb-[150px] -mt-[525px] overflow-hidden'>
        <Container>
            <Flex className='items-center'>
                <div className="w-1/2">
                    <ParaHeader className='-mt-[40px]' text='Go Travel, Discover Remember Us'/>
                    <ParaText className='mt-[30px] w-[500px]' 
                    text='We are self-service data analytics software that lets 
                    you create visually appealing data visualizations and insightful 
                    dashboards in minutes.'/>

                    <Flex className='gap-x-2.5 py-2.5 items-center'>
                        <span><IoCheckmarkSharp className='text-secondary'/></span>
                        <ParaText className='w-[338px]' 
                        text='We are self-service data software visually 
                        appealing data visualizations.'/>
                    </Flex>
                    <Flex className='gap-x-2.5 py-2.5 items-center'>
                        <span><IoCheckmarkSharp className='text-secondary'/></span>
                        <ParaText className='w-[338px]' 
                        text='We are self-service data software visually 
                        appealing data visualizations.'/>
                    </Flex>
                    <Flex className='gap-x-2.5 py-2.5 items-center'>
                        <span><IoCheckmarkSharp className='text-secondary'/></span>
                        <ParaText className='w-[338px]' 
                        text='We are self-service data software visually 
                        appealing data visualizations.'/>
                    </Flex>
                    <Button text='Discover Place' className='mt-[30px]'/>
                </div>

                <div className="w-1/2"> 
                    <Flex className='flex-wrap gap-[30px]'>
                        <DiscoCard DiscoIcon={FaUser}        cardTitle='500k+' cardInfo='Satisfied Clients'/> 
                        <DiscoCard DiscoIcon={BsPeopleFill}  cardTitle='250k+' cardInfo='Active Achieve'/> 
                        <DiscoCard DiscoIcon={GiTrophy}      cardTitle='15k+' cardInfo='Active Members'/> 
                        <DiscoCard DiscoIcon={TbLocationPin} cardTitle='10k+' cardInfo='Tour Destination'/> 
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Discover