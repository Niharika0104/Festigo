"use client"
import { useState } from 'react';
import InputField from './InputField';
import DropdownMenu from './Dropdown';
import TimePicker from './TimeFields';
const YourComponent = (props:any) => {


  const [name,setName]=useState(props?.name||"");
  const [phoneNumber,setPhoneNumber]=useState(props?.phoneNumber || "");
  const [email,setEmail]=useState(props?.email||"");
  const [serviceType,setServieType]=useState(props?.serviceType)
  
  const options=["Product","Service","Emergency"];
const handleSubmit=()=>{

}
const handleVenueSelect=(value:any)=>{
setServieType(value);
}
 
  return (
    <form onSubmit={handleSubmit} className="w-[400px] mx-auto">
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
      <div className="mb-4">
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
          Order Type 
        </label>
       <DropdownMenu options={options} onSelect={handleVenueSelect} value={"Please select an option"||""}/>
       
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
    >
   Save Changes
    </button>
      </div>
      :
      
      
      <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
   Submit
    </button>}
       
      </div>
    </form>
  );
};

export default YourComponent;
