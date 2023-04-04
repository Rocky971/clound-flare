import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar';
import Footer from '../Pages/Shared/Footer/Footer';
import SidebarTwo from '../Pages/Shared/Sidebar/SidebarTwo';




const Main = () => {
    const [toggleOpen, setToggleOpen] = useState(true);
    return (
        <div className="">
            <div className="">
                <Navbar setToggleOpen={setToggleOpen} toggleOpen={toggleOpen} />
            </div>
            <div className="flex">
                <div className="">
                    <Sidebar setToggleOpen={setToggleOpen} toggleOpen={toggleOpen} />
                    <SidebarTwo setToggleOpen={setToggleOpen} toggleOpen={toggleOpen} />
                </div>
                <div className="w-full h-[92.5vh] overflow-y-scroll hide-scroll-bar">
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;