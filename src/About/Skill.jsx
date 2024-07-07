
import { IoLogoCss3, IoLogoFirebase, IoLogoHtml5, IoLogoNodejs, } from 'react-icons/io5';
import { DiJavascript1 } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';


const Skill = () => {
    return (
        <div>
            <div className="text-center mt-32 p-6 md:p-0 lg:p-0">
                <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff] inline-flex text-center">My Skills</h1>

                <p className="mt-4 p-2 lg:font-medium space-y-4 text-[18px]  md:text-xl lg:text-xl text-white  ">Experienced in building responsive, dynamic web applications with a strong <br />understanding of both front-end and back-end development.</p>
            </div>


            <div className='lg:ml-60 lg:mt-10 '>
                <div className='grid grid-cols-1 justify-center items-center p-4  ml-20 md:ml-0 lg:ml-0 gap-5 md:grid-cols-2 lg:grid-cols-3'>

                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <IoLogoHtml5 className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-14 mt-2 '>Html</h1>
                    </div>

                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <IoLogoCss3 className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-14 mt-2 '>Css</h1>

                    </div>

                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <RiTailwindCssFill className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-12 mt-2 '>Tailwind</h1>
                    </div>


                </div>

                <div className='grid grid-cols-1 justify-center items-center p-4 ml-20 md:ml-0 lg:ml-0  gap-5 md:grid-cols-2 lg:grid-cols-3'>


                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <DiJavascript1 className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-8 '>JavaScript</h1>
                    </div>

                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <IoLogoFirebase className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-10 mt-2 '>Firebase</h1>
                    </div>

                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <FaReact className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-12 mt-2 '>React</h1>
                    </div>

                </div>

                <div className='grid grid-cols-1 justify-center items-center p-4 ml-20 md:ml-0 lg:ml-0  gap-5 md:grid-cols-2 lg:grid-cols-3'>


                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <IoLogoNodejs className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-8 '>NODE.JS</h1>
                    </div>

                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <SiMongodb className='h-24 w-24 ml-8 mt-6' alt="" />
                        <h1 className='font-bold text-xl ml-10 mt-2 '>MongoDB</h1>
                    </div>

                    <div className='bg-[#281745] h-48 w-48 p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        {/* <  alt="" /> */}
                        <p className='h-24 w-24 ml-8 mt-6 text-7xl font-bold'>ex</p>
                        <h1 className='font-bold text-xl ml-10 mt-2 '>Express</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skill;