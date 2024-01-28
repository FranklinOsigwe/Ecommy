import React, { useContext, useEffect, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const {user} = useContext(AuthContext)
  console.log(user)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 0) {
        setIsSticky(true)
      }else{
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll )

    return (
      window.addEventListener('scroll', handleScroll)
    )
  }, [])

  const navItems = (
    <>
      <li>
        <a className='text-green ' href="/">Home</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );

  return (
    <header className="max-w-screen-2xl container max-auto">
      <div className="navbar xl:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/*  */}
              {navItems}
            </ul>
          </div>
          <a href="/" className="logo text-white whitespace-nowrap pl-5">
            MaMa PuT
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="form-control mr-3 hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="indicator mr-3 btn btn-ghost rounded-full items-center  bg-gray-500 justify-center hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item bg-orange-500 w-5 h-15">8</span>
          </div>

         {
          user ? <Profile user={user}/> : <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="hidden  btn rounded-full px-3 text-white bg-orange-500 lg:flex lg:items-center lg:gap-2">
          <FaRegUser /> Login
        </button>
         }
           <Modal/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
