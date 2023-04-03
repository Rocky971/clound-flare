import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const logo = "https://i.ibb.co/7J5K2by/Home-Mdmasude7-gmail-com-s-Account-Cloudflare-removebg-preview.png";
const Navbar = ({ toggleOpen, setToggleOpen }) => {
    const [dropSupport, setdropSupport] = useState(false);
    const [dropEnglish, setdropEnglish] = useState(false);
    const [dropProfile, setdropProfile] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setdropSupport(false);
                setdropEnglish(false);
                setdropProfile(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, []);
    return (
        <div className='bg-white nab_border' ref={menuRef}>
            <div className="flex items-center justify-between ml-[20px] mr-[30px]">
                {/* logo___start */}
                <div className="flex items-center">
                    <div onClick={() => setToggleOpen(!toggleOpen)} className="mr-[12px] pr-[22px] py-[19px] border-r lg:hidden block">
                        {
                            !toggleOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i>
                        }
                    </div>
                    <img src={logo} className='hidden md:block' alt="" />
                </div>
                {/* logo___end */}
                {/* menu__item__start */}
                <div className="flex items-center">
                    <div className=" hidden lg:block">
                        <div className="flex items-center gap-[3px] py-[23px] px-[20px] hover:bg-[#F2F2F2] cursor-pointer">
                            <i className="fa-solid fa-circle-plus text-[7px] text-[#595959]"></i>
                            <p className=''>Add site</p>
                        </div>
                    </div>
                    {/* search__icon */}
                    <div className="py-[23px] px-[20px] hover:bg-[#F2F2F2] cursor-pointer hidden lg:block">
                        <p><span>
                            <i className="fa-solid fa-magnifying-glass text-[10px] text-[#595959]"></i>
                        </span></p>
                    </div>
                    {/* items */}
                    <div className="relative  hidden lg:block">
                        <div onClick={() => setdropSupport(!dropSupport, setdropEnglish(false), setdropProfile(false))} className='flex gap-1 hover:bg-[#F2F2F2] py-[23px] px-[20px] cursor-pointer'>
                            <p>Support</p>
                            <i className="fa-solid fa-sort-down text-[23px] mt-[-5px] text-[#595959]"></i>
                        </div>
                        <div className={`absolute top-[70px] right-[0px] min-w-[9.5rem] support_border border rounded-[3px] ${dropSupport ? 'block' : 'hidden'}`}>
                            <ul>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Community Support</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Help Center</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>My Activities</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Compliance Documents</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Contact Cloudflare</li>
                            </ul>
                        </div>
                    </div>
                    {/* items */}
                    <div className="relative">
                        <div onClick={() => setdropEnglish(!dropEnglish, setdropSupport(false), setdropProfile(false))} className='flex gap-1 hover:bg-[#F2F2F2] py-[23px] px-[20px] cursor-pointer'>
                            <p>English (US)</p>
                            <i className="fa-solid fa-sort-down text-[23px] mt-[-5px] text-[#595959]"></i>
                        </div>
                        <div className={`absolute top-[70px] right-[0px] min-w-[9.5rem] support_border border rounded-[3px] h-[80vh] overflow-hidden overflow-y-scroll ${dropEnglish ? 'block' : 'hidden'}`}>
                            <ul>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>English (US)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Deustsch</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>简体中文</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Francais (France)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>体中文</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Espanol (Espana)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Espanol (Chile)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Espanol (Ecuador)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Espanol (Mexico)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Espanol (Peru)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Italiano (Itallia)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>한국어(대한민국)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Portugues (Brasil)</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>中文 (台灣)</li>
                            </ul>
                        </div>
                    </div>
                    {/* profile */}
                    <div className="relative">
                        <div onClick={() => setdropProfile(!dropProfile, setdropSupport(false), setdropEnglish(false))} className='flex gap-1 hover:bg-[#F2F2F2] py-[23px] px-[20px] cursor-pointer'>
                            <p><i className="fa-solid fa-user text-[#595959]"></i></p>
                            <i className="fa-solid fa-sort-down text-[23px] mt-[-5px] text-[#595959]"></i>
                        </div>
                        <div className={`absolute top-[70px] right-[0px] min-w-[9.5rem] support_border border rounded-[3px] ${dropProfile ? 'block' : 'hidden'}`}>
                            <ul>
                                <div className='hover:bg-[#F2F2F2]'>
                                    <li className='px-[16px] pt-[16px]   cursor-pointer'>My Profile</li>
                                    <li className='px-[16px] pb-[16px] border-b cursor-pointer'>rkrocky2018@gmail.com</li>
                                </div>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Account Home</li>
                                <li className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>Billing</li>
                                <div className="flex pb-[16px] gap-2 border-b pt-[16px] px-[16px] hover:bg-[#F2F2F2]">
                                    <li className=''>Appearance</li>
                                    <li className='px-[10px] rounded-full bg-[#fbcda5]'>Beta</li>
                                </div>
                                <p className='p-[16px]  hover:bg-[#F2F2F2] cursor-pointer'>
                                    <Link to="/login">Log Out</Link>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* menu__item__end */}
            </div>
        </div >
    );
};

export default Navbar;