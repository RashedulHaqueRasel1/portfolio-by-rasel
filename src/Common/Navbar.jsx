import { useState } from "react";
import { ImCross, ImMenu } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [state, setState] = useState(false)

    const navOption = <>
        <li>
            <NavLink to={'/'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6  text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 ' >Home</NavLink>
        </li>

        <li>
            <NavLink to={'/about'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>About Me</NavLink>
        </li>
        <li>
            <NavLink to={'/contact'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>Contact</NavLink>
        </li>


    </>


    return (
        <div>

            <nav className="   border-b w-full md:static md:text-sm md:border-none fixed z-50">
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8  ">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={'/'}>
                            <button>

                                <h1 className='text-5xl text-rose-500 flex hover:bg-blue-300 hover:px-7 hover:py-4 hover:rounded-2xl   items-center justify-center w-full px-7 py-4   font-bold leading-6 border-transparent rounded-full md:w-auto   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>RH</h1>

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
                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 `}>
                        <ul className="justify-end items-center space-y-4 lg:text-xl md:text-[16px] md:flex md:space-x-4 md:space-y-0 ">

                            {navOption}


                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>

                            <li>
                                <NavLink to={'/contact'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 border-2'>Hire Me</NavLink>
                            </li>


                        </ul>

                    </div>
                </div>


            </nav>
        </div>
    );
};

export default Navbar;