"use client "

import { useRouter } from "next/navigation"

export default function(){
    const router=useRouter()
    return (<div>
<div className="w-11/12 flex mx-auto items-center justify-center bg-white h-[40px] mt-2">
    <div className="flex gap-3">
        <div className="text-red-600 cursor-pointer" onClick={()=>{router.push("/settings/profileinfo")}}>Profile Info</div>
        <div className="text-gray-400 cursor-pointer" onClick={()=>{router.push("/settings/privacyinfo")}}>Privacy and Others</div>

        
    </div>
</div>

    </div>)
}