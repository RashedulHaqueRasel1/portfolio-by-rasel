/* eslint-disable react/no-unescaped-entities */

import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';


import Rasel1 from '../assets/Rasel-1.jpeg'
import Rasel2 from '../assets/Rasel-2.jpg'
import Rasel3 from '../assets/Rasel-3.jpg'
// import Rasel from '../assets/Rasel.pdf'
import Rasel from '../assets//Rashedul_Haque_Rasel.pdf'


const Home = () => {
    return (
        <div className="flex justify-between flex-col lg:flex-row-reverse">


            <div className="mt-28 md:mt-32 lg:mt-52 lg:mr-32">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={Rasel1} className="rounded-xl" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Rasel2} className="rounded-xl" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Rasel3} className="rounded-xl" alt="" /></SwiperSlide>

                </Swiper>
            </div>




            <div>
                <div className="text-center md:text-left lg:text-left p-6 md:p-0 lg:p-0 md:mt-16 lg:mt-52 md:ml-32">
                    {/* <p className="text-xl font-bold mb-4 text-white mt-2">Hi!</p> */}
                    <h1 className="text-2xl font-bold mb-4 text-white ">Hi! I'm Rashedul Haque Rasel</h1>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff] inline-flex">Front End Developer</h1>
                    <p className="mt-8 font-bold space-y-4 text-[18px] md:text-xl lg:text-xl text-white lg:w-3/4">A Front-end web developer skilled in React, JavaScript, HTML5, CSS3, and backend technologies like Express.js and MongoDB. I specialize in creating user-friendly, responsive web applications and ensuring secure authentication with Firebase.</p>

                    <div className="mt-16  ">

                        {/* Download CV */}

                        <div className="lg:inline-flex">
                            <a href={Rasel} download="Rasel">
                                <button className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-[#8954F7] hover:bg-[#8750F7] hover:outline-none  hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 '>Download CV <MdDownload className="ml-3 text-xl"></MdDownload></button>
                            </a>
                        </div>
{/* 
                        <div className="inline-flex">
                            <NavLink to={'https://www.linkedin.com/in/rashedul-haque-rasel1/'} className=' items-center justify-center p-2   ml-9 text-base font-bold leading-6 text-[#8954F7]  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-[#8954F7] hover:bg-[#8750F7] hover:outline-none  hover:text-white   focus:ring-offset-2 focus:ring-indigo-600  '> <RiLinkedinFill className="   text-xl"></RiLinkedinFill></NavLink>
                        </div> */}


                        <div className="lg:inline-flex inline-flex mt-10">
                            {/* GitHub */}
                            <NavLink to={'https://www.linkedin.com/in/rashedul-haque-rasel1/'} className='inline-flex items-center justify-center p-2   ml-9 text-base font-bold leading-6 text-[#8954F7]  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-[#8954F7] hover:bg-[#8750F7] hover:outline-none  hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 '> <RiLinkedinFill className="    text-xl"></RiLinkedinFill></NavLink>
                        </div>


                        <div className="lg:inline-flex inline-flex">
                            {/* GitHub */}
                            <NavLink to={'https://github.com/RashedulHaqueRasel1'} className='inline-flex items-center justify-center p-2   ml-9 text-base font-bold leading-6 text-[#8954F7]  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-[#8954F7] hover:bg-[#8750F7] hover:outline-none  hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 '> <BsGithub className="    text-xl"></BsGithub></NavLink>
                        </div>


                        <div className="lg:inline-flex inline-flex">
                            {/* Linkedin */}
                            <NavLink to={'https://www.facebook.com/Rashedul.haque.Rase1'} className='inline-flex items-center justify-center p-2   ml-9 text-base font-bold leading-6 text-[#8954F7]  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-[#8954F7] hover:bg-[#8750F7] hover:outline-none  hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 '> <FaFacebookF className="   text-xl"></FaFacebookF></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;