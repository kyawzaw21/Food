import React from 'react'
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <>
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="container py-3 sm:py-0">
                <div className=' flex justify-between items-center'>
                    <div>
                <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img src={Logo} alt="Logo" className="w-10" />
                    Foodie
              </a>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                    <div>
                        <DarkMode />
                    </div>
                        <ul className="hidden sm:flex items-center gap-4">
                           <li>
                                <a href="#" className="inline-block py-4 px-4 hover:text-yellow-500">Home</a>
                            </li> 

                            <li>
                                <a href="#" className="inline-block py-4 px-4 hover:text-yellow-500">About</a>
                            </li> 

                            <li>
                                <a href="#" className="inline-block py-4 px-4 hover:text-yellow-500">Contact</a>
                            </li> 
                        </ul>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                            Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
                        
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
