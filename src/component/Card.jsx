import React from "react";

export const Card = ({image,title,date }) => {
  return (
    <div className="w-full h-full flex justify-center m-1 relative">
      <div className="w-full h-[80%] border shadow rounded ">
        <img
          className="rounded w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt="image"
        />
       <div className="pt-2">
        <p className="text-pink-500 text-[16px] font-semibold px-2">{title}</p>
        <p className="text-gray-500 text-xl font-semibold px-2">{date}</p>
        
        
        </div>
      </div>
    </div>
  );
};