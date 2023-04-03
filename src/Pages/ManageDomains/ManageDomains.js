import React from 'react';

const ManageDomains = () => {
    return (
        <div className=' w-[80%] mx-auto'>
            <div className="my-[32px]">
                <header className=''>
                    <h1 className='text-[32px] mb-[15px] leading-[1.25] font-semibold text-[#313131]'>Domain Registration</h1>
                    <h1 className='text-[22px] leading-[1.25] font-semibold text-[#313131]'>Domain Registration</h1>
                </header>
                <div className="">
                    <div className="">
                        <div className=" mr-[16px] mb-[8px]">
                            <form className="mb-[16px]">
                                <div className="">
                                    <div className="mt-[30px] mb-[10px] rounded-[8px] border border-[#FE9F97] bg-[#FFEFEE] px-[20px] py-[7px]">
                                        <p> Please <span className='text-[#0052C6] underline'>verify your account email address</span> to access all Registrar features such as Registration and Transfer.</p>
                                    </div>
                                    <label className="mb-[4px]">
                                        Domain name
                                    </label>
                                    <div className="flex gap-[8px]">
                                        <div className="relative w-full">
                                            <input type="text" name="" className="pl-[30px] py-[1px] rounded-[5px] border border-black w-full" />
                                            <i className="fa-solid fa-magnifying-glass absolute left-2 top-2 text-[10px]"></i>
                                        </div>
                                        <button className='rounded-[5px] bg-[#056dff] text-white px-[14px] border text-[18px]'>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="font-semibold text-[#313131]">
                        <table className='w-full text-left'>
                            <thead className=' '>
                                <tr className='text-[16px]'>
                                    <th className='px-[15px] py-[14px] bg-[#d9d9d9] rounded-tl cursor-pointer' >Domain<i className="fa-solid fa-caret-down text-[#0051C3] ml-1 text-[22px]"></i></th>
                                    <th className='px-[15px] py-[14px] bg-[#d9d9d9]'>Status</th>
                                    <th className='px-[15px] py-[14px] bg-[#d9d9d9]'>Auto-renew</th>
                                    <th className='px-[15px] py-[14px] bg-[#d9d9d9] cursor-pointer'>Expires<i className="fa-solid fa-caret-down text-[#0051C3] ml-1 text-[22px]"></i></th>
                                    <th className='px-[15px] py-[14px] bg-[#d9d9d9] rounded-tr'>Manage</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex gap-2 my-[15px]">
                    <i className="fa-solid fa-angle-left border p-2 rounded-[5px] cursor-pointer text-[14px]"></i>
                    <i className="fa-solid fa-angle-right border p-2 rounded-[5px] cursor-pointer text-[14px]"></i>
                </div>
            </div>
        </div>
    );
};

export default ManageDomains;