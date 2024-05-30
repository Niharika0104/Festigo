"use client";

import { useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import { CiSearch } from "react-icons/ci";
import { PiUserCircleDuotone, PiUsersDuotone } from "react-icons/pi";
import PlusIcon from "@/public/assests/icons/PulsIcon.png";
import { FaArrowRightLong } from "react-icons/fa6";
import UserImage from "@/public/assests/icons/userImage.png";
import { CiLocationOn } from "react-icons/ci";
import MessageIcon from "@/public/assests/icons/messageIcon.png";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#FEF4F4]">
      <div className="bg-white w-1/6 h-screen sticky top-0 overflow-hidden ">
        <Sidebar />
      </div>
      <div className="w-5/6 ">
        {children}
      </div>
    </div>
  );
}




