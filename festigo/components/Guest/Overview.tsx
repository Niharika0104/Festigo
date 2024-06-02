
"use client"

import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { topBarData } from "@/constants/GuestConstantData";
import { usePathname } from 'next/navigation';

import OverviewBox from "../common/guest/OverViewBox";

import GuestContainer from "@/components/common/guest/GuestContainer";

import Image from "next/image";

import windowImage from "@/public/assests/icons/window.png"; // icon 1 image 
import barGrpahImage from "@/public/assests/icons/bar_chart_alt.png"; // icon 1 image

import { FaRegUser } from "react-icons/fa6"; // icon 2 image
import { TbUser, TbUsers } from "react-icons/tb"; // icon 2 image
import { BiSolidUserX } from "react-icons/bi"; // cross wala user  // icon 2 image
import { BiUserVoice } from "react-icons/bi"; // icon 2 image

import barBoxImage from "@/public/assests/icons/lineChart.png";

import boxPlsuImage from "@/public/assests/icons/plus_square.png";

import { FaUserCheck } from "react-icons/fa";

import BoxIcon from "@/public/assests/icons/sideBox.png";



import Image1 from "@/public/assests/groupImages/Ellipse 53.png";

import Image2 from "@/public/assests/groupImages/Ellipse 54.png";

import Image3 from "@/public/assests/groupImages/Ellipse 55.png";

import Image4 from "@/public/assests/groupImages/Ellipse 58.png";

import { HiPencil } from "react-icons/hi";


import { useRouter } from "next/navigation";



export default function Overview() {

    const pathname = usePathname();
    console.log(pathname.split('/').pop());

    const router = useRouter();

    const data = [

        {
            title: "name",
            // value: "Harshika Goulik...",
            icon: <FaRegUser />,
            color: "#404040"
        },
        {
            title: "id",
            // value: "AD20152",
            color: "#C7C7C7"
        },
        {
            title: "Email",
            // value: "cute_harshu@gmail...",
            color: "#C7C7C7"
        },
        {
            title: "Due Date",
            // value: "14:0002/21",
            color: "#C7C7C7"
        }
    ];


    const userData = [

        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "cute_harshu@gmail...",
            dueDate: "14:0002/21",
            color: "#828282"
        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "adarshjain3011@gmail.com",
            dueDate: "14:0002/21",
            color: "#828282",

        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "adarshjain3011@gmail.com",
            dueDate: "14:0002/21",
            color: "#828282",

        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "cute_harshu@gmail...",
            dueDate: "14:0002/21",
            color: "#828282"
        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "adarshjain3011@gmail.com",
            dueDate: "14:0002/21",
            color: "#828282",

        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "adarshjain3011@gmail.com",
            dueDate: "14:0002/21",
            color: "#828282",

        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "cute_harshu@gmail...",
            dueDate: "14:0002/21",
            color: "#828282"
        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "adarshjain3011@gmail.com",
            dueDate: "14:0002/21",
            color: "#828282",

        },
        {

            name: "Harshika Goulik...",
            id: "AD20152",
            email: "adarshjain3011@gmail.com",
            dueDate: "14:0002/21",
            color: "#828282",

        }

    ]


    const imagesArray = [Image1, Image2, Image3, Image4];



    return (

        <div className=" relative flex flex-col bg-white mx-4 mr-6 p-6 gap-2 ">

            {/* Section 1 */}

            <div className="flex justify-between border-b-[#C4C4C4] border-b-2  pb-8">
                <OverviewBox
                    num="39"
                    text1="Guest’s Invited"
                    icon1={windowImage}
                    icon2={FaRegUser}
                    color="#828282" // You can pass the appropriate color here
                />
                <OverviewBox
                    num="20"
                    text1="Active Users"
                    icon1={barGrpahImage}
                    icon2={TbUsers}
                    color="#828282" // You can pass the appropriate color here
                />
                <OverviewBox
                    num="5"
                    text1="Inactive Users"
                    icon1={windowImage}
                    icon2={BiSolidUserX}
                    color="#FFD700" // You can pass the appropriate color here
                />
                <OverviewBox
                    num="10"
                    text1="Users with Voice"
                    icon1={barGrpahImage}
                    icon2={BiUserVoice}
                    color="#828282" // You can pass the appropriate color here
                />
            </div>

            {/* Section 2 */}

            <div className=" relative w-full flex items-start gap-12 mt-14 ">

                {/* Section 2.1 */}

                <div className="flex flex-col gap-8">

                    <div className="flex justify-between items-center gap-80">

                        <div className="flex gap-3">

                            <h1 className="text-[#404040] text-[25px]">Invitation history</h1>
                            <Image src={barBoxImage} alt="barbox" className="w-[30px] h-[30px]" />

                        </div>

                        <div className=" p-2 px-5 bg-[#FF0303] rounded-lg flex justify-center items-center gap-6" onClick={()=>{

                            router.push("/guest/addguest")

                        }}>

                            <Image src={boxPlsuImage} alt="boxPuls" />
                            <p className="text-white font-bold text-[14.16px]">Add a guest </p>

                        </div>

                    </div>


                    {/* <div className="flex flex-col">

                        <div className="flex gap-20">

                            {data.map((data, index) => (

                                <div className="flex flex-col gap-7" key={index}>

                                    <div className="flex gap-3">
                                        <TbUser />
                                        <p className="text-[14px] text-black">{data.title}</p>

                                    </div>
                                </div>
                            ))}


                        </div>

                        <div className="flex items-center">

                            {

                                userData.map((data, index) => (

                                    <div className="flex">
                                        <div className="flex justify-center items-center">
                                            <FaUserCheck />
                                            <p className={`text-${data.color} truncate max-w-[150px]`}>{data.name}</p>
                                        </div>
                                        <p className="text-[#C7C7C7] truncate max-w-[150px]">{data.id}</p>
                                        <p className="text-[#C7C7C7] truncate max-w-[150px]">{data.email}</p>
                                        <p className="text-[#C7C7C7] truncate max-w-[150px]">{data.dueDate}</p>
                                    </div>

                                ))
                            }


                        </div>

                    </div> */}


                    <div className="relative flex flex-col w-full">
                        {/* Header row */}
                        <div className="flex pb-4 gap-28">
                            <div className="flex flex-1 items-center">
                                <TbUser />
                                <p className="text-[14px] text-black pl-2">Name</p>
                            </div>
                            <div className="flex flex-1 items-center pl-12">
                                <TbUser />
                                <p className="text-[14px] text-black pl-2">ID</p>
                            </div>
                            <div className="flex flex-1 items-center">
                                <TbUser />
                                <p className="text-[14px] text-black pl-2">Email</p>
                            </div>
                            <div className="flex flex-1 items-center -pl-4">
                                <TbUser />
                                <p className="text-[14px] text-black ">Due Date</p>
                            </div>
                        </div>

                        {/* Data rows */}
                        <div className="flex flex-col overflow-y-auto">
                            {userData.map((data, index) => (
                                <div className="flex items-center py-2 gap-24" key={index}>
                                    <div className="flex flex-1 items-center gap-3">
                                        <FaUserCheck />
                                        <p className={`text-${data.color} truncate max-w-[150px]`}>{data.name}</p>
                                    </div>
                                    <p className="flex flex-1 text-[#C7C7C7] truncate max-w-[200px]">{data.id}</p>
                                    <p className="flex flex-1 text-[#C7C7C7] truncate max-w-[150px]">{data.email}</p>

                                    <div className="flex gap-3">

                                        <p className="flex flex-1 text-[#C7C7C7] truncate max-w-[150px]">{data.dueDate}</p>

                                        <HiPencil></HiPencil>

                                    </div>

                                </div>
                            ))}



                        </div>
                    </div>


                </div>



                {/* recent Invites  */}



                <div className="bg-white shadow-xl py-4 pt-6 px-4 pr-8 rounded-2xl">

                    <div className="flex justify-between items-center">

                        <h2 className="text-[20px] font-bold">Recent Invites</h2>

                        <Image src={BoxIcon} alt="" className="w-6 h-6" />

                    </div>

                    <div className=" relative flex">

                        <div className="flex justify-center items-center mt-4 -space-x-20">

                            {imagesArray.map((image, index) => (
                                <div key={index} className="relative w-[130px] h-[130px] rounded-full overflow-hidden">
                                    <Image
                                        src={image}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>

                            ))}

                        </div>

                        <div className="absolute bottom-[4rem] right-0">

                            +6

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}





