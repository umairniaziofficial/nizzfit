import React from 'react'
import Banner from "../components/Banner"
import Navbar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import Testimonial from '../components/Testimonial'
import Categories from '../components/Categories'
import Exercises from '../components/Exercises'

const Home = () => {
 
  return (
    <div className='h-full'>
        <Navbar/>
        <Banner/>
        <SearchBar/>
        <Categories/>
        <Exercises/>
        <Testimonial/>
    </div>
  )
}

export default Home
