import React from 'react'
import { HeadNav } from '../components/HeadNav'
import HeroSection from '../components/HeroSection'
import AppCard from '../components/AppCard'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <HeadNav />
      <HeroSection />
      <AppCard />
      <Footer />
    </div>
  )
}

export default HomePage