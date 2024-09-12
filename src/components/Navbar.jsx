import React from 'react'
import NewsFeed from './NewsFeed'

const Navbar = ({setCategory}) => {
  return (
    <>

    <nav className="bg-gray-700 p-4 w-full overflow-hidden  flex justify-between items-center">

    <div className="text-gray-700 bg-gray-200 p-1 rounded font-serif text-lg badge-l font-bold">Rapid Report
    </div>

    <div>
    <a href="https://muaz-nazir.vercel.app/" className="text-white hover:text-gray-300">Get in Touch</a>
    </div>

   </nav>



 {/* Categories */}
<div className="bg-gray-200 p-2">
<div className="hover:cursor-pointer container mx-auto text-sm flex flex-wrap justify-center text-center space-x-4">
  <p onClick={() => setCategory("sports")} className="text-gray-700 hover:underline whitespace-nowrap">Sports</p>
  <p onClick={() => setCategory("technology")} className="text-gray-700 hover:underline whitespace-nowrap">Technology</p>
  <p onClick={() => setCategory("science")} className="text-gray-700 hover:underline whitespace-nowrap">Science</p>
  <p onClick={() => setCategory("health")} className="text-gray-700 hover:underline whitespace-nowrap">Health</p>
  <p onClick={() => setCategory("business")} className="text-gray-700 hover:underline whitespace-nowrap">Business</p>
  <p onClick={() => setCategory("entertainment")} className="text-gray-700 hover:underline whitespace-nowrap">Entertainment</p>
</div>
</div>


</>

  )}

export default Navbar