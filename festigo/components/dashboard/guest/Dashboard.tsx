
"use client"

import GuestContainer from "@/components/common/guest/GuestContainer";

import CoolImage from "@/public/assests/icons/coolicon.png";

import dualUser from "@/public/assests/icons/dualUser.png";

import TrainTicket from "@/public/assests/icons/train-ticket.png";

import { useRouter } from "next/navigation";

export default function DashBoardPage() {

    const router = useRouter();

    return (


        <div className="relative">

            {/* section 1  */}

            <div className=" flex flex-col h-fit justify-center items-center p-7 gap-9 w-fit ml-16 px-40 pr-48 bg-white mt-6">

                <div className="flex flex-col justify-center items-center gap-3">

                    <p className="text-[18px] text-[#343434]">Welcome to our most curated</p>
                    <h1 className="text-[24px] text-[#790000]">VISITOR MANAGEMENT SYSTEM</h1>
                    <p className="text-[16px] text-[#BDBDBD]">Select the options of  as per need</p>

                </div>

                {/* section 2 */}

                <div className=" relative flex flex-col justify-center items-center gap-9 mt-3">

                    <div className=" relative  flex justify-center items-center gap-32">

                        <GuestContainer

                            image={dualUser}
                            textSize="18px"
                            imageWidth="23.33px"
                            imageHeight="37.33px"
                            text="Guest's Overview"
                            onClick={() => {

                                router.push("/guest/overview")
                            }}

                        >

                        </GuestContainer>

                        <GuestContainer

                            image={CoolImage}
                            textSize="18px"
                            imageWidth="40.83px"
                            imageHeight="36.75px"
                            text="Guest's Listing"
                            onClick={() => {

                                router.push("/guest/listing")
                            }}
                            
                            >

                        </GuestContainer>


                    </div>

                    <GuestContainer

                        image={TrainTicket}
                        textSize="18px"
                        imageHeight="70px"
                        imageWidth="70px"
                        text="Seating Arrangement"
                        onClick={() => {

                            router.push("/guest/SeatingArrangement")
                        }}
                        
                        >

                    </GuestContainer>

                </div>

            </div>


        </div>

    )
}



