"use client";

import Image from "next/image";
import bgImage from "/public/assets/images/chat-bg.jpeg";
import bgImage2 from "/public/assets/images/main-page-hero.jpg";
import messageImg from "/public/assets/images/message.png";
import { BsThreeDots } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdPhotoLibrary } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";
import { formatTime } from "@/Utils/date";
import { io, Socket } from "socket.io-client";
import { useEvent } from "@/app/context/EventContext";
import toast from "react-hot-toast";

const addOptions = [
  {
    icon: <IoDocumentTextSharp />,
    label: "Document",
  },
  {
    icon: <MdPhotoLibrary />,
    label: "Photos and Videos",
  },
  {
    icon: <FaCamera />,
    label: "Camera",
  },
  {
    icon: <FaUserAlt />,
    label: "Contacts",
  },
];

const moreOptions = [
  "Contact info",
  "Select messages",
  "Mute Notifications",
  "Clear Chat",
  "Delete Chat",
  "Close Chat",
];

export function Conversation({ conversation }: any) {
  const { user }: any = useAuth();
  const { event }: any = useEvent();
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [receiver, setReceiver] = useState("");
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState<string>("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef<Socket | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // SocketIo implementation
  useEffect(() => {
    if (!user) return;

    socket.current = io("http://localhost:3001");

    socket.current.emit("add-user", user.username);

    socket.current.on("get-active-users", (activeUsers) => {
      console.log("Active users:", activeUsers);
      setOnlineUsers(activeUsers);
    });

    socket.current.on("recieve-message", (data) => {
      setChats((prevChats) => [...prevChats, data]);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [user]);

  // Set receiver
  useEffect(() => {
    if (conversation && user) {
      const newRec =
        conversation.senderId === user.username
          ? conversation.receiverId
          : conversation.senderId;

      setReceiver(newRec);
    }
  }, [conversation, user]);

  // Fetch old messages
  async function fetchUserChat() {
    try {
      const res = await axios.post("/api/chats/chatsbyuser", conversation);
      setChats(res.data.data);
    } catch (error) {
      setChats([]);
      console.log(error);
    }
  }
  useEffect(() => {
    if (conversation && user) fetchUserChat();
  }, [conversation, user]);

  // Function for sending message
  const sendMessageHandler = async (e: any) => {
    if (receiver && user) {
      e.preventDefault();

      if (message.trim().length <= 0) {
        return;
      }

      const payload = {
        id: Date.now().toString(),
        message,
        senderId: user.username,
        receiverId: receiver,
        timestamp: new Date().toISOString(),
        isEdited: false,
        isDeleted: false,
        eventId: conversation.eventId,
        event: event.eventName,
      };

      // Store message in database
      try {
        const result = await axios.post("/api/chats/sendMessage", payload);

        // Send message to socket server
        socket.current?.emit("send-message", payload);

        setChats([...chats, result.data.data]);
        setMessage("");
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      toast.error("Please select user to send message");
    }
  };

  // Scroll to the last message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="w-full h-full relative">
      {/* Navbar of chat section */}
      <div className="w-full relative flex justify-between items-center bg-white">
        {/* More options */}
        {showMoreOptions && (
          <div className="flex flex-col right-2 z-20 top-[40px] absolute bg-white border-[#9C9C9C] border-[1px] shadow-md shadow-black/[25%] justify-normal items-start p-2">
            {moreOptions.map((option, index) => {
              return (
                <div
                  key={index}
                  className="w-full p-2 items-center flex justify-center cursor-pointer hover:bg-gradient-to-b from-[white] to-[#E6E6E6]"
                >
                  <span>{option}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* User name */}
        <div className="w-full h-[60px] py-1 px-2">
          {conversation && (
            <div className="flex justify-start gap-2 items-center">
              {/* profile-image */}
              <div className="rounded-full bg-gray-300 overflow-hidden relative h-[50px] w-[50px]">
                <Image src={""} alt="profile" fill className="object-cover" />
              </div>

              {/* name | online */}
              <div className="flex flex-col justify-start items-start">
                {/* name */}
                <span className="text-lg capitalize font-medium">
                  {receiver}
                </span>
                {/* online */}
                <span className="text-[#747881] text-xs">
                  {onlineUsers.some((user: any) => user.userId === receiver) ? (
                    <span>Online</span>
                  ) : (
                    <span>Offline</span>
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
        {/* more options dots */}
        <div>
          <button
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            className="p-2"
          >
            <BsThreeDots fontSize={25} />
          </button>
        </div>
      </div>

      {/* Middle part for chat */}
      <div className=" h-[82%] overflow-hidden z-10 w-full relative">
        <>
          {conversation ? (
            // If conversation id found
            <div className="z-[100] w-full overflow-y-auto scroll-smooth flex flex-col gap-2 h-full py-5 px-2">
              {chats &&
                chats?.map((message: any) => {
                  return (
                    <div
                      ref={scrollRef}
                      key={message.id}
                      className={`flex w-full h-auto flex-col ${
                        message.senderId === user.username
                          ? "justify-end items-end"
                          : "justify-start  items-start"
                      }`}
                    >
                      {/* Message */}
                      <span
                        className={` max-w-[400px] break-words h-auto  ${
                          message.senderId === user.username
                            ? "bg-[#e47d7d]"
                            : "bg-[#E9EAED]"
                        } p-2 rounded-lg`}
                      >
                        {message.message}
                      </span>

                      {/* Time and tick */}
                      <div
                        className={` flex gap-1 pl-1 justify-center items-center`}
                      >
                        <span
                          className={` text-[#005FFF]  ${
                            message.senderId === user.username
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          <LiaCheckDoubleSolid fontSize={15} />
                        </span>
                        <span className="text-[#747881] text-[10px]">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            // If conversation id not found
            <div className="w-full h-full flex justify-center items-center">
              <div className="bg-[#FFA1A1] z-20 gap-3 p-5 rounded-[50px] flex justify-center items-center">
                {/* Image */}
                <div className="w-24 h-24 relative">
                  <Image src={messageImg} alt="message" fill />
                </div>
                <div className="max-w-[150px] ">
                  <span className="font-medium">
                    Click on a profile to{" "}
                    <span className="text-white">
                      GETTING STARTED WITH CHATS
                    </span>{" "}
                    in our Chat Rooms
                  </span>
                </div>
              </div>
            </div>
          )}
        </>

        {/* Chat bg Image */}
        <div className="absolute -z-10 top-0 left-0  w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={receiver ? bgImage : bgImage2}
              alt="Bg-image"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white/[70%] w-full h-full top-0 z-0 left-0 absolute"></div>
        </div>
      </div>

      {/* Footer of chat section */}
      <div className="flex relative shrink-0 px-2 bg-white justify-between items-center gap-3">
        {/* Add Options */}
        {showAddOptions && (
          <div className="flex flex-col z-20 bottom-[60px] absolute bg-white rounded-2xl border-[#9C9C9C] border-[1px] shadow-md shadow-black/[25%] justify-normal items-start p-1">
            {addOptions.map((option, index) => {
              return (
                <div
                  key={index}
                  className="flex cursor-pointer justify-start gap-1 w-full p-2 rounded-full items-center hover:bg-gradient-to-r from-[white] to-[#FFD2D2]"
                >
                  <span className="text-blue-500 text-lg">{option.icon}</span>
                  <span>{option.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Add button */}
        <div>
          <button
            onClick={() => setShowAddOptions(!showAddOptions)}
            className="text-[#747881]"
          >
            {showAddOptions ? (
              <IoMdCloseCircleOutline fontSize={50} />
            ) : (
              <MdAddCircleOutline fontSize={50} />
            )}
          </button>
        </div>

        {/* Input field */}
        <div className="w-full flex justify-center items-center border-[#F49595] border-[0.5px] rounded-xl">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" w-full outline-none p-2 rounded-xl"
            placeholder="Type your message"
          />
          <div>
            <button className="text-[#747881] mt-2">
              <MdOutlineEmojiEmotions fontSize={30} />
            </button>
          </div>
        </div>

        {/* Send button */}
        <div>
          <button
            onClick={sendMessageHandler}
            className="text-white rounded-full bg-[#FF0000]/[70%] p-3"
          >
            <IoMdSend fontSize={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
