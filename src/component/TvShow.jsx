import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import axios from "axios";
import { Card } from './Card';
import { NavLink, useParams } from "react-router-dom";

function Movies() {
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);
  const [genrse, setGenrse] = useState([]);

  async function fetchMovie() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQzOWM3MGE1NDgxMThlMmJhMjZlY2NlMzU5ZjViYSIsInN1YiI6IjY1NDBmMmVjNTc1MzBlMDEyY2Y0YjkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4uIkCm6fPL2OXUS9zuy_J8DTBOUbPdIoI3I5XNDoJU",
        },
      }
    );

    setmovie(data.data.results);
  }

  console.log(movie);

  async function fetchGenrse() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQzOWM3MGE1NDgxMThlMmJhMjZlY2NlMzU5ZjViYSIsInN1YiI6IjY1NDBmMmVjNTc1MzBlMDEyY2Y0YjkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4uIkCm6fPL2OXUS9zuy_J8DTBOUbPdIoI3I5XNDoJU",
        },
      }
    );

    const filteredData = data.data.genres.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setGenrse(filteredData);
  }

  console.log("tv", movie, genrse);

  async function fetchMoviePerPage() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQzOWM3MGE1NDgxMThlMmJhMjZlY2NlMzU5ZjViYSIsInN1YiI6IjY1NDBmMmVjNTc1MzBlMDEyY2Y0YjkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4uIkCm6fPL2OXUS9zuy_J8DTBOUbPdIoI3I5XNDoJU",
        },
      }
    );

    const temp = [...movie, ...data.data.results];

    setmovie(temp);
    setTotalPage((prev) => prev + 1);
    console.log("temp", temp, totalPage);
  }
  useEffect(() => {
    fetchMovie();
    fetchGenrse();
    fetchMoviePerPage();
  }, []);

  const [selectOption, setSelectOption] = useState(null);

  async function fetchFilterMovie() {
    let param = "";
    if (selectOption.length > 0) {
      selectOption.forEach((element) => {
        param = element.value + ",";
      });
    }

    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?with_genres=${param}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGQzOWM3MGE1NDgxMThlMmJhMjZlY2NlMzU5ZjViYSIsInN1YiI6IjY1NDBmMmVjNTc1MzBlMDEyY2Y0YjkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4uIkCm6fPL2OXUS9zuy_J8DTBOUbPdIoI3I5XNDoJU",
        },
      }
    );
    setmovie(data.data.results);
    setTotalPage(data.data.total_pages);
  }

  useEffect(() => {
    if (selectOption) {
      fetchFilterMovie();
    }
  }, [selectOption]);

  return (
    <>
      <div className="w-full h-auto px-40 top-0 -mt-4 pb-4 bg-[#04152D]">
        
          <div
            style={{
              width: "100%",
            }}
            className="flex justify-end m-4"
          >
            <Select
              className="w-[200px] mt-5"
              value={selectOption}
              onChange={(e) => {
                setSelectOption(e);
              }}
              isMulti
              options={genrse}
            />
          </div>

          <InfiniteScroll
        dataLength={totalPage} 
        next={fetchMoviePerPage}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >

           
          {!movie ? (<div>
          <Skeleton height={500} count={1} />
        </div>)
        :(<div className="w-full h-auto pt-6 pb-6 bg-[#04152D] flex items-center justify-center flex-wrap gap-2">
          {movie.map((movie) => {
              return (
                <div
                  className="w-[250px] h-[400px] pb-3"
                >
                  <NavLink key={movie.id} to={`/moviedetails/${movie.id}`}>
                    <Card image={movie.poster_path} title={movie.original_name} date={movie.first_air_date}/>
                  </NavLink>
                </div>
              );
            })}

        </div>)}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Movies;
