import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { FaFacebook, FaLinkedin, FaPinterest, FaXTwitter } from 'react-icons/fa6'
import FooterList from '../components/FooterList'
const Footer = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <Flex className='gap-x-10'>
                <div className="w-[40%]">
                    <Image className='w-[40%]' src={Logo}/>
                    <ul className='flex list-none gap-x-5 py-[30px]'>
                        <li><FaFacebook className='text-[44px] text-[#1877F2]'/></li>
                        <li><FaXTwitter className='text-[44px] text-primary'/></li>
                        <li><FaLinkedin className='text-[44px] text-[#0A66C2]'/></li>
                        <li><FaPinterest className='text-[44px] text-[#E60019]'/></li>
                    </ul>
                    <p className='w-[344px] test-base text-paraText font-poppins font-normal'>
                        Business Number : +12 4825415478
                        3131 Doctor Drive. LA, California
                        Complaints/Enquiries: pack&go@mail.com
                    </p>
                </div>
                <div className="w-[20%]">
                    <FooterList 
                    footerTitle='Tour'
                    liOne='Thailand'
                    litwo='Vietnam'
                    lithree='Korea'
                    liFour='Mexico'
                    liFive='Italy'
                    />
                </div>
                <div className="w-[20%]">
                    <FooterList 
                    footerTitle='Support'
                    liOne='Account'
                    litwo='Legal'
                    lithree='Contact'
                    liFour='Affiliate Program'
                    liFive='Privacy Policy'
                    />
                </div>
                <div className="w-[20%]">
                    <FooterList 
                    footerTitle='Useful Pages'
                    liOne='Deals'
                    litwo='FAQs'
                    lithree='Why Choose Us'
                    liFour='Subscribe'
                    />
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Footer