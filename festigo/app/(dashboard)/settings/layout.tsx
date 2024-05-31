"use client"
import SettingTopBar from "@/components/common/SettingTopBar";
import { ReactNode } from "react";

export default function({children}:Readonly<{children:React.ReactNode}>){
    return (<>
    <SettingTopBar/>
    {children}
    </>)
}