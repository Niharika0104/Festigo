import { topBarData } from "@/constants/GuestConstantData";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function GuestTopBar() {

    const pathname = usePathname();
    const [currentState, setCurrentState] = useState('');

    const router = useRouter();

    useEffect(() => {

        setCurrentState(pathname.split('/').pop());
        
    }, [pathname]);

    return (

        <div className="w-full">

            <div className="flex gap-8 items-center bg-white p-4 px-11 mx-4 mt-6 mb-1 mr-7">

                <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer rounded-full bg-red-500" onClick={()=>{

                    router.back();

                }}>

                    <MdKeyboardArrowLeft size={50} className="text-white"/>

                </div>

                <div className="flex items-baseline justify-center gap-28 ">

                    {topBarData.map((data, index) => (
                        <div
                            key={index}
                            className={currentState?.toLowerCase() === data.text.toLowerCase() ? "text-[30px] font-bold text-[#9F0606] underline" : "text-[#6F6F6F] text-[20px]"}
                            onClick={() => setCurrentState(data.text.toLowerCase())}
                        >
                            <Link href={`/${data.link}`}>
                                <p className="text">{(data.text).replace(/\s+/g, "")}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
