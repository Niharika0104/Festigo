"use client";

import { useState } from "react";
import Sidebar from "../common/Sidebar";
import InputField from "../common/InputField";
import { CiSearch } from "react-icons/ci";
import { PiUserCircleDuotone, PiUsersDuotone } from "react-icons/pi";
import PlusIcon from "@/public/assests/icons/PulsIcon.png";
import { FaArrowRightLong } from "react-icons/fa6";
import UserImage from "@/public/assests/icons/userImage.png";
import { CiLocationOn } from "react-icons/ci";
import { TransportorData } from "@/constants/Transporter";
import MessageIcon from "@/public/assests/icons/messageIcon.png";
import Image from "next/image";

import curve from "@/public/assests/icons/curve.png";

export default function DashBoard() {


    const data = [
        {
            title: "Meet Designer",
            timing: "01:00 PM - 02:00 PM",
        },
        {
            title: "Wedding dance",
            timing: "01:00 PM - 02:00 PM",
        },
        {
            title: "Finalize Caterer",
            timing: "01:00 PM - 02:00 PM",
        },
    ];

    const eventData = [
        {
            title: "Events booked",
            total: "08",
        },
        {
            title: "Events Organized",
            total: "13",
        },
        {
            title: "Events attended",
            total: "07",
        },
    ];


    return (

        <div className=" bg-[#FEF4F4] overflow-hidden">

            <div className="relative flex flex-col md:flex-row gap-4 w-full ">


                <div className="w-full min-h-max flex flex-col pr-5 overflow-hidden ">


                    {/* section 2  */}

                    <div className="flex justify-between mt-3 gap-4 px-3">

                        {/* spend this month  */}


                        <div className="flex gap-20 bg-white p-3 py-6 rounded-2xl w-fit px-6 pr-14 ml-6 ">

                            <div className="flex flex-col gap-2">

                                <p className="text-[#A3AED0]">Spent this month</p>
                                <p className="text-[#1B2559] font-bold">$682.5</p>

                            </div>


                            <div className="flex gap-2">

                                {[...Array(7)].map((_, idx) => (

                                    <div key={idx} className="flex flex-col rounded-full">

                                        <div className=" w-[5.33px] h-[10px] bg-[#E9EDF7] rounded-t-full"></div>
                                        <div className="w-[5.33px] h-[35px] bg-[#FF0303] rounded-full"></div>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Guest 321  */}


                        <div className="flex flex-row items-center gap-4 bg-white w-fit px-8 py-3 rounded-lg pr-[8rem]">
                            
                            
                            <div className="w-[56px] h-[56px] p-2 rounded-full bg-red-500 flex justify-center items-center">

                                <PiUsersDuotone size={28} className="text-white" />

                            </div>

                            <div className="flex gap-1 flex-col ">

                                <p className="text-[#A3AED0]">Guests</p>
                                <p className="text-[#1B2559] text-[18px]">321</p>

                            </div>

                            <div className="flex w-[58px] h-[28px] pl-8">

                                <Image src={curve} alt="curve " className="w-full h-full bg-cover"></Image>


                            </div>

                        </div>

                        {/* Schedule an Event  */}

                        <div className="flex justify-center gap-16 items-center bg-gradient-to-r from-[#FF8686] to-[#FF1818] rounded-2xl px-9">

                            <p className="text-[#E9EDF7] text-[16px] w-[117px] text-wrap">Schedule an Event</p>

                            <Image src={PlusIcon} alt="plus" className="w-[90px] h-[90px]" />

                        </div>

                    </div>


                    {/* Section 3  */}

                    <div className="flex gap-4 justify-between ">

                        {/* 3.1 */}

                        <div className="flex flex-col gap-2 mt-4 pl-4">


                            {/* spent this month  */}

                            <div className="flex flex-col gap-3 bg-white p-3 px-4  rounded-xl pr-9">

                                <div className="flex flex-col gap-2">

                                    <p className="text-[#A3AED0]">Spent this month</p>
                                    <p className="text-[#1B2559] font-bold text-[34px]">$682.5</p>
                                    <p className="text-[#05CD99] text-sm font-semibold">On track</p>

                                </div>
                                <div className="flex gap-7">
                                    {[...Array(9)].map((_, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div className="h-[40px] bg-[#E9EDF7] rounded-t-full w-[13px]"></div>
                                            <div className="h-[80px] bg-[#FF0303] rounded-full w-[13px]"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* Your Transactions  */}

                            <div className="flex flex-col bg-white w-fit p-1 rounded-xl px-8 pr-36">

                                <div>
                                    <h1 className="text-[#1B2559] text-xl font-bold  py-2 text-[20px]">Your transactions</h1>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {

                                        TransportorData.map((data, index) => (

                                            <div key={index} className="flex gap-7">
                                                <div
                                                    className="w-[40px] h-[40px] rounded-full bg-[#F6F8FD] flex justify-center items-center"
                                                    style={{ color: data.color }}  // Use inline style for color
                                                >
                                                    {data.icon}

                                                </div>

                                                <div className="flex flex-col">

                                                    <h1 className="text-[#1B2559] font-bold text-[16px]">{data.title}</h1>
                                                    <p className="text-[#A3AED0] text-xs">{data.date}</p>

                                                </div>
                                            </div>
                                        ))

                                    }
                                </div>


                            </div>


                        </div>

                        {/* 3.2 */}

                        <div className="flex flex-col justify-center items-center gap-2 mt-4">

                            {/* designer wedding ,guest  */}


                            <div className="flex flex-col gap-3 h-fit bg-white p-5 rounded-xl w-fit px-12 pr-7">

                                <div>
                                    <h1 className="text-[#1B2559] text-[34px] font-bold">27 May</h1>
                                </div>
                                <div className="flex flex-col gap-6">

                                    {

                                        data.map((item, index) => (

                                            <div className="flex gap-2" key={index}>

                                                <div className="w-1 h-10 bg-[#FF0303] rounded-full"></div>

                                                <div className="flex flex-col">

                                                    <p className="text-[#1B2559] text-[16px]">{item.title}</p>
                                                    <p className="text-[#A3AED0] text-[12px]">{item.timing}</p>

                                                </div>

                                            </div>
                                        ))

                                    }

                                </div>

                                <div className="flex gap-2 items-center pl-24">

                                    <p className="text-[#FF1818] font-bold">View all Tasks</p>
                                    <FaArrowRightLong className="text-[#FF1818]" />

                                </div>

                            </div>

                            {/* Featured venue  */}


                            <div className="flex flex-col bg-white p-5 rounded-xl w-fit h-fit gap-3 mt-1 pr-14 ">

                                <h1 className="text-[#1B2559] font-bold text-xl">Featured Venues</h1>

                                <p className="text-[#A3AED0] text-xs w-60">Discover brand new venue location with max discount.</p>

                                <div className="flex gap-1 items-center pt-5">

                                    <p className="text-[#FF1818] font-bold">Check all</p>

                                    <FaArrowRightLong className="text-[#FF1818]" />

                                </div>

                            </div>



                        </div>

                        {/* 3.3 */}

                        <div className="flex flex-col justify-center items-center gap-6 mt-3">


                            {/* Radhika sharma  */}


                            <div className="relative flex flex-col gap-2 bg-white justify-center items-center p-6 rounded-xl px-12">

                                <div className="relative w-[120px] h-[120px] rounded-full bg-[#F6F8FD] flex justify-center items-center">
                                    <Image src={UserImage} alt="user image" className="w-full h-full bg-cover" />
                                </div>
                                <p className="text-[24px] text-[#1B2559] font-bold ">Radhika Sharma</p>
                                <div className="flex justify-center items-center">
                                    <CiLocationOn className="text-[#A3AED0]" />
                                    <p className="text-[#A3AED0] text-[14px]">Kanpur, UP, USA</p>
                                </div>
                                <div className="flex justify-between gap-4 mt-6">
                                    {eventData.map((data, index) => (
                                        <div key={index} className="flex flex-col gap-3 justify-center items-center">
                                            <p className="text-[#A3AED0] text-[12px]">{data.title}</p>
                                            <p className="text-[#1B2559] font-bold text-[24px]">{data.total}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>




                            <div className="bg-[#F2FFEA] w-fit h-fit p-3 rounded-xl ">

                                <div className="flex justify-end">

                                    <p className="text-[#D0A3A3] text-[14px]"> Open chat </p>

                                </div>

                                <div className="flex gap-4 justify-center items-center px-4 py-3 rounded-lg">

                                    <div className="w-[56px] h-[56px] border border-[#08A604] flex justify-center items-center rounded-full">

                                        <Image src={MessageIcon} alt="MessageIcon" className="w-[40px] h-[40px]" />

                                    </div>

                                    <div>

                                        <p className="text-[#A3AED0] text-[14px]">Radhika ki Sautan:</p>

                                        <p className="text-[#1B2559] font-bold text-[15px]">Uss churail ko kisne bulaya?</p>

                                    </div>

                                    <div className="flex justify-center items-center p-2 w-[30px] h-[30px] bg-[#08A604] rounded-full">

                                        <p className="text-white font-bold">2</p>

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}



