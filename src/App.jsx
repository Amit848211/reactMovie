import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route }from "react-router-dom"
import Home from "./component/Home"
import TvShow from "./component/TvShow"
import Movies from "./component/Movies"
import Navbar from "./component/Navbar"
import Footer from './component/Footer'
import Search from './component/Search'
import MovieDetails from './component/MovieDetails'


function App() {
  console.log(import.meta.env.VITE_API_KEY);





  return (
    <>
    <div className="w-full">
       <BrowserRouter>
       <Navbar />
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/movies" element={<Movies />}/>
           <Route path="/tvshow" element={<TvShow />}/>
           <Route path="/search/:movie" element={<Search />}/>
           <Route path="moviedetails/:id" element={<MovieDetails />}/>
        </Routes>
        <Footer />
       </BrowserRouter>
      
       </div> 
    </>
  )
}

export default App
