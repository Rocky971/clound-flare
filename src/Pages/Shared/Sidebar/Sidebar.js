import React, { useState } from 'react';
import { BsCalendar4 } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { BsCheck2Circle } from "react-icons/bs";
import { IoShieldCheckmarkOutline, IoImageOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox, MdOutlineVideoSettings } from "react-icons/md";
import { BsSuitDiamond } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { BiCoinStack } from "react-icons/bi";
import { CiBullhorn } from "react-icons/ci";
import { GiShuttlecock } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';


const Sidebar = ({ toggleOpen, setToggleOpen }) => {
    const [domain, setDomain] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [security, setSecurity] = useState(false);
    const [workers, setWorkers] = useState(false);
    const [R2, setR2] = useState(false);
    const [manage, setManage] = useState(false);
    return (
        <div className={`w-[280px] h-[92.5vh] top-[70px] border-r ${toggleOpen ? 'block' : 'hidden'}`}>
            <div className="text-[12px]">
                {/* user_profile_name */}
                <div className="h-[60px] flex items-center justify-center text-[16px] font-semibold text-black overflow-ellipsis border-b cursor-pointer">
                    <span>
                        <h1>rkrocky2018@gmail.com</h1>
                    </span>
                </div>
                {/* allsidebar */}
                <div className="overflow-y-scroll hide-scroll-bar h-[80vh]">
                    {/* website */}
                    <div className="border-b pb-[10px]">
                        {/* website_header */}
                        <div className="">
                            <Link to='/' className="flex items-center gap-[3px] py-[10px]  bg-[#ECF4FF] cursor-pointer ml-[8px] mt-[10px] border border-[#B9D6FF] rounded-tl-full rounded-bl-full side_single_content">

                                <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><BsCalendar4 /></p>
                                <p className='text-[14px] font-bold border_dotted ml-[10px]'>Websites</p>
                            </Link>
                        </div>
                        {/* domain_register */}
                        <div className="">
                            <div onClick={() => setDomain(!domain, setAnalytics(false), setSecurity(false))} className="flex items-center justify-between gap-[3px] py-[10px] px-[21px] hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                                <p className='text-[#0051C3] text-[16px]'><TfiWorld /></p>
                                <Link className='text-[14px] ml-[-15px]'>Domain Registration</Link>
                                <div className="mt-[-5px]">
                                    <i className="fa-solid fa-sort-down text-[15px]  text-[#595959]"></i>
                                </div>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[37px] rounded-tl-full rounded-bl-full side_single_content ${domain ? 'block' : 'hidden'}`}>
                                <NavLink to="/managedomain" className='text-[14px] border_dotted'>Menage Domains</NavLink>
                            </div>
                        </div>
                        {/* Analytics__&__logs */}
                        <div className="">
                            <div onClick={() => setAnalytics(!analytics, setDomain(false), setSecurity(false))} className="flex items-center justify-between gap-[3px] py-[10px] px-[21px] hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                                {/* <i className="fa-regular fa-calendar  px-[20px]"></i> */}
                                <p className='flex justify-end text-[#0051C3] text-[16px]'><i className="fa-solid fa-chart-pie"></i></p>
                                <p className='text-[14px] border_dotted ml-[-13px]'>Analytics & Logs</p>
                                <div className="mt-[-5px]">
                                    <i className="fa-solid fa-sort-down text-[15px]  text-[#595959] ml-[30px]"></i>
                                </div>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${analytics ? 'block' : 'hidden'}`}>
                                <Link to="/accountanalytics" className="flex gap-2">
                                    <p className='ml-[-7px]'>Account Analytics</p>
                                    <p className='px-[10px] rounded-full bg-[#fbcda5]'>Beta</p>
                                </Link>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${analytics ? 'block' : 'hidden'}`}>
                                <Link to="/webanalytics" className="flex gap-2">
                                    <p className='ml-[-7px]'>Web Analytics</p>
                                </Link>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${analytics ? 'block' : 'hidden'}`}>
                                <Link to="/carbonimpact" className="flex gap-2">
                                    <p className='ml-[-7px]'>Carbon Impact Report</p>
                                </Link>
                            </div>
                        </div>
                        {/* Security__center */}
                        <div className="">
                            <div onClick={() => setSecurity(!security, setDomain(false), setAnalytics(false))} className="flex items-center justify-between gap-[3px] py-[10px] px-[21px] hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                                <p className='flex justify-end text-[#0051C3] text-[16px]'><i className="fa-regular fa-square-plus"></i></p>
                                <p className='text-[14px] border_dotted ml-[-20px]'>Security Center</p>
                                <div className="mt-[-5px]">
                                    <i className="fa-solid fa-sort-down text-[15px]  text-[#595959] ml-[30px]"></i>
                                </div>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${security ? 'block' : 'hidden'}`}>
                                <Link to="/securityinsights" className="">
                                    <p className='ml-[-8px]'>Security Insights</p>
                                </Link>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${security ? 'block' : 'hidden'}`}>
                                <Link to="/infrastructure" className="">
                                    <p className='ml-[-8px]'>Infrastructure</p>
                                </Link>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${security ? 'block' : 'hidden'}`}>
                                <Link to='/investigate' className="">
                                    <p className='ml-[-8px]'>Investigate</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* TurnStile__beta */}
                    <div className="border-b">
                        <Link to="/turnstile" className="flex items-center gap-[3px] py-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] mt-[10px] mb-[10px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><BsCheck2Circle /></p>
                            <p className='ml-[10px]'>Turnstile</p>
                            <p className='px-[10px] rounded-full bg-[#fbcda5]'>Beta</p>
                        </Link>
                    </div>
                    {/* Zero__trust */}
                    <div className="border-b">
                        <div className="flex items-center gap-[3px] py-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] mt-[10px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><IoShieldCheckmarkOutline /></p>
                            <p className='ml-[10px]'>Zero Trust</p>
                        </div>
                        <Link to='/area' className="flex items-center gap-[3px] py-[10px] mb-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><MdOutlineForwardToInbox /></p>
                            <p className='ml-[10px]'>Area 1</p>
                        </Link>
                    </div>
                    {/* Works_pages_r2__start */}
                    <div className="border-b pb-[10px]">
                        {/* Workers */}
                        <div className="mt-[10px]">
                            <div onClick={() => setWorkers(!workers, setAnalytics(false), setSecurity(false))} className="flex items-center justify-between gap-[3px] py-[10px] px-[21px] hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                                <p className='text-[#0051C3] text-[16px]'><BsSuitDiamond /></p>
                                <p className='text-[14px] ml-[-100px]'>Workers</p>
                                <div className="mt-[-5px]">
                                    <i className="fa-solid fa-sort-down text-[15px]  text-[#595959]"></i>
                                </div>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${workers ? 'block' : 'hidden'}`}>
                                <p className='text-[14px] ml-[-7px]'>Overview</p>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${workers ? 'block' : 'hidden'}`}>
                                <p className='text-[14px] ml-[-7px]'>KV</p>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${workers ? 'block' : 'hidden'}`}>
                                <div className="flex gap-2">
                                    <p className='ml-[-7px]'>Queues</p>
                                    <p className='px-[10px] rounded-full bg-[#fbcda5]'>Beta</p>
                                </div>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${workers ? 'block' : 'hidden'}`}>
                                <div className="flex gap-2">
                                    <p className='ml-[-7px]'>D1</p>
                                    <p className='px-[10px] rounded-full bg-[#fbcda5]'>Alpha</p>
                                </div>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${workers ? 'block' : 'hidden'}`}>
                                <p className='text-[14px] ml-[-7px]'>Plans</p>
                            </div>
                        </div>
                        {/* Pages */}
                        <div className="flex items-center gap-[3px] py-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><SlEnergy /></p>
                            <p className='ml-[10px]'>Pages</p>
                        </div>
                        {/* R2 */}
                        <div className="">
                            <div onClick={() => setR2(!R2, setAnalytics(false), setSecurity(false))} className="flex items-center justify-between gap-[3px] py-[10px] px-[21px] hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                                <p className='text-[#0051C3] text-[16px]'><BiCoinStack /></p>
                                <p className='text-[14px] ml-[-143px]'>R2</p>
                                <div className="mt-[-5px]">
                                    <i className="fa-solid fa-sort-down text-[15px]  text-[#595959]"></i>
                                </div>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${R2 ? 'block' : 'hidden'}`}>
                                <p className='text-[14px] ml-[-7px]'>Overview</p>
                            </div>
                            <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${R2 ? 'block' : 'hidden'}`}>
                                <div className="flex gap-2">
                                    <p className='ml-[-7px]'>R2 Migrator</p>
                                    <p className='px-[10px] rounded-full bg-[#fbcda5]'>Beta</p>
                                </div>
                            </div>
                        </div>
                        {/* Stream */}
                        <div className="flex items-center gap-[3px] py-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><MdOutlineVideoSettings /></p>
                            <p className='ml-[10px]'>Stream</p>
                        </div>
                        {/* Images */}
                        <div className="flex items-center gap-[3px] py-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><IoImageOutline /></p>
                            <p className='ml-[10px]'>Images</p>
                        </div>
                    </div>
                    {/* Works_pages_r2__end */}
                    {/* MenageAccount_notification_bulk_start */}
                    {/* Manage_Account */}
                    <div className="mt-[10px]">
                        <div onClick={() => setManage(!manage, setAnalytics(false), setSecurity(false))} className="flex items-center justify-between gap-[3px] py-[10px] px-[21px] hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='text-[#0051C3] text-[16px]'><IoSettingsOutline /></p>
                            <p className='text-[14px] ml-[-40px]'>Manage Account</p>
                            <div className="mt-[-5px]">
                                <i className="fa-solid fa-sort-down text-[15px]  text-[#595959]"></i>
                            </div>
                        </div>
                        <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${manage ? 'block' : 'hidden'}`}>
                            <p className='text-[14px] ml-[-7px]'>Members</p>
                        </div>
                        <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${manage ? 'block' : 'hidden'}`}>
                            <p className='text-[14px] ml-[-7px]'>Audit Log</p>
                        </div>
                        <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${manage ? 'block' : 'hidden'}`}>
                            <p className='text-[14px] ml-[-7px]'>Billing</p>
                        </div>
                        <div className={`py-[3px] hover:bg-[#E9F7FB] cursor-pointer ml-[32px] pl-[43px] rounded-tl-full rounded-bl-full side_single_content ${manage ? 'block' : 'hidden'}`}>
                            <p className='text-[14px] ml-[-7px]'>Configuration</p>
                        </div>
                    </div>
                    {/* Notification */}
                    <div className="flex items-center gap-[3px] py-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] rounded-tl-full rounded-bl-full side_single_content">
                        <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><CiBullhorn /></p>
                        <p className='ml-[10px]'>Notification</p>
                    </div>
                    {/* Bulk */}
                    <div className="border-b mb-3">
                        <div className="flex items-center gap-[3px] py-[10px]  hover:bg-[#E9F7FB] cursor-pointer ml-[8px] mb-[10px] rounded-tl-full rounded-bl-full side_single_content">
                            <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'><GiShuttlecock /></p>
                            <p className='ml-[10px]'>Bulk Redirects</p>
                            <p className='px-[10px] rounded-full bg-[#fbcda5]'>Beta</p>
                        </div>
                    </div>
                    {/* MenageAccount_notification_bulk_end */}
                </div>
                {/* Expand */}
                <div className="border-t pt-[10px]">
                    <div className="flex items-center gap-[3px] py-[10px]   cursor-pointer ml-[8px] mb-[10px] rounded-tl-full rounded-bl-full side_single_content">
                        <p className='pl-[20px] pr-[10px] text-[#0051C3] font-bold text-[16px]'>                        <i className="fa-solid fa-angles-left"></i>
                        </p>
                        <p className='ml-[10px]'>Collapse sidebar</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;