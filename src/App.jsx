import React from 'react'
import Navbar from './components/Navbar'
import NewsSection from './components/NewsSection'
import MoreSection from './components/MoreSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <NewsSection />
        <MoreSection />
      </div>
      <Footer />
    </>
  )
}

export default App