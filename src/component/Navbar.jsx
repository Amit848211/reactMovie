import React from 'react'
import img from "./image/movix-logo-d720c325.svg"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="w-[100vw] h-20 bg-slate-900 flex items-center justify-between px-28  ">
            <div>
            <Link to="/">
              <img src={img} alt="" className="opacity-80" />
              </Link>
            </div>
            <div className="flex text-2xl">
              <NavLink
              to="/movies"
               className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} hover:text-pink-600`}>
                Movies
              </NavLink>
              <NavLink
              to="/tvshow"
              className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} hover:text-pink-600`}>
                TV Show
              </NavLink>
            </div>
        </div>
    </>
  )
}

export default Navbar