import React from 'react'
import HomePage from './HomePage'
import StateService from '@/src/services/states'
import ZoneService from '@/src/services/zones'

const Home = async() => {
  const states = (await StateService.getAll()).data
  
  return (
    <HomePage states={states ?? []}/>
  )
}

export default Home