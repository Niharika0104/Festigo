
"use client"

import { IoMdArrowBack } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import Image from 'next/image';
import dummyUser from "@/public/assests/Ellipse 20.png";

import busImage from "@/public/assests/busIcon.png";

import { useRouter } from "next/navigation";

export default function AddGuest() {

    const router = useRouter();


    return (

        <div className="bg-pink-50 flex items-center justify-center">

            <div className="bg-white p-6 rounded-2xl  border shadow-xl relative flex flex-col mt-6">


                <div className="flex gap-96 justify-between">

                    <button className=" rounded-full flex justify-center items-center border-2 border-[#FF2727] p-2" onClick={()=>{

                        router.back();

                    }}>

                        <IoMdArrowBack size={24} className="text-red-500" />

                    </button>

                    <button className=" flex items-center text-red-500 pl-20">

                        <IoPencil size={20} className="text-[#FF2727]" />
                        <span className="ml-1 text-[14px] text-[#FF2E2E]">Edit</span>

                    </button>

                </div>


                <div className="flex flex-col justify-center items-center">


                    <div className="flex justify-center items-center mt-4 gap-5 ">

                        <Image src={dummyUser} alt="User" className="rounded-full" width={149} height={149} />

                        <div className="flex flex-col gap-4">

                            <h2 className=" font-bold mt-2 text-[#434343] text-[30px] ">Tanya Edwards</h2>
                            <p className=" text-[#434343] text-[14px]">(239) 555-0108</p>

                        </div>

                    </div>

                    <div className=" relative mt-10 space-y-4 flex flex-col">

                        <div className="flex justify-between items-center gap-44">
                            <span className="text-[#434343] text-[14px]">Email</span>
                            <span className="text-[14px] text-[#434343]">tanya.edwards@gmail.com</span>

                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[#434343] text-[14px]">Event</span>
                            <span className="text-[14px] text-[#434343]">Girl's Night Out</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[#434343] text-[14px]">Address</span>
                            <span className="text-[14px] text-[#434343]">6391 Elgin St Celina, Delaware</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[#434343] text-[14px]">RSVP ID</span>
                            <span className="text-[14px] text-[#434343] font-bold">233456678</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[#434343] text-[14px]">D.O.B</span>
                            <span className="text-[14px] text-[#434343]">28/02/1991</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[#434343] text-[14px]">Gender</span>
                            <span className="text-[14px] text-[#434343]">Female</span>
                        </div>
                    </div>


                    <button className=" mt-9 bg-[#FF0909] text-white py-2 rounded-md flex items-center justify-center w-fit px-9 gap-3 mx-auto">

                        <Image src={busImage} alt="Add to Guest List" width={24} height={24} className="" />
                        <p className="text-[16px] text-[#FFFFFF]">Add to Guest List</p>

                    </button>

                </div>

            </div>
        </div>
    );
}


