import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'
import Hero from './Components/Landing/Hero'
import HotelInfo from './Components/Landing/HotelInfo'
import GiftSection from './Components/Landing/GiftSection'
import FeedBack from './Components/Landing/FeedBack'
import AboutHero from './Components/About/AboutHero'
import AboutInfo from './Components/About/AboutInfo'
import Faq from './Components/About/Faq'
import ContactHero from './Components/Contact/ContactHero'
import ContactInfo from './Components/Contact/ContactInfo'
import BookingHero from './Components/Booking/BookingHero'
import BookingInfo from './Components/Booking/BookingInfo'
import GallerySection from './Components/Landing/GallerySection'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Privacy from './Components/Privacy';
import Terms from './Components/terms';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<> <Hero /> <HotelInfo /> <GiftSection /> <GallerySection /> <FeedBack /> </>} />
          <Route path='/about' element={<><AboutHero /> <AboutInfo /> <Faq /> </> } />
          <Route path='/contact' element={<><ContactHero/> <ContactInfo /> </> } />
          <Route path='/booking' element={<><BookingHero /> <BookingInfo /> </> } />
          <Route path='/book-stay' element={<><BookingInfo /> </> } />
          <Route path='/privacy' element={<><Privacy /> </> } />
          <Route path='/terms' element={<><Terms /> </> } />
        </Route>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
