import React from 'react'
import Navbar from "../layouts/Navbar"
import Banner from '../layouts/Banner'
import Travel from '../layouts/Travel'
import Discover from '../layouts/Discover'
import PopularDestination from '../layouts/PopularDestination'
import Offers from '../layouts/Offers'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Travel/>
        <PopularDestination/>
        <Discover/>
        <Offers/>
    </>

  )
}

export default Home