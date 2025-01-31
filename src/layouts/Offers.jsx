import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import OffersImg1 from '../assets/offers1.png'
import OffersImg2 from '../assets/offers2.png'
import OffersImg3 from '../assets/offers3.png'
import Image from '../components/Image'
import ParaHeader from '../components/ParaHeader'
import ParaText from '../components/ParaText'
import OffersList from '../components/OffersList'
import Button from '../components/Button'
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const Offers = () => {
  return (
    <section className='py-20'>
        <Container>
            <Flex className='items-center mb-[80px]'>
                <div className="w-1/2 px-10">
                    <ParaHeader className='w-[489px]' text='We have more than 1000 selected Destination'/>
                    <ParaText className='w-[432px] py-5' text='You can choose one of many option that we have on our website. Every destination have been 4+ star rated by our user before. You can search by clicking our button on below of the this text man.'/>
                    <Button text='Search Destination'/>
                </div>
                <div className="w-1/2">
                    <Image src={OffersImg1}/>
                </div>
            </Flex>
            
            <Flex className='items-center'>
                <div className="w-1/2">
                    <Image src={OffersImg2}/>
                </div>
                <div className="w-1/2 px-10">
                    <ParaHeader className='w-[489px]' text='Always give you promo on every Month / Event'/>
                    <ParaText className='w-[432px] py-5' text='We make sure give you a lot of promo every motnh 
                    or event based on calendar. If you want, just Subscribe on Newsletter.'/>
                    <Flex className='gap-x-7 flex-wrap'>
                        <OffersList text='25% for New Members'/>
                        <OffersList text='Cancelled refund 100%'/>
                        <OffersList text='Up 50% on your birthday'/>
                        <OffersList text='Reward for 1000% Points'/>
                        <OffersList text='Cashback 10% via OVO'/>
                    </Flex>
                </div>
            </Flex>

            <Flex className='items-center mt-[80px]'>
                <div className="w-1/2 px-10">
                    <ParaHeader className='w-[489px]' text='100% Money back Guarantee If you Cancel'/>
                    <ParaText className='w-[432px] py-5' text='We Promises in this case. We still want 
                    to refund xyour money when you cancel order.'/>
                    <div className='w-[420px] h-[200px] bg-iconCard'>
                        <Flex className='gap-x-3 items-center p-5'>
                            <FaCircle />
                            <p className='text-[16px] font-poppins font-medium text-primary'>Friendly, quick, easy</p>
                            <IoIosArrowUp />
                        </Flex>
                        <p className='text-[14px] text-paraText font-poppins font-light px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam, fuga, temporibus sed doloribus labore nostrum neque cupiditate placeat ad, eaque maxime. Voluptas a eos at tempore molestias, quam doloremque.</p>
                    </div>
                    <Flex className='gap-x-3 items-center p-5'>
                        <FaRegCircle />
                        <p className='text-[16px] font-poppins font-medium text-primary'>Fast Responsive Answer</p>
                        <FaAngleDown />
                    </Flex>
                    <Flex className='gap-x-3 items-center p-5'>
                        <FaRegCircle />
                        <p className='text-[16px] font-poppins font-medium text-primary'>Money back Guarantee</p>
                        <FaAngleDown />
                    </Flex>
                </div>
                <div className="w-1/2 relative">
                    <Image src={OffersImg3}/>
                    <div className='absolute px-5 py-2 bg-white shadow-3xl rounded-[8px] bottom-[133px] left-20'>Hi, Can you help me? 😔</div>
                    <div className='absolute px-5 py-2 bg-white shadow-3xl rounded-[8px] bottom-[70px] left-[120px]'>Can I get my money back?</div>
                    <div className='absolute px-5 py-2 bg-white shadow-3xl rounded-[8px] bottom-[7px] left-[100px]'>Thanks for your help!! 😍😍😍😍</div>
                
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Offers