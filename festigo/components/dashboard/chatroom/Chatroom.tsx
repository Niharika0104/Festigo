"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { Conversation } from "./Conversation";
import { useAuth } from "@/app/context/AuthContext";
import { useEvent } from "@/app/context/EventContext";
import { formatTime } from "../../../Utils/date";

export function Chatroom() {
  const [data, setData] = useState(null);
  const [conversation, setConversation] = useState(null);

  const { user }: any = useAuth();
  const { event }: any = useEvent();

  async function fetchChatParticipants() {
    try {
      const res = await axios.get(
        `/api/chats/chatparticipants?username=${user.username}&eventid=${event.id}`
      );
      setData(res.data.data);
      console.log("res: ", res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user && event) {
      fetchChatParticipants();
    }
  }, [user, event]);

  return (
    <div className="h-full flex justify-start  items-start gap-8 w-11/12 mx-auto mb-12">
      {/* chat-lists */}
      <div className="w-[350px] border-r-[1px] border-[#DBDDE1] shrink-0 h-full bg-white px-2 flex flex-col gap-5 py-8">
        {/* Search bar */}
        <div className="w-full rounded-full flex justify-center items-center gap-1 text-[#747881] border-[#DBDDE1] bg-white border-[1px] p-2">
          {/* search icon */}
          <span className="cursor-pointer pl-2">
            <IoMdSearch fontSize={24} />
          </span>
          {/* input */}
          <input
            type="text"
            className="w-full h-full outline-none "
            placeholder="Search"
          />
          {/* cross icon */}
          <span className="cursor-pointer">
            <RxCross2 fontSize={24} />
          </span>
        </div>

        {/* chat-lists */}
        <div className="flex flex-col overflow-y-auto p-4 w-full gap-2 justify-start items-start">
          {data &&
            data.map((chat) => {
              return (
                <button
                  className="w-full"
                  key={chat.id}
                  onClick={() => {
                    setConversation(chat);
                  }}
                >
                  <div
                    className={`w-full flex justify-between items-start ${
                      conversation?.id === chat.id ? "bg-[#D9D9D9]" : "bg-white"
                    } rounded-xl text-[#080707]  hover:bg-[#D9D9D9]/[30%]  p-3`}
                  >
                    {/* profile | name | chat  */}
                    <div className="flex justify-center items-center gap-2">
                      {/* profile image */}
                      <div>
                        <div className="bg-black relative h-11 w-11 rounded-full">
                          {chat.image && (
                            <Image src={chat.image} alt="profile" fill />
                          )}
                        </div>
                      </div>

                      {/* user | chat */}
                      <div className=" flex flex-col justify-start items-start">
                        {/* name */}
                        <div>
                          <p className="text-sm capitalize font-medium ">
                            {chat.senderId === user.username
                              ? chat.receiverId
                              : chat.senderId}
                          </p>
                        </div>
                        {/* last message */}
                        <div>
                          <p className="text-xs">
                            {chat.message.length > 20
                              ? `${chat.message.slice(0, 20)}...`
                              : chat.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* last message time | more options */}
                    <div className="flex flex-col justify-end gap-2 items-end">
                      {/* more options */}
                      <div className="text-[#747881] rounded-full cursor-pointer">
                        <BiDotsVerticalRounded fontSize={16} />
                      </div>

                      {/* last message time */}
                      <div>
                        <p className="text-[10px]">
                          {formatTime(chat.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
      </div>

      {/* chats */}
      <Conversation conversation={conversation} />
    </div>
  );
}
