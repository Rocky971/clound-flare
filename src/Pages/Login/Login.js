import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
    return (
        <div className="">
            <Navbar />
            <div className='w-[50%] mx-auto py-[80px]'>
                <div className="">
                    <header>
                        <h1 className='text-[32px] font-semibold'>Log in to Cloudflare</h1>
                    </header>
                    <section className='w-[70%]'>
                        <form>
                            <div className="flex flex-col mt-[30px]">
                                <label htmlFor="" className='text-[14px] mb-[4px]'>Email</label>
                                <input type="email" required name="" className="border border-black py-[5px] rounded px-[10px] focus:border-[#056dff]" />
                            </div>
                            <div className="flex flex-col mt-[30px]">
                                <div className="flex justify-between text-[#056dff]">
                                    <label htmlFor="" className='text-[14px] mb-[4px] text-black'>Password</label>
                                    <p className='cursor-pointer'><i class="fa-regular fa-eye"></i> show</p>
                                </div>
                                <input type="password" required name="" className="border border-black py-[5px] rounded px-[10px]" />
                            </div>
                            <div className="w-[300px]">
                                <div className="mt-[25px]">
                                    <button className='rounded w-full text-white font-semibold py-[10px] bg-[#056dff]'>Log in</button>
                                </div>
                                <div class="flex flex-col w-full border-opacity-50">
                                    <div class="divider text-[10px]">OR</div>
                                </div>
                                <div className="">
                                    <button className='rounded w-full font-semibold py-[10px] border border-black'><i class="fa-brands fa-apple"></i> Sign in with Apple</button>
                                </div>

                            </div>
                            <div className="flex mt-[50px] gap-8">
                                <p className='text-blue-700 underline cursor-pointer'><Link to="/signup">Sign up</Link></p>
                                <p className='text-blue-700 underline cursor-pointer'>Forgot your password?</p>
                                <p className='text-blue-700 underline cursor-pointer'>Forgot your email?</p>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;