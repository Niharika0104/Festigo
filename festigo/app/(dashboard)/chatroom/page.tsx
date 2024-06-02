import { Chatroom } from "@/components/dashboard/chatroom/Chatroom";
import React from "react";

function Page() {
  return (
    <div className="w-full h-[calc(100vh-90px)] px-8 py-8 overflow-hidden bg-[#FEF4F4]">
      <Chatroom />
    </div>
  );
}

export default Page;
