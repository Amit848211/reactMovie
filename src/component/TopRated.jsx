import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { settopRated } from "../redux/movieSlice";
import ReactSimplyCarousel from "react-simply-carousel";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { Card } from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Trending() {
  const whiteBackground = {
    backgroundColor: "white",
    color: "black",
  };
  const orangeBackground = {
    backgroundColor: "orange",
    color: "white",
  };
  const [tv, settv] = useState(whiteBackground);
  const [movies, setmovies] = useState(orangeBackground);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [searchName, setsearchName] = useState();
  const [switchMovie, setswitchMovie] = useState("movie");
  const [isLoading, setIsLoading] = useState(false);
  const[movieData,setmovieData]=useState([])

  const dispatch = useDispatch();
   const topRatedMovie =useSelector((state) => state.movieSlice.topRated);
  async function getTrendigData() {
    setIsLoading(true);
    const data = await axios.get(
      `https://api.themoviedb.org/3/${switchMovie}/top_rated`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQzOWM3MGE1NDgxMThlMmJhMjZlY2NlMzU5ZjViYSIsInN1YiI6IjY1NDBmMmVjNTc1MzBlMDEyY2Y0YjkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4uIkCm6fPL2OXUS9zuy_J8DTBOUbPdIoI3I5XNDoJU",
        },
      }
    );
    setmovieData(data.data.results)
    console.log("amit",data.data.results);
    useDispatch(settopRated(data.data.results));
    setIsLoading(false);
  }

  console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    getTrendigData();
  }, [switchMovie]);

  const weekStyleFunction = () => {
    settv(orangeBackground);
    setmovies(whiteBackground);
    setsearchName("tv");
    setswitchMovie("tv");
  };
  const dayStyleFunction = () => {
    setmovies(orangeBackground);
    settv(whiteBackground);
    setsearchName("movies");
    setswitchMovie("movie");
  };
  console.log("movie",topRatedMovie);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow:true,
    
  }



  return (
    <>
      <div className="w-full h-auto pt-6 pb-6 px-40 bg-[#04152D] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-3xl font-semibold">Top Rated</h1>
          <div className="w-60 bg-white h-12 rounded-full flex items-center justify-between">
            <p
              className="w-28 h-full rounded-full text-black font-semibold flex items-center justify-center"
              style={movies}
              onClick={dayStyleFunction}
            >
              movies
            </p>
            <p
              className="w-32 h-full rounded-full text-black font-semibold flex items-center justify-center"
              style={tv}
              onClick={weekStyleFunction}
            >
              Tv show
            </p>
          </div>
        </div>
        <div className="w-full h-[400px]">

        {!movieData ? (<div className="w-full h-full">
            <Skeleton height={500} count={1} />
        </div>)
        
        : ( 
          <Slider {...settings}>
            {movieData.map((movie) => {
              return (
                <div
                  className="w-[240px] h-[400px] pb-3"
                >
                  <NavLink key={movie.id} to={`/moviedetails/${movie.id}`}>
                  {switchMovie === "movie"?(<Card image={movie.poster_path} title={movie.original_title} date={movie.release_date}/>)
                  :(<Card image={movie.poster_path} title={movie.name} date={movie.first_air_date}/>)
                  }
                  </NavLink>
                </div>
              );
            })}
            </Slider>
         )
        
        }
         



        </div>

      </div>
    </>
  );
}

export default Trending;
