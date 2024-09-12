import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer';

// 

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsFeed category={category} />
      <Footer />

    </div>
  )
}

export default App