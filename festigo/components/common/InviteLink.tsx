"use client"

import toast from "react-hot-toast";

const YourComponent = (props:any) => {
  const sendInvitation = () => {
    const email = "user@example.com"; 
    console.log("Sending invitation to:", email);
   toast.success("Ivvite link sent successfully")
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-center">
        <p className="text-gray-700">Oops! User with email doesn't exist.</p>
        <p className="text-gray-700">Send an invitation link to join the platform.</p>
        <button
          onClick={sendInvitation}
          className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Invitation
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
