import React from 'react';
const img = "https://static.dash.cloudflare.com/bf7dd6ac35a28501dbf5.svg"
const SecurityInsights = () => {
    return (
        <div className='w-[55vw] mx-auto mt-[30px] ' >
            <div className="">
                <header>
                    <h4 className='text-[32px] font-medium'>Security Insights</h4>
                    <p className='text-[20px] font-normal mb-[20px]'>Review and manage potential security risks and vulnerabilities in your IT infrastructure.
                    </p>
                </header>
                <section>
                    {/* card */}
                    <div className="border rounded border-[#B6B6B6] mb-[125px] flex justify-between items-center md:flex-row flex-col">
                        <div className="py-[30px] px-[35px]">
                            <div className="mb-[30px]">
                                <p className='text-[20px] font-medium'>perform initial scan</p>
                            </div>
                            <div className="mb-[30px]">
                                <p>Map your attack surface and identify potential security risks, <br /> vulnerabilities, or insecure configurations.</p>
                            </div>
                            <div className="mb-[70px]">
                                <button className='bg-[#056Dff] text-white px-[20px] py-[6px] rounded'>Start scan</button>
                            </div>
                        </div>
                        <div className=" flex items-center">
                            <img src={img} className='w-[200px]' alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SecurityInsights;