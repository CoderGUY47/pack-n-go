import React from 'react'
import Container from './../components/Container';
import Flex from './../components/Flex';
import ParaHeader from '../components/ParaHeader';
import ParaText from '../components/ParaText';
import Button from '../components/Button';
import { IoCheckmarkSharp } from "react-icons/io5";
import DiscoCard from '../components/DiscoCard';
import discoIco1 from '../assets/discoIco1.png'
import discoIco2 from '../assets/discoIco2.png'
import discoIco3 from '../assets/discoIco3.png'
import discoIco4 from '../assets/discoIco4.png'


const Discover = () => {
  return (
    <section className='bg-banner pt-[150px] pb-[150px] overflow-hidden'>
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
                        <DiscoCard className='p-4 rounded-xl' src={discoIco1} cardTitle='500k+' cardInfo='Satisfied Clients'/> 
                        <DiscoCard className='p-4 rounded-xl' src={discoIco2} cardTitle='250k+' cardInfo='Active Achieve'/> 
                        <DiscoCard className='p-4 rounded-xl' src={discoIco3} cardTitle='15k+' cardInfo='Active Members'/> 
                        <DiscoCard className='p-4 rounded-xl' src={discoIco4} cardTitle='10k+' cardInfo='Tour Destination'/> 
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Discover