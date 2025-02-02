import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { FaFacebook, FaLinkedin, FaPinterest, FaXTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <Flex>
                <div className="w-6/12">
                    <Image className='w-[30%]' src={Logo}/>
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
                <div className="w-2/12 gap-x-10">
                    <ul className='flex flex-col font-poppins font-normal py-[10px] gap-y-[20px]'>
                        <li className='text-[25px] font-bold'>Tour</li>
                        <li className='text-paraText'>Thailand</li>
                        <li className='text-paraText'>Vietnam</li>
                        <li className='text-paraText'>Korea</li>
                        <li className='text-paraText'>Mexico</li>
                        <li className='text-paraText'>Italy</li>
                    </ul>
                </div>

                <div className="w-2/12 gap-x-10">
                    <ul className='flex flex-col font-poppins font-normal py-[10px] gap-y-[20px]'>
                        <li className='text-[25px] font-bold'>Support</li>
                        <li className='text-paraText'>Account</li>
                        <li className='text-paraText'>Legal</li>
                        <li className='text-paraText'>Contact</li>
                        <li className='text-paraText'>Affiliate Program</li>
                        <li className='text-paraText'>Privacy Policy</li>
                    </ul>
                </div>

                <div className="w-2/12 gap-x-10">
                    <ul className='flex flex-col font-poppins font-normal py-[10px] gap-y-[20px]'>
                        <li className='text-[25px] font-bold'>Useful Pages</li>
                        <li className='text-paraText'>Deals</li>
                        <li className='text-paraText'>FAQs</li>
                        <li className='text-paraText'>Why Choose Us</li>
                        <li className='text-paraText'>Subscribe</li>
                    </ul>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Footer