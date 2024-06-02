"use client"

import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { seats } from '@/constants/GuestConstantData'; // Adjust the import path as necessary

import Image from 'next/image';

export default function SittingArrange() {
    const [isSeatDropdownOpen, setIsSeatDropdownOpen] = useState(false);
    const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [selectedSeat, setSelectedSeat] = useState<{ label: string, image: string, width: number, height: number } | null>(null);

    const events = [
        "Event 1",
        "Event 2",
        "Event 3"
    ];

    const toggleSeatDropdown = () => {
        setIsSeatDropdownOpen(!isSeatDropdownOpen);
    };

    const toggleEventDropdown = () => {
        setIsEventDropdownOpen(!isEventDropdownOpen);
    };

    const handleOutsideClick = (event: any) => {
        if (!event.target.closest('#seatDropdownButton') && !event.target.closest('#seatDropdownMenu')) {
            setIsSeatDropdownOpen(false);
        }
        if (!event.target.closest('#eventDropdownButton') && !event.target.closest('#eventDropdownMenu')) {
            setIsEventDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleEventSelect = (event: string) => {
        setSelectedEvent(event);
        setIsEventDropdownOpen(false);
    };

    const handleSeatSelect = (seat: { label: string, image: string, width: number, height: number }) => {
        setSelectedSeat(seat);
        setIsSeatDropdownOpen(false);
    };

    const getSelectedSeatClass = () => {
        if (selectedSeat?.label === "50 Seats") {
            return "w-1/2 h-auto";
        } else {
            return "w-full h-auto";
        }
    };

    return (
        <div className="bg-pink-50 flex flex-col gap-5 ml-6">

            <div className="w-full">
                
                <div className="relative bg-white w-full flex flex-col justify-between ">
                    <div
                        id="eventDropdownButton"
                        className="w-full text-left px-4 py-1 bg-white border border-gray-300 rounded-md flex justify-between items-center"
                        onClick={toggleEventDropdown}
                    >
                        {selectedEvent ? selectedEvent : "Select Event(s)"}
                        <IoIosArrowDown className="" size={50} />
                    </div>
                    {isEventDropdownOpen && (
                        <div id="eventDropdownMenu" className="mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                            <ul>
                                {events.map((event, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleEventSelect(event)}
                                    >
                                        {event}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </div>
            <div className="w-[50%] mx-auto">
                <div className="relative w-full">
                    <button
                        id="seatDropdownButton"
                        className=" text-left px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-md flex justify-between items-center"
                        onClick={toggleSeatDropdown}
                    >
                        {selectedSeat ? selectedSeat.label : "Select Seat(s)"}
                        <IoIosArrowDown className="w-4 h-4 ml-2" />
                    </button>
                    {isSeatDropdownOpen && (
                        <div id="seatDropdownMenu" className="mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                            <ul>
                                {seats.map((seat:any, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSeatSelect(seat)}
                                    >
                                        {seat.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-5 flex justify-center mx-auto overflow-y-auto w-full">
                {selectedSeat && (
                    <Image 
                        src={selectedSeat.image} 
                        alt={selectedSeat.label} 
                        width={selectedSeat.width} 
                        height={selectedSeat.height}
                        className={getSelectedSeatClass()}
                    />
                )}
            </div>

        </div>
    );
}



