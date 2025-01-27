// import React from 'react'
// import Navbar from './layouts/Navbar'
// import Banner from './layouts/Banner'
// import Travel from './layouts/Travel'
// import Discover from './layouts/Discover'
// import PopularDestination from './layouts/PopularDestination'



// const App = () => {
//   return (
//   <>
//       <Navbar/>
//       <Banner/>
//       <Travel/>
//       <PopularDestination/>
//       <Discover/>
//   </>
//   )
// }

// export default App

import React from 'react'
import Home from './pages/Home';
import Tours from './pages/Tours';


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Booking from './pages/Booking';

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
      <Route 
      path="/" 
      element={<Home />}
      >
      </Route>

      <Route 
      path="/tours" 
      element={<Tours />}
      >
      </Route>

      <Route 
      path="/books" 
      element={<Booking />}
      >
      </Route>
  </>
  )
);




const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App