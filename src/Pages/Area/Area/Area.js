import React from 'react';
const img = "https://i.ibb.co/drnspbb/image.png"
const Area = () => {
    return (
        <div className='w-[50vw] mx-auto mt-[30px]'>
            <div className="">
                <header>
                    <h1 className='text-[34px] font-medium'>Cloudflare Area 1 Email Security</h1>
                    <p className='text-[20px]'>Secure user inboxes, adopt a proactive security posture, and save time on email security operations.</p>
                </header>
                {/* button___ */}
                <div className="flex gap-1 flex-wrap justify-center mt-[50px] mb-[80px]">
                    <button className='py-[5px] px-[20px] rounded bg-[#056dff] text-white'>
                        Launch dashboard
                    </button>
                    <button className='py-[5px] px-[24px] rounded border border-[#056dff] text-[#056dff]'>
                        Request trial
                    </button>
                    <button className='py-[5px] px-[24px] rounded border border-[#056dff] text-[#056dff]'>
                        Explore demo
                    </button>
                </div>
                {/* *** */}
                <div className="flex lg:flex-row flex-col items-center  justify-center gap-20 mb-[80px] text-black text-[18px]">
                    <div className="">
                        <img className='w-[600px]' src={img} alt="" />
                    </div>
                    <div className="">
                        <ul className='list-disc'>
                            <li className=''><span className='font-semibold'>Stop phishing attacks before damage.</span> Proactively hunt for attacker and discover email fraud attempts.</li>
                            <li className=''><span className='font-semibold'>Fits into any email security stack.</span>  Deploy in minutes without any hardware, agents, or appliances.</li>
                            <li className=''><span className='font-semibold'>Configure SPF, DKIM and DMARC.</span><br />  <span className='underline text-blue-700'>Use the Email Security DNS Wizard</span> to protect your organization through SPF, DKIM and DMARC policies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Area;