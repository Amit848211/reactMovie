import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Card } from './Card';
import axios from "axios";

function Search() {
  const[movieData,setmovieData] = useState([])
  const{ movie }= useParams()

  async function searchData() {
   
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${movie}&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQzOWM3MGE1NDgxMThlMmJhMjZlY2NlMzU5ZjViYSIsInN1YiI6IjY1NDBmMmVjNTc1MzBlMDEyY2Y0YjkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4uIkCm6fPL2OXUS9zuy_J8DTBOUbPdIoI3I5XNDoJU",
        },
      }
    );
    setmovieData(data.data.results)
    console.log(movie,data.data.results);
    useDispatch(settopRated(data.data.results));
    
  }
   useEffect(()=>{
    searchData()
   },[])

  return (
   <>
        {!movieData ? (<div>
          <Skeleton height={500} count={1} />
        </div>)
        :(<div className="w-full h-auto pt-6 pb-6 bg-[#04152D] flex items-center justify-center flex-wrap gap-2">
          {movieData.map((movie) => {
              return (
                <div
                  className="w-[250px] h-[400px] pb-3"
                >
                  <NavLink key={movie.id} to={`/moviedetails/${movie.id}`}>
                    <Card image={movie.poster_path} title={movie.original_title} date={movie.release_date}/>
                  </NavLink>
                </div>
              );
            })}

        </div>)}
   </>
  )
}

export default Search