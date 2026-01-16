import { useState } from 'react'
import './App.css'
import Slideshow from './components/Slideshow'
import IconsWithText from './components/IconsWithText'
import Products from './components/Products'

function App() {

  return (
    <>
      <Slideshow />
      < IconsWithText />
      <Products />
    </>
  )
}

export default App
