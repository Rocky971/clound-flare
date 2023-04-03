import React from 'react';

const WebAnalytics = () => {
    return (
        <div className='md:w-[41vw] mx-auto px-[5px]'>
            <div className="py-[20px]">
                <div className="border-[#B6B6B6] border rounded">
                    <div className="md:px-[70px] px-[10px]">
                        <header className='text-center pt-[60px] pb-[30px]'>
                            <h1 className='text-[32px] font-semibold'>Get started with Web Analytics</h1>
                        </header>
                        <section>
                            <div className="text-center">
                                <p>See page views and visits for your website for free</p>
                            </div>
                            {/* setps */}
                            <div className="pt-[30px] pb-[30px]">
                                <div className="flex gap-3 items-center justify-center flex-wrap">
                                    <p className='bg-[#0051C3] px-[8px] py-[0px] text-white font-bold rounded-full'>1</p>
                                    <p>Set up hostname</p>
                                    <p><i class="fa-solid fa-minus text-[14px]"></i></p>
                                    <p className='border px-[8px] py-[0px] font-bold rounded-full'>2</p>
                                    <p>Installation</p>
                                    <p><i class="fa-solid fa-minus"></i></p>
                                    <p className='border px-[8px] py-[0px] font-bold rounded-full'>3</p>
                                    <p>Get Analytics</p>
                                </div>
                            </div>
                            {/* card */}
                            <div className="border-t pt-[30px]">
                                <div className="border border-[#82B6FF] py-[8px] px-[20px] rounded bg-[#ECF4FF]">
                                    <div className="">
                                        <p>Cloudflare does not track individual visitors.</p>
                                    </div>
                                </div>
                            </div>
                            {/* **** */}
                            <div className="mt-[20px] mb-[10px]">
                                <p>Enter your website's hostname for Web Analytics.</p>
                            </div>
                            {/* set_up_host */}
                            <div className="">
                                <h6 className='text-[18px] font-semibold pt-[20px] pb-[10px]'>Set up hostname</h6>
                                <p className='mb-[7px]'>Enter your website's hostname or select from your existing websites <br /> on Cloudflare.</p>
                            </div>
                            <div className="border-b pb-[30px]">
                                <select className='border text-[16px] py-[8px] rounded cursor-pointer'>
                                    <option className="py-[10px]" id="">e.g. mydomain.com or</option>
                                    <option className="py-[10px]" id="">No active website found.</option>
                                </select>
                            </div>
                            {/* button */}
                            <div className="flex flex-col md:flex-row gap-2 justify-end mt-[30px] mb-[80px]">
                                <button className='bg-[#D9D9D9] rounded hover:bg-[#B6B6B6] py-[6px] px-[22px]'>Cancel</button>
                                <button className='bg-[#82B6FF] rounded text-[#fff] py-[6px] px-[22px]'>Cancel</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebAnalytics;