import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";





function MovieDetails() {
    const{ id }= useParams()
    const par = useParams()
   console.log("param",par);
   const[currentMovie,setcurrentMovie]=useState([])

     
    async function moviedetails(){
        const data = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQzOWM3MGE1NDgxMThlMmJhMjZlY2NlMzU5ZjViYSIsInN1YiI6IjY1NDBmMmVjNTc1MzBlMDEyY2Y0YjkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4uIkCm6fPL2OXUS9zuy_J8DTBOUbPdIoI3I5XNDoJU",
              },
            }
          ); 

        console.log("moviedetails",data.data);
        setcurrentMovie(data.data)

    }
    useEffect(()=>{
        moviedetails()
    },[])
   

  return (
    <>
        <div className="w-full h-auto px-40 pt-5 flex flex-col pb-4 bg-[#04152D]">
          
                   <div className="w-full h-auto flex gap-10 px-10">
                     <div className="w-[350px] h-[450px]">
                     <img
                           className="rounded w-full h-full object-cover"
                            src={`https://image.tmdb.org/t/p/original/${currentMovie.poster_path}`}
                          alt="image"
                       />
                     </div>
                     <div>
                        <h1 className="text-3xl text-white font-semibold">{currentMovie.original_title}</h1>
                        <h1 className="text-xl text-gray-500 font-semibold">{currentMovie.tagline}</h1>
                        <div>
                            <h1 className="text-3xl text-white pb-2 mt-4 font-semibold">About</h1>
                            <p className="w-[600px] h-auto text-[14px] text-white font-semibold">{currentMovie.overview}</p>
                        </div>
                        <div className="flex gap-5 mt-4">
                             <span className="text-lg text-white  font-semibold">Status: <span className="text-base text-gray-500 font-semibold">{currentMovie.status}</span></span>
                             <span className="text-lg text-white font-semibold">Release Date: <span className="text-base text-gray-500 font-semibold">{currentMovie.release_date}</span></span>
                             <span className="text-lg text-white font-semibold">Runtime: <span className="text-base text-gray-500 font-semibold">{currentMovie.runtime}min</span></span>
                        </div>
                     </div>
                   </div>
        </div>
    </>
  )
}

export default MovieDetails