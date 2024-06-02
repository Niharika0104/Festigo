

import InputField from "./InputField";

import { PiUserCircleDuotone } from "react-icons/pi";

import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";

export default function TopBar() {


    const [textData, setTextData] = useState({ text: "" });
    const userInfo:any=useAuth();
   
    
    function changeHandler(event: any) {

        setTextData({ text: event.target.value });

    }


    return (

        <div>

            <div className="relative w-full flex justify-between items-baseline my-7 px-10 pr-6">

                <div className="flex flex-col pl-8">

                    <p className="text-[#707EAE] text-lg">Hii {userInfo?.user?.username} </p>

                    <h1 className="text-[#2B3674] text-3xl font-bold">

                        Welcome to Festigo!

                    </h1>

                </div>

                <div className="flex gap-6 justify-center items-center pr-5">

                <div className="relative  max-w-xs w-[350px]">
      <input
        type="text"
        placeholder="Enter Text to Search"
        value={textData.text}
        name="text"
        onChange={changeHandler}
        className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg "
        required={false}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <CiSearch className="text-gray-400" />
      </div>
    </div>
                   
                </div>
            </div>


        </div>
    )

}





