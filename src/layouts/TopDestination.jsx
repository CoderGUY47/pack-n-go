import React from 'react'
import Container from '../components/Container'
import ParaHeader from '../components/ParaHeader'
import ParaText from '../components/ParaText'
import Flex from '../components/Flex'
import TopButton from '../components/TopButton'
import TopPopularCard from '../components/TopPopularCard'
import destiTwo from '../assets/destination-2.png'
import destiFour from '../assets/destination-4.png'
import destiFive from '../assets/destination-5.png'


const TopDestination = () => {
  return (
    <section>
        <Container>
            <div className="pt-[70px]">
                <ParaHeader className='w-[480px]' text='Explore Top Destination'></ParaHeader>
                <ParaText className='w-[485px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'></ParaText>
            </div>
            <Flex className="group py-6 gap-x-4 flex-wrap gap-y-4">
                <TopButton text='Popular Destination'/>
                <TopButton text='Destination For Art & Culture'/>
                <TopButton text='Destination For Outdoor Adventer'/>
                <TopButton text='Mountain'/>
                <TopButton text='Beach Destination'/>
            </Flex>

            <Flex className='w-full gap-x-[30px] pt-7 pb-[200px]'>
              <div className="">
                <TopPopularCard 
                image={destiTwo} 
                topIcon=''
                title='Mount Agung, Bali' 
                details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
                location='Indonesia'/>
              </div>
              <div className="">
                <TopPopularCard image={destiFour} 
                title='Venice, Italy' 
                details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
                location='Italy'/>
              </div>
              <div className="">
                <TopPopularCard image={destiFive} 
                title='Lake Thun, Switzerland' 
                details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
                location='Switzerland'/>
              </div>
            </Flex>

        </Container>
    </section>
  )
}

export default TopDestination