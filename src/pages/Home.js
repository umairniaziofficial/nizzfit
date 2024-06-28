import React from 'react'
import Banner from "../components/Banner"
import Navbar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import Testimonial from '../components/Testimonial'
import Categories from '../components/Categories'

const Home = () => {
 
  return (
    <div className='h-full'>
        <Navbar/>
        <Banner/>
        <SearchBar/>
        <Categories/>
        <Testimonial/>
    </div>
  )
}

export default Home
