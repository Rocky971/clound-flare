import React from 'react';

const AccountAnalytics = () => {
    return (
        <div className='sm:w-[80%] px-[10px] mx-auto'>
            <div className="">
                <header className='py-[20px] '>
                    <h1 className='text-[34px] font-bold '><span className='text-[30px] font-medium'>All sites for</span> rkrocky2018@gmail.com's Account</h1>
                </header>
                {/* download_Content_and_selectDate */}
                <div className="flex md:flex-row flex-col items-center gap-5 justify-end">
                    <div className="text-[#0051c3] text-[14px]">
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                    <div className="text-[#0051c3]">
                        <p>Download data for: All sites for account,<br /> Previous 7 days</p>
                    </div>
                    <div className="">
                        <select name="" id="" className='border cursor-pointer border-black text-[18px] pl-[10px] pr-[50px] py-[5px] rounded-[5px]'>
                            <option value="">Previous 7 days</option>
                            <option value="">Previous 24 hours</option>
                            <option value="">Previous 7 days</option>
                            <option value="">Previous 30 days</option>
                            <option value="">Custom range</option>
                        </select>
                    </div>
                </div>
                {/* request_bandwidth_visitor_pageviws */}
                <div className="py-[50px] px-[45px]">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="flex flex-col">
                            <p>Requests</p>
                            <p className='text-[24px] font-semibold'>0</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Bandwidth</p>
                            <p className='text-[24px] font-semibold'>0 B</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Visits</p>
                            <p className='text-[24px] font-semibold'>0</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Page views</p>
                            <p className='text-[24px] font-semibold'>0</p>
                        </div>
                    </div>
                </div>
                {/* maps__and__tables */}
                <div className="w-[60vw] mx-auto gap-5 grid grid-cols-1 lg:grid-cols-2">
                    <div className="">
                        <div className="h-[65vh]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136279.6661700354!2d88.69083267707349!3d26.158956083134733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e49c02bc5b266b%3A0xfbc42e74a3ad1ac5!2sDebiganj%20Upazila!5e0!3m2!1sen!2sbd!4v1680469071937!5m2!1sen!2sbd" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="">
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th className='text-[16px] py-[8px] font-medium bg-[#F2F2F2]'>Requests</th>
                                    <th className='text-[16px] py-[8px] font-medium bg-[#F2F2F2]'>Bandwidth</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b'>
                                    <td></td>
                                    <td className='text-[14px]  py-[20px] '>No data</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px]  py-[32px] '></td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px]  py-[32px] '></td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px]  py-[32px] '></td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px]  py-[32px] '></td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px] py-[32px]'></td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px] py-[32px]'></td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px] py-[32px]'></td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='text-[14px] py-[32px]'></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* card */}
                <div className="w-[60vw] mx-auto">
                    {/* security */}
                    <div className="border border-black rounded-[5px] mt-[40px]">
                        <h6 className='text-[20px] font-medium py-[20px] pl-[30px]'>Security</h6>
                        <div className="flex flex-wrap justify-between pb-[40px] px-[30px]">
                            <div className="flex flex-col">
                                <p>Encrypted requests</p>
                                <p className='text-[24px] font-semibold'>0</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Encrypted requests rate</p>
                                <p className='text-[24px] font-semibold'>0%</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Encrypted bandwidth</p>
                                <p className='text-[24px] font-semibold'>0 B</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Encrypted bandwidth rate</p>
                                <p className='text-[24px] font-semibold'>0%</p>
                            </div>
                        </div>
                    </div>
                    {/* Cache */}
                    <div className="border border-black rounded-[5px] mt-[40px]">
                        <h6 className='text-[20px] font-medium py-[20px] pl-[30px]'>Cache</h6>
                        <div className="flex flex-wrap justify-between pb-[40px] px-[30px]">
                            <div className="flex flex-col">
                                <p>Cached requests</p>
                                <p className='text-[24px] font-semibold'>0</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Cached requests rate</p>
                                <p className='text-[24px] font-semibold'>0%</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Cached bandwidth</p>
                                <p className='text-[24px] font-semibold'>0 B</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Cached bandwidth rate</p>
                                <p className='text-[24px] font-semibold'>0%</p>
                            </div>
                        </div>
                    </div>
                    {/* Errors */}
                    <div className="border border-black rounded-[5px] mt-[40px]">
                        <h6 className='text-[20px] font-medium py-[20px] pl-[30px]'>Errors</h6>
                        <div className="flex flex-wrap justify-between pb-[40px] px-[30px]">
                            <div className="flex flex-col">
                                <p>4xx errors</p>
                                <p className='text-[24px] font-semibold'>0</p>
                            </div>
                            <div className="flex flex-col">
                                <p>4xx error rate</p>
                                <p className='text-[24px] font-semibold'>0%</p>
                            </div>
                            <div className="flex flex-col">
                                <p>5xx errors</p>
                                <p className='text-[24px] font-semibold'>0 B</p>
                            </div>
                            <div className="flex flex-col">
                                <p>5xx error rate</p>
                                <p className='text-[24px] font-semibold'>0%</p>
                            </div>
                        </div>
                    </div>
                    {/* Errors */}
                    <div className="border border-black rounded-[5px] mt-[40px]">
                        <h6 className='text-[20px] font-medium py-[20px] pl-[30px]'>network</h6>
                        <div className="flex flex-wrap justify-between pb-[40px] px-[30px]">
                            <div className="flex flex-col">
                                <p className='font-medium pb-[5px]'>Client HTTP Version Used</p>
                                <p className=''>No data</p>
                            </div>
                            <div className="flex flex-col">
                                <p className='font-medium pb-[5px]'>Traffic Served Over SSL</p>
                                <p className=''>No data</p>
                            </div>
                            <div className="flex flex-col">
                                <p className='font-medium pb-[5px]'>Top Content Types</p>
                                <p className=''>No data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountAnalytics;