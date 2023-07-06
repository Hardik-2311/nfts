import React from 'react'
import "./App.css"
import Header from './components/Header';
import TopFold from './components/TopFold';
import Brands from './components/Brands';
import Trending from './components/Trending';
import Info from './components/Info';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <Brands />
      <Trending />
      <Info />
      <Footer />

    </div>
  )
}

export default App
