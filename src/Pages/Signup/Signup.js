import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
const bgimg = "	https://static.dash.cloudflare.com/c80376030a7f608b6769.svg"
const Signup = () => {
    return (
        <div className="w-[100vw] h-[100vh]"
            style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Navbar />
            <div className="mt-[50px]">
                <div className='w-[25vw] mx-auto shadow-2xl rounded-xl'>
                    <div className=" bg-white mx-auto rounded-[18px] px-[25px] text-center">
                        <header className='pt-[50px] pb-[30px]'>
                            <h1 className='text-[32px] font-semibold'>Get started with Cloudflare!</h1>
                            <p>Already a customer? <Link to="/login" className='underline text-blue-700'>Login</Link> </p>
                        </header>
                        <form>
                            <div className="flex flex-col mt-[30px]">
                                <label htmlFor="" className='text-[14px] text-start mb-[4px]'>Email address</label>
                                <input type="email" required name="" className="border border-black py-[5px] rounded px-[10px] focus:border-[#056dff]" />
                            </div>
                            <div className="flex flex-col mt-[30px]">
                                <div className="flex justify-between text-[#056dff]">
                                    <label htmlFor="" className='text-start text-[14px] mb-[4px] text-black'>Password</label>
                                    <p className='cursor-pointer'><i class="fa-regular fa-eye"></i> show</p>
                                </div>
                                <input type="password" required name="" className="border border-black py-[5px] rounded px-[10px]" />
                            </div>
                            <div className="">
                                <p className='text-start py-[20px]'>By clicking Sign Up, I agree to Cloudflare's <span className='text-blue-700 underline'>terms, privacy policy,</span> and <span className='text-blue-700 underline'>cookie policy.</span></p>
                            </div>
                            <div className=" pb-[50px] text-white font-semibold">
                                <button className='bg-[#056dff] w-full py-[12px] rounded'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;