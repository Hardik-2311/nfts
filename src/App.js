import React from 'react'
import "./App.css"
import Header from './components/Header';
import TopFold from './components/TopFold';;

const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
    </div>
  )
}

export default App
