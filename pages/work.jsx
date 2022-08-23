import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
      <Hero heading='Our Work' message='This is some of our work!' />
      <Portfolio />
    </div>
  )
}

export default work