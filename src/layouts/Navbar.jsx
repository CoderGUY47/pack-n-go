import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import LogoImage from '../assets/logo.png'
import List from '../components/List'
import Button from './../components/Button';

const Navbar = () => {
  return (
    <nav className='py-7'>
        <Container>
        <Flex className="items-center">
            <div className="w-2/12">
                <Image src={LogoImage}/>
            </div>
            <div className="w-8/12">
                <ul>
                    <Flex className="justify-center gap-x-9 py-2 ml-14">
                        <List liText="Home"/>
                        <List liText="Tour"/>
                        <List liText="Booking"/>
                        <List liText="Pages"/>
                        <List liText="Features"/>
                        <List liText="Blog"/>
                    </Flex>
                </ul> 
            </div>
            <div className="w-2/12 text-right">
                <Button text='Book Now'/>
            </div>
        </Flex>
        </Container>
    </nav>
  )
}

export default Navbar