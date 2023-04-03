import React from 'react';
// import logo from '../../../assets/login/freepik-company-gray.721fdfe0.svg';

const Footer = () => {
    const liClass = 'text-[14px] mb-[5px] tracking-[0] leading-[24px] font-normal'
    return (
        <div className='pt-[60px] border-t'>
            <div className="w-[70%] mx-auto flex flex-wrap justify-between pb-2">
                {/* *** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-semibold mb-[10px] tracking-[.5px] leading-[17px]'>Contact</h4>
                    <ul className='text-[#374957]'>
                        <li className={`${liClass} text-[#0052C6]`}>Contact support</li>
                        <li className={`${liClass} text-[#0052C6]`}>Contact sales</li>
                        <li className={liClass}>Call sales; +1 (888) 993 5273</li>
                        <div className="flex gap-1 text-[#0052C6] text-[20px]">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </ul>
                </div>
                {/* ***** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-semibold mb-[10px] tracking-[.5px] leading-[17px]'>What we do</h4>
                    <ul className='text-[#000]'>
                        <li className={`${liClass} text-[#0052C6]`}>Plans</li>
                        <li className={`${liClass} text-[#0052C6]`}>Overview</li>
                        <li className={`${liClass} text-[#0052C6]`}>Features</li>
                        <li className={`${liClass} text-[#0052C6]`}>Network</li>
                        <li className={`${liClass} text-[#0052C6]`}>Apps</li>

                    </ul>
                </div>
                {/* ***** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-semibold mb-[10px] tracking-[.5px] leading-[17px]'>Resources</h4>
                    <ul className='text-[#000]'>
                        <li className={`${liClass} text-[#0052C6]`}>Documentation</li>
                        <li className={`${liClass} text-[#0052C6]`}>Blog</li>
                        <li className={`${liClass} text-[#0052C6]`}>Case studies</li>
                        <li className={`${liClass} text-[#0052C6]`}>Partners</li>
                        <li className={`${liClass} text-[#0052C6]`}>Customers</li>
                        <li className={`${liClass} text-[#0052C6]`}>API</li>

                    </ul>
                </div>
                {/* ***** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-semibold mb-[10px] tracking-[.5px] leading-[17px]'>Support</h4>
                    <ul className='text-[#000]'>
                        <li className={`${liClass} text-[#0052C6]`}>Knowledgebase</li>
                        <li className={`${liClass} text-[#0052C6]`}>Community</li>
                        <li className={`${liClass} text-[#0052C6]`}>System status</li>
                        <li className={`${liClass} text-[#0052C6]`}>Videos</li>
                        <li className={`${liClass} text-[#0052C6]`}>Trust Safety</li>
                    </ul>
                </div>
                {/* ***** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-semibold mb-[10px] tracking-[.5px] leading-[17px]'>About us</h4>
                    <ul className='text-[#000]'>
                        <li className={`${liClass} text-[#0052C6]`}>Our team</li>
                        <li className={`${liClass} text-[#0052C6]`}>Careers</li>
                        <li className={`${liClass} text-[#0052C6]`}>Press</li>
                        <li className={`${liClass} text-[#0052C6]`}>Website Terms of Use</li>
                        <li className={`${liClass} text-[#0052C6]`}>Self-serve Subscription</li>
                        <li className={`${liClass} text-[#0052C6]`}>Agreement</li>
                        <li className={`${liClass} text-[#0052C6]`}>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;