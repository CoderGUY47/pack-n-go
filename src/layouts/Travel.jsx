import React from 'react'
import Container from './../components/Container';
import ParaHeader from '../components/ParaHeader';
import ParaText from '../components/ParaText';
import TravelCard from '../components/TravelCard';
import icon1 from '../assets/ticon1.png'
import icon2 from '../assets/ticon2.png'
import icon3 from '../assets/ticon3.png'
import icon4 from '../assets/ticon4.png'
import icon5 from '../assets/ticon5.png'
import icon6 from '../assets/ticon6.png'
import Flex from '../components/Flex';

const Travel = () => {
  return (
    <section className='py-[150px]'> 
        <Container>
            <ParaHeader className='text-center' text='Travel Benefit For User'/>
            <ParaText className='w-[690px] mx-auto text-center pt-5 pb-[112px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'/>

            <Flex className="flex-wrap gap-x-[20px] gap-y-[20px]">
            <TravelCard 
            cardTitle="Cheap than Other" 
            cardInfo="Travelya is cheaper a other travel agency." 
            src={icon1}/>

            <TravelCard 
            cardTitle="Secure Payment" 
            cardInfo="You can pay your book withoutdoubt again." 
            src={icon2}/>
            
            <TravelCard 
            cardTitle="Easy To Book" 
            cardInfo="Follow flow, Click, Pay. Wait just wait e-ticket." 
            src={icon3}/>

            <TravelCard 
            cardTitle="24/7 Support" 
            cardInfo="We’re ready help you anytime and anywhere you are." 
            src={icon4}/>

            <TravelCard 
            cardTitle="Best Offers" 
            cardInfo="Inform you about all best offers for all destination." 
            src={icon5}/>

            <TravelCard 
            cardTitle="Fast Refund" 
            cardInfo="If you canceled. We can refund your money 1*12." 
            src={icon6}/>

            </Flex>

        </Container>
    </section>
  )
}

export default Travel