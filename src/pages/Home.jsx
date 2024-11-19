import React from 'react'
import Header from '../components/Header'
// import BookTrip from "./BookTrip";
import Client from "../components/Client";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Journey from "../components/Journey";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Banner from '../components/Banner';

const Home = () => {
  return (
    <>
    <Header/>

<Destinations />
<Journey />
<Showcase />
<Banner />
<Client /> 
    </>
  )
}

export default Home