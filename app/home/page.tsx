import React from 'react'
import HomePage from './HomePage'
import StateService from '@/src/services/states'
import ZoneService from '@/src/services/zones'
import StateController from '@/src/server/controller/state'

const Home = async() => {
  const statesRequest = await StateController.getAll()
  const states = await statesRequest.json()
  return (
    <HomePage states={states ?? []}/>
  )
}

export default Home