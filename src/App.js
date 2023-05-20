import React from 'react'

import './App.css'
import {Header, Footer, Possibility, Whatgpt3, Features, Blog} from './containers/exportComponents';
import { Cta, Brand, NavBar } from './Components/exportComponents'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
