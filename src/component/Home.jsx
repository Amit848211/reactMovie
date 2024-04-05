import React, { useState } from 'react'
import Search from './Search'
import {useDispatch, useSelector} from 'react-redux'
import Trending from './Trending';
import Popular from "./Popular"
import TopRated from "./TopRated"
import { useNavigate } from "react-router-dom";



function Home() {
  const[searchInput,setsearchInput]=useState("")
  const navigate = useNavigate();

 const dispatch =useDispatch()
 const movie = useSelector((state)=>state.movieSlice.movie);


 function redirectSearch() {
  if (searchInput !== "") {
    navigate(`/search/${searchInput}`);
  }
}

console.log(movie);

  return (
    <>
      
      <div 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/20884219/pexels-photo-20884219.jpeg')",
      backgroundSize: 'cover',
      }}
      className="w-full h-[650px] flex flex-col gap-6 items-center justify-center opacity-95">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-8xl text-white font-bold">Welcome.</h1>
        <p className="text-2xl text-white font-bold">Millions of movies, TV shows and people to discover. Explore now.</p>

      </div>
      <div className="flex">
        <input 
        className="w-[700px] h-16 rounded-r-full rounded-l-full px-5 text-2xl focus:outline-none"
        type='text'
        value={searchInput}
        onChange={(e)=>setsearchInput(e.target.value)}
        placeholder='Search for a movie or tv show...'></input>
        <button 
        onClick={redirectSearch}
        className="w-40 h-16 bg-orange-600 text-3xl text-white rounded-r-full -ml-40">Search</button>
      </div>
      </div>
      <Trending />
      <Popular />
      <TopRated />
      
    </>
  )
}

export default Home