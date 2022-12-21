import React from 'react'
import Header from './components/Header'
import NavProvider  from './context/NavContext';
import Bookings from './sections/Bookings'
import Destinations from './sections/Destinations'
import Flights from './sections/Flights';
import Home from './sections/Home';
import Hotels from './sections/Hotels';

const App = () => {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <Destinations />
        <Hotels />
        <Flights />
        <Bookings />
      </NavProvider>
    </div>
  )
}

export default App