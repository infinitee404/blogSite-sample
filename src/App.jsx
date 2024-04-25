import React from 'react'
import Navbar from './components/Navbar'
import NewsSection from './components/NewsSection'
import MoreSection from './components/MoreSection'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <NewsSection />
        <MoreSection />
      </div>
    </>
  )
}

export default App