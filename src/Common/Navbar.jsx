import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { MdDownload } from 'react-icons/md';

import Rasel from '../assets/Rasel.pdf'


const Navbar = () => {
    const [state, setState] = useState(false)



    const navOption = <>
        <li>
            <NavLink to={'/'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6  text-white  border-transparent rounded-full md:w-auto hover:bg-[#8954F7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 ' >Home</NavLink>
        </li>

        <li>
            <NavLink to={'/about'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-[#8954F7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>About</NavLink>
        </li>

        <li>
            <NavLink to={'/project'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-[#8954F7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>Project</NavLink>
        </li>

        <li>
            <NavLink to={'/contact'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-[#8954F7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>Contact</NavLink>
        </li>


    </>


    return (
        <div>

            <nav className=" bg-gradient-to-r from-[#0F0715] to-[#281745] border-b w-full md:static md:text-sm md:border-none fixed z-50 rounded-xl">
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8  ">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={'/'}>
                            <button>

                                <h1 className='text-5xl  text-white font-bold flex '>R<span className=''>

                                </span>H</h1>

                            </button>
                        </Link>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (

                                        <ImCross></ImCross>


                                    ) : (

                                        <>
                                            <ImMenu className='text-2xl font-bold'></ImMenu>
                                        </>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="justify-end items-center space-y-4 lg:text-xl md:text-[16px] md:flex md:space-x-4 md:space-y-0 ">

                            {navOption}


                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>

                            <div>
                                <a href={Rasel} download="Rasel">
                                    <button className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-[#8954F7] hover:bg-[#8750F7] hover:outline-none  hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 '>Download CV <MdDownload className="ml-3 text-xl"></MdDownload></button>
                                </a>
                            </div>


                        </ul>

                    </div>
                </div>


            </nav>
        </div>
    )
};

export default Navbar;