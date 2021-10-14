import React from 'react'
import Header from '../Header/Header'
import NavHead from '../NavHead/NavHead'
import Product from './../Product/Product';
import About from './../About/About';
import Slider from '../Slider/Slider';
import './Home.css';
import Form from './../Form/Form';
import Contact from './../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <NavHead></NavHead>
      <Header></Header>
      <Product></Product>
      <About></About>
      <Slider></Slider>
      <Form></Form>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
