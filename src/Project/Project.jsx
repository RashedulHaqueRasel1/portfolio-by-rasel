import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import loveLink from "../assets/lovelink.jpg"
import asia from "../assets/asia.jpeg"
import jobFind from "../assets/jobFind.jpg"
import { Link } from "react-router-dom";


const Project = () => {
    return (
        <div>
            <div className="text-center lg:mt-20 p-6 md:p-0 lg:p-0">
                <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff] inline-flex text-center">My Project</h1>
                {/* 
                <p className="mt-4 p-2 lg:font-medium space-y-4 text-[18px]  md:text-xl lg:text-xl text-white  ">Experienced in building responsive, dynamic web applications with a strong <br />understanding of both front-end and back-end development.</p> */}


                <div className='grid grid-cols-1 justify-center items-center    mt-16 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:mt-10'>

                    <div className='bg-[#281745] h-full w-full p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <img src={loveLink} alt="" />

                        <h1 className="text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff] inline-flex ">Love Link Matrimony</h1>

                        <p className="mt-2 p-2 lg:font-medium space-y-4 text-[18px]  md:text-xl lg:text-xl text-white  ">Love Link is an online matrimony platform for finding life partners. Features include profile filters, success stories, and a user dashboard for managing profiles and contact requests. Sign up at Love Link to start your journey towards finding love.</p>


                        <h1 className="text-left text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff]  ">Features : </h1>
                        <ul className="text-left ml-16 list-disc font-bold text-xl text-white">
                            <li>Dashboard</li>
                            <li>Stripe Payment</li>
                            <li>Share Success Story</li>
                        </ul>

                        <h1 className="text-left text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff]  ">Technologies : </h1>
                        <ul className="text-left ml-16 list-disc font-bold text-xl text-white">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                        </ul>



                        <div className="flex justify-around mt-6">

                            <Link to={'https://github.com/RashedulHaqueRasel1/Love-Link'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaGithub className="text-2xl"></FaGithub><span className="ml-2 font-bold text-xl cursor-pointer">Client</span></Link>


                            <Link to={'https://github.com/RashedulHaqueRasel1/Love-Link-Server'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaExternalLinkAlt className="text-2xl"></FaExternalLinkAlt><span className="ml-2 font-bold text-xl cursor-pointer">Server</span></Link>


                            <Link to={'https://love-link-client.vercel.app/'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaLink className="text-2xl"></FaLink><span className="ml-2 font-bold text-xl cursor-pointer">Live Link</span></Link>

                        </div>
                    </div>

                    <div className='bg-[#281745] h-full w-full p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <img src={jobFind} alt="" />

                        <h1 className="text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff] inline-flex ">Easy Hire Job Find</h1>

                        <p className="mt-4 p-2 lg:font-medium space-y-4 text-[18px]  md:text-xl lg:text-xl text-white  ">Welcome to EasyHire Client Side! Explore job opportunities, apply for jobs, manage postings, read blogs, and update profiles. Access all job listings, track applications, manage your postings, save jobs, and read career advice—all in one place.</p>


                        <h1 className="text-left text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff]  ">Features : </h1>
                        <ul className="text-left ml-16 list-disc font-bold text-xl text-white">
                            <li>All Jobs</li>
                            <li>Applied Job</li>
                            <li>Added Job</li>
                        </ul>

                        <h1 className="text-left text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff]  ">Technologies : </h1>
                        <ul className="text-left ml-16 list-disc font-bold text-xl text-white">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                        </ul>

                        <div className="flex justify-around mt-6">

                            <Link to={'https://github.com/RashedulHaqueRasel1/EasyHire'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaGithub className="text-2xl"></FaGithub><span className="ml-2 font-bold text-xl cursor-pointer">GitHub</span></Link>



                            <Link to={'https://github.com/RashedulHaqueRasel1/EasyHire-Server'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaExternalLinkAlt className="text-2xl"></FaExternalLinkAlt><span className="ml-2 font-bold text-xl cursor-pointer">Server</span></Link>


                            <Link to={'https://easyhire-rasel.web.app/'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaLink className="text-2xl"></FaLink><span className="ml-2 font-bold text-xl cursor-pointer">Live Link</span></Link>

                        </div>
                    </div>

                    <div className='bg-[#281745] h-full w-full p-4 rounded-2xl hover:bg-[#3f256d] hover:border hover:border-[#8954F7] lg:ml-4mt-2 hover:scale-[1.05] transition-all'>
                        <img src={asia} alt="" />


                        <h1 className="text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff] inline-flex ">Asian adventures</h1>

                        <p className="mt-4 p-2 lg:font-medium space-y-4 text-[18px]  md:text-xl lg:text-xl text-white  ">Plan your Asian adventures with us! Explore a massive list of tourist spots or add your own hidden gems. Build personalized favorites lists and login to save them. This site is built with Lottie React for cool animations and React tooltip for extra info.</p>


                        

                        <h1 className="text-left text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff]  ">Features : </h1>
                        <ul className="text-left ml-16 list-disc font-bold text-xl text-white">
                            <li>Add Tourist Spot</li>
                            <li>See All Tourist Spots</li>
                            <li>My List</li>
                        </ul>

                        <h1 className="text-left text-2xl md:text-2xl lg:text-3xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8954F7] to-[#ffff]  ">Technologies : </h1>
                        <ul className="text-left ml-16 list-disc font-bold text-xl text-white">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                        </ul>



                        <div className="flex justify-around mt-6">

                            <Link to={'https://github.com/RashedulHaqueRasel1/Asia-Adventure'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaGithub className="text-2xl"></FaGithub><span className="ml-2 font-bold text-xl cursor-pointer">GitHub</span></Link>



                            <Link to={'https://github.com/RashedulHaqueRasel1/AsiaAdventure-Server'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaExternalLinkAlt className="text-xl lg:text-2xl"></FaExternalLinkAlt><span className="ml-2 font-bold text-xl cursor-pointer">Server</span></Link>


                            <Link to={'http://asiaadventure-rasel.surge.sh/'} className="inline-flex bg-[#8954F7] p-2 rounded-3xl"><FaLink className="text-2xl"></FaLink><span className="ml-2 font-bold text-xl cursor-pointer">Live Link</span></Link>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Project;