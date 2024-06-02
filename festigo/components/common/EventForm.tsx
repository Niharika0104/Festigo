"use client"
import { useEffect, useState } from 'react';
import DropdownMenu from './Dropdown';
import axios from 'axios';
import TimePicker from './TimeFields';
import { useAuth } from '@/app/context/AuthContext';
const YourComponent = (props:any) => {
 const userInfo=useAuth();
 console.log(props)
  const options=["Wedding","Birthday","Lunch Party","Dance party"]
 const [venueOptions,setVenueOptions]=useState([]);
  const [eventType,setEventType]=useState(props?.eventType||"Birthday");
  const [venue,setVenue]=useState(props?.venue||"");
  const [toTime,settoTime]=useState(props?.toTime);
  const [title,setTitle]=useState(props?.title||"");
  const closeModal=props?.CloseModal;
  const [fromTime,setFromTime]=useState(props?.fromTime);
  const [startDate,setStartDate]=useState(props?.startDate||"");
  const [endDate,setEndDate]=useState(props?.endDate||"");

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/venue/allvenues`);
        console.log(response.data);
        setVenueOptions(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    fromDuration: '',
    toDuration: '',
    eventType: '',
    venue: '',
    eventTitle: '',
  });

 
const handleSelect=(value:string)=>{
setEventType(value);
}
const handleVenueSelect=(value:string)=>{
  setVenue(value)
}
const handleToTimeChange=(value:string)=>{
settoTime(value);
}
const handleFromTimeChange=(value:string)=>{
  setFromTime(value);
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/createEvent`, {
      eventName: title,
      startDateTime: new Date(startDate+"T"+fromTime),
      endDateTime: new Date(endDate+"T"+toTime),
      hostId: userInfo?.user?.username, 
      venueId: venue,
    });
    closeModal();
  };
const saveChanges=async(e:any)=>{
  e.preventDefault();
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/editEvent`, {
    eventName: title,
    startDateTime: new Date(startDate+"T"+fromTime),
    endDateTime: new Date(endDate+"T"+toTime),
   eventId:props?.eventId,
    venueId: venue,
  });
  closeModal();
}
  return (
    <form  className="w-full max-w-lg pr-10">
 <div className="mb-4">
        <label htmlFor="eventTitle" className="block text-gray-700 font-bold mb-2">
          Event Title
        </label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
     <div className='flex justify-between gap-10'>
      <div className="mb-4 ">
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
          Event Type
        </label>
        <select  onChange={(e)=>setVenue(e.target.value)} className='shadow  border rounded  py-2 mr-12 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        value={eventType}
        >
        <option>{"select an option"}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
       </select>
       
      </div>
      <div className="mb-4">
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
          Venue 
        </label>
       <select  onChange={(e)=>setVenue(e.target.value)} className='shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
       value={venue}>
        <option>select an option</option>
        {venueOptions.map((item) => (
          <option key={item.id} value={item.id}>
            {item.venueName}
          </option>
        ))}
       </select>
       
      </div>
      </div>
        <div className='flex justify-between gap-8'>
       
      <div className="mb-4 ">
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
         Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e)=>{setStartDate(e.target.value)}}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">
          End Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={endDate}
          onChange={(e)=>{setEndDate(e.target.value)}}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      </div>
      <div className='flex justify-between gap-3'>
        
      <div className="mb-4">
        <label htmlFor="fromDuration" className="block text-gray-700 font-bold mb-2">
        From
        </label>
        <TimePicker handleChange={handleFromTimeChange} value={fromTime}/>
      </div>

   
      <div className="mb-4">
        <label htmlFor="toDuration" className="block text-gray-700 font-bold mb-2">
        To
        </label>
        <TimePicker handleChange={handleToTimeChange} value={toTime}/>
      </div>

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
   onClick={saveChanges} >
   Save Changes
    </button>
      </div>
      :
      
      
      <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    onClick={handleSubmit}>
   Submit
    </button>}
       
      </div>
    </form>
  );
};

export default YourComponent;
