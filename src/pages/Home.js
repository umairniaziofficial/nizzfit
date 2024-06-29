import React from 'react'
import Banner from "../components/Banner"
import Navbar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import Testimonial from '../components/Testimonial'
import Categories from '../components/Categories'
import Exercises from '../components/Exercises'
import BmiCalculator from '../components/BmiCalculator'
import Quote from '../components/Quote'
import Footer from '../components/Footer'
import AboutComponent from '../components/AboutComponent'

const Home = () => {
 
  return (
    <div className='h-full'>
        <Navbar/>
        <Banner/>
        <SearchBar/>
        <Categories/>
        <Exercises/>
        <Testimonial/> 
        <AboutComponent/>
        <BmiCalculator/>
        <Quote/>
        <Footer/>
    </div>
  )
}

export default Home
