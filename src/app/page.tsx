import Hero from '@/components/Hero'
import HeroSubText from '@/components/HeroSubText'
import MainNav from '@/components/MainNav'
import TopNav from '@/components/TopNav'
import WorkContent from '@/components/WorkContent'
import Footer from '@/components/Footer'
import React from 'react'
import Subscribe from '@/components/Subscribe'

const HomePage = () => {
  return (
    <div>
      <TopNav />
      <MainNav />
      <Hero />
      <HeroSubText />
      <WorkContent />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default HomePage