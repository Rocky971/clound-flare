import React from 'react';

const first1 = "https://static.dash.cloudflare.com/0bcb52e1315c5ddf95b8.svg"
const second = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE1IiBoZWlnaHQ9IjkxIiB2aWV3Qm94PSIwIDAgMTE1IDkxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSItMSIgeT0iMSIgd2lkdGg9IjI5LjgzMjkiIGhlaWdodD0iMjAuOTQyNiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTEzIDApIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMDg2RkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjEwIDEwIi8+CjxyZWN0IHg9Ii0xIiB5PSIxIiB3aWR0aD0iMjkuODMyOSIgaGVpZ2h0PSIyMC45NDI2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyOS44MzI5IDY3LjM5NCkiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwODZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMTAgMTAiLz4KPHJlY3Qgd2lkdGg9IjI0LjA4OTgiIGhlaWdodD0iMTYuMDU5OSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjguMTA0NyA3MC44MzU0KSIgZmlsbD0iI0U5RjdGQiIvPgo8cmVjdCB3aWR0aD0iMjQuMDg5OCIgaGVpZ2h0PSIxNi4wNTk5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAxMTEuMjcyIDMuNDQxNDEpIiBmaWxsPSIjRTlGN0ZCIi8+CjxyZWN0IHg9IjMxLjQxMjciIHk9IjI2LjUzNzQiIHdpZHRoPSI1Mi40NjgiIGhlaWdodD0iMzcuODM1NCIgc3Ryb2tlPSIjMDg2RkZGIiBzdHJva2Utd2lkdGg9IjMzIi8+CjxwYXRoIGQ9Ik0xNC45MTI4IDgwLjg3MjhMMjQuNDk1NiA3MC43MTQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTkwLjc5ODEgMjAuMTk2TDEwMC4zODEgMTAuMDM3NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xMDAuMzgxIDgwLjg3MjhMOTAuNzk4MSA3MC43MTQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTI0LjQ5NTcgMjAuMTk2TDE0LjkxMyAxMC4wMzc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMjMuODY5IiB5PSIxOS41NjczIiB3aWR0aD0iNjcuNTQ4NiIgaGVpZ2h0PSI1Mi4wNjIzIiBmaWxsPSIjRTlGN0ZCIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPHJlY3QgeD0iMTMuOTEyNyIgeT0iOS4wMzc0MSIgd2lkdGg9Ijg3LjQ2MTMiIGhlaWdodD0iNzIuODM1NCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjMwLjgzMjkiIHk9IjI3LjEwNDciIHdpZHRoPSI1My42MjA5IiBoZWlnaHQ9IjM2LjcwMDciIGZpbGw9IiNFOUY3RkIiIHN0cm9rZT0iIzE5NjUzNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik00Ny4wMzI1IDI4LjUzNDlMMzIuNTQ5OSA0My4wMTc1VjQ4Ljc1MzFMNTIuNzY4MSAyOC41MzQ5SDQ3LjAzMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTkuNTA3NSAyOC44MjE3TDMyLjU0OTkgNTUuNzc5M1Y1Mi4zMzc5TDU2LjA2NjEgMjguODIxN0g1OS41MDc1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcyLjg0MjkgMjkuMjUxOUw0MC4xNDk3IDYxLjk0NTJINjEuNjU4NEw4Mi40NTAyIDQwLjQzNjRWMjkuMjUxOUg3Mi44NDI5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTgyLjAxOTkgNDYuNDU4OUw2Ny4xMDcyIDYxLjMyMDZWNjEuNjU4NEg2OS4xNDA3TDgyLjAxOTkgNDguODIzMlY0Ni40NTg5WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMzUuODMyOSIgeT0iMzIuMTA0NyIgd2lkdGg9IjQzLjYyMDkiIGhlaWdodD0iMjYuNzAwNyIgc3Ryb2tlPSIjMkRCMzVFIiBzdHJva2Utd2lkdGg9IjgiLz4KPHJlY3QgeD0iMzAuMjUxOCIgeT0iNjEuMjI0NSIgd2lkdGg9IjMuMTYyMDkiIGhlaWdodD0iMy4xNjIwOSIgZmlsbD0iI0M1RUJGNSIgc3Ryb2tlPSIjMTk2NTM1IiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iODEuNTg2MSIgeT0iMjYuNTIzNyIgd2lkdGg9IjMuMTYyMDkiIGhlaWdodD0iMy4xNjIwOSIgZmlsbD0iI0M1RUJGNSIgc3Ryb2tlPSIjMTk2NTM1IiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iODEuNTg2MSIgeT0iNjEuMjI0NSIgd2lkdGg9IjMuMTYyMDkiIGhlaWdodD0iMy4xNjIwOSIgZmlsbD0iI0M1RUJGNSIgc3Ryb2tlPSIjMTk2NTM1IiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMzAuMjUxOCIgeT0iMjYuNTIzNyIgd2lkdGg9IjMuMTYyMDkiIGhlaWdodD0iMy4xNjIwOSIgZmlsbD0iI0M1RUJGNSIgc3Ryb2tlPSIjMTk2NTM1IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==";
const third = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE1IiBoZWlnaHQ9IjExNSIgdmlld0JveD0iMCAwIDExNSAxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjU3LjUiIGN5PSI1Ny41IiByPSI1Ni41IiBmaWxsPSIjQUNFMkYwIiBzdHJva2U9IiMwMDU1REMiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSI1Ny44NjUyIiBjeT0iNTcuODY1MSIgcj0iNTAuMTk4NCIgZmlsbD0iI0U5RjdGQiIvPgo8Y2lyY2xlIGN4PSI1Ny42ODI0IiBjeT0iNTcuNjgyNSIgcj0iNDIuNzE0MyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwMC4xNDkgNTcuNjQ3OEMxMDAuMTQ5IDgxLjEyMDcgODEuMTIwNSAxMDAuMTQ5IDU3LjY0NzYgMTAwLjE0OUMzNC4xNzQ3IDEwMC4xNDkgMTUuMTQ2MSA4MS4xMjA3IDE1LjE0NjEgNTcuNjQ3OEMxNS4xNDYxIDM0LjE3NDkgMzQuMTc0NyAxNS4xNDYzIDU3LjY0NzYgMTUuMTQ2M0M4MS4xMjA1IDE1LjE0NjMgMTAwLjE0OSAzNC4xNzQ5IDEwMC4xNDkgNTcuNjQ3OFoiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNFOUY3RkIiLz4KPHBhdGggZD0iTTk4LjczNzcgNDMuNzkyMkw0NC4yNjkyIDk4LjI2MDdMNTIuMzkxNyAxMDAuMTcyTDU4LjYwMyAxMDAuNjVMMTAwLjY0OSA1OC42MDM4VjUyLjg3MDNMOTguNzM3NyA0My43OTIyWiIgZmlsbD0iI0U5RjdGQiIgc3Ryb2tlPSIjRTlGN0ZCIi8+CjxwYXRoIGQ9Ik02Mi45MjQzIDE2LjA3OTVMMTQuNjQ2IDY0LjAwMjdMMTUuNjAxNiA2Ny42ODE0TDIwLjM3OTUgNzkuNjI2M0w3OS4xNDgyIDIwLjg1NzZMNjguNjM2NyAxNi4wNzk2TDYyLjkyNDMgMTYuMDc5NVoiIGZpbGw9IiNFOUY3RkIiIHN0cm9rZT0iI0U5RjdGQiIvPgo8cGF0aCBkPSJNODQuNDA0MiAyNC4yMDI1TDI0LjIwMjEgODQuNDA0NkwyNy41NDY3IDg4LjIyNjlMODguMjI2NiAyNy41NDcxTDg0LjQwNDIgMjQuMjAyNVoiIGZpbGw9IiNFOUY3RkIiIHN0cm9rZT0iI0U5RjdGQiIvPgo8cGF0aCBkPSJNNTcuNDk5NyA4OEw1Ni42MjQyIDg3LjU4ODNDNTUuNzAwNSA4Ny4xNTQ3IDM0IDc2LjcyMDYgMzQgNTUuNTkxNFYzOS4yNzVMMzUuNjgxMyAzOS4wNDk1QzQzLjM3NTEgMzguMDA1IDUwLjUwOTYgMzQuNjcwNCA1Ni4wMzY4IDI5LjUzNTZMNTcuNDk2NiAyOEw1OC45NjMyIDI5LjUzNTZDNjQuNDkwNCAzNC42NzA0IDcxLjYyNDkgMzguMDA1IDc5LjMxODcgMzkuMDQ5NUw4MSAzOS4yNzVWNTUuNTkxNEM4MSA3Ni43MjA2IDU5LjI5OTUgODcuMTU0NyA1OC4zNzU4IDg3LjU4ODNMNTcuNDk5NyA4OFoiIGZpbGw9IiMyMjhCNDkiLz4KPHBhdGggZD0iTTU3LjQ5OTcgODhMNTYuNjI0MiA4Ny41ODgzQzU1LjcwMDUgODcuMTU0NyAzNCA3Ni43MjA2IDM0IDU1LjU5MTRWMzkuMjc1TDM1LjY4MTMgMzkuMDQ5NUM0My4zNzUxIDM4LjAwNSA1MC41MDk2IDM0LjY3MDQgNTYuMDM2OCAyOS41MzU2TDU3LjQ5NjYgMjhMNTguOTYzMiAyOS41MzU2QzY0LjQ5MDQgMzQuNjcwNCA3MS42MjQ5IDM4LjAwNSA3OS4zMTg3IDM5LjA0OTVMODEgMzkuMjc1VjU1LjU5MTRDODEgNzYuNzIwNiA1OS4yOTk1IDg3LjE1NDcgNTguMzc1OCA4Ny41ODgzTDU3LjQ5OTcgODhaIiBzdHJva2U9IiMwMDU1REMiLz4KPGVsbGlwc2UgY3g9IjU3LjEzNDgiIGN5PSI1NS4yMjI2IiByeD0iNC41NjM0OSIgcnk9IjQuNzQ2MDMiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01Ny40OTk5IDU1LjIyMjdMNTIuNTcxMyA2Ni41NDAxSDYyLjQyODRMNTcuNDk5OSA1NS4yMjI3WiIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNTcuODY0OCIgY3k9IjU3Ljg2NTEiIHI9IjM4LjYyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxMCIvPgo8L3N2Zz4K"

const CarbonImpact = () => {
    return (
        <div className='w-[80%] mx-auto px-[10px]'>
            <div className="pt-[25px] pb-[50px]">
                <div className="">
                    <h4 className='text-[25px] font-normal'>Carbon Impact Report</h4>
                </div>
                {/* *** */}
                <div className="bg-[#0051C3] p-[15px] text-white my-[30px]">
                    <p>Based on the recency of this account's creation date, we do not have annual information available yet related to carbon impact.</p>
                </div>
                {/* *** */}
                <div className="">
                    <h1 className='text-[48px] font-bold'><span className='text-[48px] font-bold text-[#228B49]'>Go green</span> with Cloudflare</h1>
                    <p>Did you know Cloudflare already offers ways to help reduce your carbon impact? Check out some of our <br /> recommendations below and optimize your website in the process.</p>
                </div>
                {/* three_card*** */}
                <div className="grid gap-[30px] grid-cols-1 lg:grid-cols-3">
                    <div className="border border-[#B6B6B6] mt-[20px]">
                        <img src={first1} alt="workers details" className='mx-auto pt-[45px]' />
                        <div className="px-[20px] pb-[40px]">
                            <h6 className='text-[20px] font-medium pt-[20px] pb-[15px]'>Workers, Durable Objects, Pages</h6>
                            <p>Use Workers, Durable Objects, or Pages to host your content. Cloudflare offsets carbon emissions by purchasing Renewable Energy Certificates to match 100% of the power used in all of our data centers and offices around the world (certified by Green Web Foundation).</p>
                        </div>
                        <div className="flex justify-end pr-[20px] text-[#0051C3] pb-[15px] underline cursor-pointer">
                            <p>learn more</p>
                        </div>
                    </div>
                    {/* *** */}
                    <div className="border border-[#B6B6B6] mt-[20px]">
                        <img src={second} alt="workers details" className='mx-auto pt-[45px]' />
                        <div className="px-[20px] pb-[40px]">
                            <h6 className='text-[20px] font-medium pt-[20px] pb-[15px]'>Image Resizing</h6>
                            <p>Use Cloudflare’s Image Resizing for visual content on your site. Properly resizing images reduces the energy it takes each of your end users to load a page, thus reducing downstream carbon emissions.</p>
                        </div>
                        <div className="flex justify-end pr-[20px] text-[#0051C3] pb-[15px] underline cursor-pointer">
                            <p>learn more</p>
                        </div>
                    </div>
                    {/* *** */}
                    <div className="border border-[#B6B6B6] mt-[20px]">
                        <img src={third} alt="workers details" className='mx-auto pt-[45px]' />
                        <div className="px-[20px] pb-[40px]">
                            <h6 className='text-[20px] font-medium pt-[20px] pb-[15px]'>Cloud Security</h6>
                            <p>Use Cloudflare’s cloud security and performance services such as WAF, network firewall, and DDoS Mitigation. The more cloud services you use, the more of your on-premise boxes you can retire. Decommissioning hardware reduces your carbon footprint!</p>
                        </div>
                        <div className="flex justify-end pr-[20px] text-[#0051C3] pb-[15px] underline cursor-pointer">
                            <p>learn more</p>
                        </div>
                    </div>
                </div>
                {/* *** */}
                <div className="">
                    <div className="mt-[80px]">
                        <h4 className='text-[40px] font-medium mb-[4px]'>Other tips to go green</h4>
                        <p>Outside of Cloudflare, there are other ways that you could start optimizing your website to reduce your carbon footprint. Learn about other ways to go green below.</p>
                    </div>
                    {/* *** */}
                    <div className="border border-[#B6B6B6] mt-[25px]">
                        <div className="py-[20px] px-[15px]">
                            <h5 className='text-[18px] font-medium'>Website optimization</h5>
                            <p>Design your website with sustainability in mind: not auto-playing videos, trimming down bulky Javascript, and avoiding custom fonts can all help reduce the energy that it takes to power your website.</p>
                        </div>
                    </div>
                    {/* *** */}
                    <div className="border border-[#B6B6B6] mt-[18px]">
                        <div className="py-[20px] px-[15px]">
                            <h5 className='text-[18px] font-medium'>Purchase Renewable Energy Credits (RECs)</h5>
                            <p>Offset your carbon usage: consider purchasing RECs to offset your domain’s carbon usage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarbonImpact;