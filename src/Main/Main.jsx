import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Main = () => {

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)


        setTimeout(() => {
            setLoading(false)
        }, 1900)
    }, [])



    return (
        <div className='  mx-auto container'>


            {
                loading ?

                    <>
                        <div className="lg:ml-[700px]  ml-36">
                            (<FidgetSpinner
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="fidget-spinner-loading"
                                wrapperStyle={{}}
                                wrapperClass="fidget-spinner-wrapper"
                            />)
                        </div>
                    </>


                    :


                    <>
                        <Navbar></Navbar>

                        <Outlet></Outlet>

                        <Footer></Footer>

                    </>

            }

        </div>
    );
};

export default Main;