"use client";

import FestigoLogo from "@/public/assests/icons/FestigoLogo.png";

import Logo from "@/public/assests/logo.png";

import { SideBarData } from "@/constants/SideBarData";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useState } from "react";

import Link from "next/link";
import { Logout } from "../dashboard/Logout/Logout";

export default function Sidebar() {
  const [currentState, setCurrentState] = useState(SideBarData[0].title);
  const [showLogout, setShowLogout] = useState(false);

  const router = useRouter();

  return (
    <div className=" max-w-maxContent min-h-max overflow-hidden">
      {showLogout && <Logout setShowLogout={setShowLogout} />}
      {/* top section  */}
      <div className=" relative flex flex-col w-[290px] gap-4 h-[832px]">
        <div className="relative flex items-center gap-3 p-5 shadow-md ">
          {/* logo image   7 7 */}

          <div className="relative h-[90px] w-[90px]">
            <Image src={Logo} alt="" className="w-full h-full bg-cover" />
          </div>

          <div className="relative max-w-maxContent flex flex-col gap-2">
            {/* festigo image  */}

            <div className="realtive w-[100px] h-[30px]">
              <Image
                src={FestigoLogo}
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>

            <div className="flex items-center">
              <span className="bg-yellow-300 p-1 rounded-md text-sm shadow-2xl translate-x-1">
                DASH
              </span>

              <p className="text-[#FF0000] font-bold"> BOARD </p>
            </div>
          </div>
        </div>

        {/* bottom section  */}
        <div className="flex w-full lg:w-auto flex-col gap-3 p-3 shadow-2xl pt-5">
          {SideBarData.map((data, index) =>
            data.title === "Log Out" ? (
              <button
                key={index}
                onClick={() => {
                  setShowLogout(true);
                  setCurrentState(data.title);
                }}
                className={`flex gap-4 items-center w-full px-3 py-2 rounded-lg cursor-pointer transition-all
                          ${
                            data.title === currentState
                              ? "bg-[#FF0909] text-white font-semibold"
                              : "bg-white text-gray-700 hover:bg-gray-100"
                          }`}
              >
                <div className="w-6 h-6 flex justify-center items-center">
                  {data.icon}
                </div>
                <p className="">{data.title}</p>
              </button>
            ) : (
              <Link
                key={index}
                href={data.link || "/"}
                className={`flex gap-4 items-center w-full px-3 py-2 rounded-lg cursor-pointer transition-all

                          ${
                            data.title === currentState
                              ? "bg-[#FF0909] text-white font-semibold"
                              : "bg-white text-gray-700 hover:bg-gray-100"
                          }`}
              >
                <div className="w-6 h-6 flex justify-center items-center">
                  {data.icon}
                </div>

                {data.title === "Dashboard" ? (
                  <div className="flex items-center pr-7">
                    <span className="bg-yellow-300 p-1 text-black font-semibold rounded-md text-sm shadow-2xl translate-x-2">
                      DASH
                    </span>

                    <p className="text-[#A3AED0] font-bold ml-1 lowercase">
                      BOARD
                    </p>
                  </div>
                ) : (
                  <p className="">{data.title}</p>
                )}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
