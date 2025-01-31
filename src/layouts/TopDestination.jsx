import React from 'react'
import Container from '../components/Container'
import ParaHeader from '../components/ParaHeader'
import ParaText from '../components/ParaText'
import Flex from '../components/Flex'
import TopButton from '../components/TopButton'


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


        </Container>
    </section>
  )
}

export default TopDestination