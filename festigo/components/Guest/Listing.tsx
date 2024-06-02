
"use client"

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import { CiFilter } from "react-icons/ci";

import { CiUser } from "react-icons/ci";

import { FaUserFriends } from "react-icons/fa";

import { BiSolidUserPin } from "react-icons/bi";

import { LuAlarmClock } from "react-icons/lu";

import BigPlus from "@/public/assests/icons/BigPlus.png";

import Image from "next/image";



export default function GuestListing() {


    const [text, setText] = useState("");

    const [selecteddate, setSlectedDate] = useState(Date.now());

    const handleChange = (e: any) => {

        setText(e.target.value);

    };

    const dateHandler = (e: any) => {

        console.log(e.target.value);

        setSlectedDate(e.target.value);

    }


    const listingData = [

        {

            title: "Guest",
            icon: <CiUser></CiUser>

        },


        {

            title: "Event",
            icon: <FaUserFriends></FaUserFriends>

        },
        {

            title: "Id",
            icon: <BiSolidUserPin></BiSolidUserPin>

        },


        {

            title: "Check in",
            icon: <LuAlarmClock></LuAlarmClock>

        },
        {

            title: "Pending",
            icon: <CiUser></CiUser>

        },

        {

            title: "Email",
            icon: <CiUser></CiUser>

        },

        {

            title: "Duration",
            icon: <CiUser></CiUser>

        },

    ]


    const guestData = [

        {

            guestName: "Mausam...",
            event: "Reception",
            id: "123456789",
            checkIn: "DONE",
            pending: "--",
            email: "adarshjain@gmail.com",
            duration: "12:00 PM"

        },

        {

            guestName: "Mausam...",
            event: "Reception",
            id: "123456789",
            checkIn: "DONE",
            pending: "--",
            email: "adarshjain@gmail.com",
            duration: "12:00 PM"

        },

        {

            guestName: "Mausam...",
            event: "Reception",
            id: "123456789",
            checkIn: "DONE",
            pending: "--",
            email: "adarshjain@gmail.com",
            duration: "12:00 PM"

        }
    ]


    return (


        <div className="flex flex-col bg-[#FBFBFB] ml-6 pl-11 pt-7 h-full">

            {/* section 1 */}

            <div className="flex justify-between items-center pr-9">

                <div className="flex shadow-xl">

                    <input type="text" className="border border-[#BDBDBD] rounded-l-xl px-5" />
                    <div className="text-white bg-[#FE3434] p-3 rounded-r-xl">Search</div>

                </div>

                <div className="flex justify-center items-center gap-4">

                    <h1 className="text-[#333333] text-[14px] font-bold">Event Category</h1>
                    <IoIosArrowDown></IoIosArrowDown>

                </div>

                <div className="flex justify-center items-center gap-5">

                    <input type="date" onChange={dateHandler} />

                    <div className=" flex justify-between items-center gap-3">

                        <h1 className="text-[#333333] text-[14px]">Today</h1>
                        <IoIosArrowDown></IoIosArrowDown>

                    </div>

                </div>

            </div>

            {/* section 2  */}

            <div className="mt-[3rem] flex ">

                {/* <div className="flex flex-col w-fit items-start gap-2 border-r-2 pr-4 border-r-[#F8F8F8] ">

                    <div className="flex gap-4">

                        <CiFilter size={24}></CiFilter>

                        <p className="text-[16px] text-[#4F4F4F] uppercase">Filter </p>

                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="all" name="filter" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                        <label htmlFor="all" className="font-medium text-gray-900">All</label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="expected" name="filter" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                        <label htmlFor="expected" className="font-medium text-gray-900">Expected</label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="checked-in" name="filter" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                        <label htmlFor="checked-in" className="font-medium text-gray-900">Checked in</label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="pending" name="filter" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                        <label htmlFor="pending" className="font-medium text-gray-900">Pending</label>
                    </div>

                </div> */}

                {/* section 2.1  */}

                <div className="flex flex-col w-fit items-start gap-6 border-r-2 pr-4 border-r-[#F8F8F8]">

                    <div className="flex gap-4">

                        <CiFilter size={24} />
                        <p className="text-[16px] text-[#4F4F4F] uppercase">Filter</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="all" name="filter" className="w-4 h-4 appearance-none border border-gray-300 focus:outline-none checked:border-blue-600 checked:bg-blue-600 relative" />
                        <label htmlFor="all" className="font-medium text-gray-900">All</label>
                        <div className="hidden checked:block w-2 h-2 bg-white absolute top-1 left-1"></div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="expected" name="filter" className="w-4 h-4 appearance-none border border-gray-300 focus:outline-none checked:border-blue-600 checked:bg-blue-600 relative" />
                        <label htmlFor="expected" className="font-medium text-gray-900">Expected</label>
                        <div className="hidden checked:block w-2 h-2 bg-white absolute top-1 left-1"></div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="checked-in" name="filter" className="w-4 h-4 appearance-none border border-gray-300 focus:outline-none checked:border-blue-600 checked:bg-blue-600 relative" />
                        <label htmlFor="checked-in" className="font-medium text-gray-900">Checked in</label>
                        <div className="hidden checked:block w-2 h-2 bg-white absolute top-1 left-1"></div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="radio" id="pending" name="filter" className="w-4 h-4 appearance-none border border-gray-300 focus:outline-none checked:border-blue-600 checked:bg-blue-600 relative" />
                        <label htmlFor="pending" className="font-medium text-gray-900">Pending</label>
                        <div className="hidden checked:block w-2 h-2 bg-white absolute top-1 left-1"></div>
                    </div>
                </div>

                {/* section  2.2  */}

                <div className="flex flex-col border-l-2 border-l-[#F8F8F8] px-6 ">

                    <div className="flex w-full gap-20 border-b-2 border-b-[#EBEBEB] pb-3">

                        {

                            listingData.map((data, index) => (

                                <div className="flex gap-3 justify-center items-center">

                                    <div>

                                        {data.icon}

                                    </div>

                                    <p className="text-[14px]">{data.title}</p>

                                </div>

                            ))

                        }


                    </div>


                    <div className="flex flex-col gap-2 mt-3">

                        {

                            guestData.map((data, index) => (

                                <div className=" w-full flex gap-20 pt-2">

                                    <p className="text-[#333333] text-[14px] truncate max-w-[150px]">{data.guestName}</p>
                                    <p className="text-[#828282] text-[14px] text-start truncate max-w-[120px]">{data.event}</p>
                                    <p className="text-[#828282] text-[14px] text-start truncate max-w-[120px]">{data.id}</p>
                                    <p className="text-[#828282] text-[14px] text-start truncate max-w-[120px] -pl-[2rem]">{data.checkIn}</p>

                                    <p className="text-[#828282] text-[14px] text-start truncate max-w-[120px] pl-7">{data.pending}</p>

                                    <p className="text-[#828282] text-[14px] text-start truncate max-w-[130px] pl-14">{data.email}</p>

                                    <p className="text-[#828282] text-[14px] text-start truncate max-w-[120px]">{data.duration}</p>


                                </div>
                            ))
                        }


                    </div>


                </div>


            </div>

            {/* section 3 */}

            <div className="relative mt-7 flex  justify-between items-center px-6">

                <div className=" relative w-[120px] h-[120px] flex justify-center items-center bg-red-400 rounded-full">

                    <div className=" w-[90px] h-[90px] rounded-full bg-red-200 flex justify-center items-center">

                        <Image src={BigPlus} alt="Big Plus" width={96} height={96} />

                    </div>

                    <p className="text-white text-[17px] absolute bottom-3 font-semibold">Add New</p>

                </div>

                <div className="flex gap-6 justify-center items-center">

                    <p>1/23</p>

                    <div className=" bg-[#4F4F4F]  rounded-xl flex justify-center items-center w-fit h-fit px-7 py-3">

                        <p className="text-white font-semibold text-[14px]">Next</p>

                    </div>

                </div>

            </div>

        </div>
    )
}



