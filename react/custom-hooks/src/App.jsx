import { useEffect, useState } from 'react'
import './App.css'
import GithubUsers from './components/GithubUsers'
import useCurrentLocation from './components/useCurrentLocation'

function App() {
  
  const {location, getLocation } = useCurrentLocation()

  useEffect(()=>{
    getLocation()
  
  }, [])
  return (
    <>
    <GithubUsers/>
    {location && `Your location is latitude: ${location.latitude} longitude: ${location.longitude}`}
    </>
  )
}

export default App
