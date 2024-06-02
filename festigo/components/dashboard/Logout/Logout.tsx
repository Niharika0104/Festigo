"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export function Logout({ setShowLogout }: any) {
  const router = useRouter();
  // logout handler
  async function logoutHandler() {
    try {
      await axios.post("/api/auth/logout");

      toast.success("Logout Successfully");
      router.push("/");
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      setShowLogout(false);
    }
  }

  return (
    <div className="w-screen h-screen absolute top-0 z-[100] right-0 left-0 bg-white/[60%] flex justify-center items-center">
      <div className="bg-white gap-8 p-7 z-[100] shadow-2xl items-center rounded-xl flex flex-col">
        <div>
          <p className="text-black text-2xl font-bold">
            Are you sure you want to log out??
          </p>
        </div>

        <div className="flex w-[80%] font-semibold gap-5">
          <button
            onClick={logoutHandler}
            className="bg-[#FF0909] border-[1px] border-[#FF0909] hover:bg-white hover:text-[#FF0909] w-full text-white rounded-sm"
          >
            Yes
          </button>
          <button
            onClick={() => setShowLogout(false)}
            className="border-[1px] transition-all duration-300 ease-in-out w-full py-2 text-[#FF0909] border-[#FF0909] rounded-sm hover:bg-[#FF0909] hover:text-white"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
