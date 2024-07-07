/* eslint-disable react/no-unescaped-entities */
import Rasel2 from '../assets/Rasel-2.jpg'
import Rasel from '../assets/Rasel.pdf'
import { MdDownload } from "react-icons/md";
import Skill from "./Skill";

const About = () => {
    return (

        <div className="text-white ">

            <div className="flex justify-between  lg:ml-20 flex-col lg:flex-row-reverse">





                <div className="text-center md:text-left lg:text-left p-4 md:p-0 lg:p-0 mt-20 md:mt-16 lg:mt-56 md:ml-32">
                    <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff] inline-flex ">Front End Developer</h1>

                    <p className="mt-8 p-2 lg:font-medium space-y-4 text-[18px]  md:text-xl lg:text-xl text-white lg:w-3/4">Hello, I am Rashedul Haque Rasel, a Front-end web developer  about creating user-friendly and innovative web applications. With a solid background in front-end technologies, including React, JavaScript (ES6+), HTML5, and CSS3, I specialize in crafting seamless and dynamic user interfaces. I also have expertise in UI/UX frameworks like Tailwind CSS and Bootstrap, which enables me to design visually appealing and responsive websites. <br /> <br />My technical skills extend to backend integration using Express.js and MongoDB, allowing me to develop comprehensive and robust web solutions. Additionally, I am proficient in implementing secure authentication systems with Firebase, ensuring data security and privacy for users.</p>

                    <div className="mt-10">

                        {/* Download CV */}
                        <div>
                            <a href={Rasel} download="Rasel">
                                <button className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-[#8954F7] hover:bg-[#8750F7] hover:outline-none  hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 '>Download CV <MdDownload className="ml-3 text-xl"></MdDownload></button>
                            </a>
                        </div>

                    </div>
                </div>




                <div className="mt-20 lg:mt-60 lg:ml-40 p-6 md:p-0 lg:p-0">
                    <img src={Rasel2} className="rounded-xl lg:h-[450px]  w-[900px] lg:w-[1300px]" alt="" />
                </div>



            </div>

            <Skill></Skill>

        </div>

    );
};

export default About;