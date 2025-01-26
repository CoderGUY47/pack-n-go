import React from 'react'
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Travel from './layouts/Travel'
import Discover from './layouts/Discover'
import PopularDestination from './layouts/PopularDestination'



const App = () => {
  return (
  <>
      <Navbar/>
      <Banner/>
      <Travel/>
      <PopularDestination/>
      <Discover/>
  </>
  )
}

export default App