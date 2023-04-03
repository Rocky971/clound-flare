import React from 'react';

const Home = () => {
    return (
        <div className=' lg:w-[70%] w-full mx-auto'>
            <div className="my-[32px] mx-[20px]">
                <header className='mb-[16px]'>
                    <h1 className='text-[32px] leading-[1.25] font-semibold text-[#313131]'>Home</h1>
                </header>
                <div className="">
                    <div className="py-[1rem]">
                        <div className=" mr-[16px] mb-[8px]">
                            <form className="mb-[16px]">
                                <div className="">
                                    <label className="mb-[4px]">
                                        Search websites in rkrocky218@gmail.com's Account...
                                    </label>
                                    <div className="flex flex-wrap gap-[8px]">
                                        <div className="relative md:w-[400px]">
                                            <input type="text" name="" className="pl-[30px] py-[1px] rounded-[5px] border border-black w-full" />
                                            <i className="fa-solid fa-magnifying-glass absolute left-2 top-2 text-[10px]"></i>
                                        </div>
                                        <button className='rounded-[5px] bg-[#056dff] text-white px-[14px] border text-[18px]'>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="my-[16px] border rounded-[5px]">
                        <div className="p-[32px]">
                            <h2 className='font-semibold mb-[8px] text-center'>
                                <span className='text-[20px]'>You currently don't have any websites.</span>
                            </h2>
                            <div className="flex justify-center m-[16px]">
                                {/* 
                                <button className='  text-white  border text-[18px]'>Search</button> */}
                                <button className="flex items-center bg-[#056dff] rounded-[5px] px-[22px] py-[7px] gap-1">
                                    <i className="fa-solid fa-circle-plus text-[7px] text-[#fff]"></i>
                                    <p className='text-white'>Add Site</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;