"use client"
import { useState } from 'react';
import InputField from './InputField';
import DropdownMenu from './Dropdown';
import TimePicker from './TimeFields';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEvent } from '@/app/context/EventContext';
const YourComponent = (props:any) => {


  const [name,setName]=useState(props?.vendorName||"");
  const [phoneNumber,setPhoneNumber]=useState(props?.phoneNumber || "");
  const [email,setEmail]=useState(props?.email||"");
  const [serviceType,setServieType]=useState(props?.serviceType)
  const event=useEvent();
  const options=["Product","Service","Emergency"];
const handleSubmit=async (email:string)=>{


}
const onSubmit=async ()=>{
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/addVendor`,{
    eventId: event?.event?.id,
    vendorId:email
   
  })
  props?.invoke();
  toast.success("vendor details updated successfully")
}
const onSave=async()=>{
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/vendor/updateVendor`,{
    vendorName:name,
    email:email
  })
  props?.invoke();
  toast.success("vendor details updated successfully")
}

  return (
    <form className="w-[400px] mx-auto">
 <div className="mb-4">
        <label htmlFor="eventTitle" className="block text-gray-700 font-bold mb-2">
       Name
        </label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
     
      <div className="mb-4 ">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        Email
        </label>
        <input
          type="text"
          id="Email"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
       
      </div>
     
     <div className="mb-4 justify-center flex gap-3 mt-4">
      { props?.edit?
      <div>
         <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
   Delete
    </button>
    <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={()=>{onSave()}}
    >
   Save Changes
    </button>
      </div>
      :
      
      
      <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
     onClick={onSubmit}>
   Submit
    </button>}
       
      </div>
    </form>
  );
};

export default YourComponent;
