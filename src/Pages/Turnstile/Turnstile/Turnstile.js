import React from 'react';

const img = "https://static.dash.cloudflare.com/f55265e313aa2eb090c6.svg"
const Turnstile = () => {
    return (
        <div className='w-[75%] mx-auto mt-[40px] mb-[150px]'>
            <div className="flex md:flex-row flex-col  gap-5">
                <div className="w-[70%]">
                    <div className="">
                        <header>
                            <h4 className='text-[32px] mb-[15px] font-medium'>Turnstile Sites</h4>
                            <p className='text-[14px] w-[68%] font-normal mb-[20px]'>Turnstile is Cloudflare’s smart CAPTCHA alternative. It can be embedded into any website without sending traffic through Cloudflare, and works without showing <br /> visitors a CAPTCHA.</p>
                        </header>
                        <section className='border rounded border-black'>
                            <div className="flex md:flex-row flex-col  px-[50px] py-[50px] gap-5">
                                <div className="">
                                    <img src={img} alt="" />
                                </div>
                                <div className="">
                                    <div className="">
                                        <h6 className='font-semibold'>Get started</h6>
                                    </div>
                                    <p className='p-[10px]'>
                                        Add a site to get started with Turnstile Analytics. <span className='underline text-blue-700'>Migrate from a CAPTCHA Service</span>
                                    </p>
                                    <div className="">
                                        <button className='rounded-[5px] bg-[#056dff] text-white px-[14px] py-[5px] border text-[18px]'>Add site</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {/* *** */}
                <div className="">
                    <h6 className='text-[20px] font-semibold pb-[5px]'>Documentation</h6>
                    <p className='mb-[10px] underline text-blue-700'>Migrate from a CAPTCHA Service</p>
                    <p className='mb-[10px] underline text-blue-700'>Turnstile Developer Documentation</p>
                </div>
            </div>
        </div>
    );
};

export default Turnstile;