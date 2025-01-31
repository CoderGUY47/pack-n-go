import React from 'react'
import Navbar from "../layouts/Navbar"
import Banner from '../layouts/Banner'
import Travel from '../layouts/Travel'
import Discover from '../layouts/Discover'
import PopularDestination from '../layouts/PopularDestination'
import Offers from '../layouts/Offers'
import TopDestination from '../layouts/TopDestination'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Travel/>
        <PopularDestination/>
        <Discover/>
        <Offers/>
        <TopDestination/>
    </>

  )
}

export default Home