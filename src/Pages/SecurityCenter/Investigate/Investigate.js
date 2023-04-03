import React from 'react';

const Investigate = () => {
    return (
        <div className='w-[75%] mx-auto mt-[40px] mb-[300px]'>
            <div className="flex md:flex-row flex-col  gap-5">
                <div className="">
                    <div className="">
                        <header>
                            <h4 className='text-[32px] font-medium'>Investigate</h4>
                            <p className='text-[20px] font-normal mb-[20px]'>Investigate threats using data from the Cloudflare network.</p>
                        </header>
                        <section className='border rounded border-black'>
                            <div className="flex gap-[8px] p-[10px]">
                                <div className=" w-full">
                                    <input placeholder='1.1.1.1' type="text" name="" className="pl-[10px] py-[5px] rounded-[5px] border border-black w-full text-[14px]" />
                                </div>
                                <button className='rounded-[5px] bg-[#056dff] text-white px-[14px] border text-[18px]'>Search</button>
                            </div>
                            <p className='p-[10px]'>Search by IP address, domain name, URL or AS number. You have 100 API requests remaining this month.</p>
                        </section>
                    </div>
                </div>
                <div className="">
                    <h6 className='text-[20px] font-semibold pb-[5px]'>Search</h6>
                    <p className='mb-[10px]'>Search by IP address, domain name, URL or AS number.</p>
                    <p className='text-blue-600 underline'>Analyze</p>
                    <p>Analyze javascript files for malicious content.</p>
                </div>
            </div>
        </div>
    );
};

export default Investigate;