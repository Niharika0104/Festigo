"use client";
import React, { useEffect, useState } from 'react';
import Dropdown from '@/components/common/Dropdown';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '@/app/context/AuthContext';
function PrivacyInfo() {
    const userInfo:any=useAuth();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState(userInfo?.user?.username);
    const [email, setEmail] = useState("");
    const [attendedEvents, setattendedEvents] = useState("");
    const [gender, setGender] = useState("");
    const [location, setlocation] = useState("");
    const [birthday, setBirthday] = useState("");
    const [currentpassword, setCurrentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [events,setEvents]=useState([])
    // this will be set from the event context
    const [currentEvent, setCurrentEvent] = useState("");
   
    useEffect(()=>{
       
        const fetchData=async ()=>{
          const response=await  axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/allevents?username=${username}`);
          const data=response.data.data;
          console.log(data)
          setEvents(data);
        }
        const getProfile=async()=>{
            const response=await  axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/getProfile`,
                {username:username}
            );
            const data=response.data.data;
            setFirstname(data?.firstname || "");
            setUsername(data?.username || "");

            setLastname(data?.lastname || "");
            setEmail(data?.email || "");
            setGender(data?.gender || "");
            setlocation(data?.location || "");
            setBirthday(data?.birthday ? new Date(data.birthday).toISOString().split('T')[0] : ""); // Format birthday to YYYY-MM-DD
        }
        fetchData();
        getProfile();
    },[username])
 
    const onSave = async () => {
        try {
            const response = await axios.post('/api/profile/updateprofile', {
                username,
                firstname,
                lastname,
                email,
                location,
                gender,
                birthday: new Date(birthday)
            });
            if (response.status === 200) {
                toast.success("User updated successfully");
            } else {
                toast.error("Failed to update user");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("An error occurred while updating the user");
        }
    };
    const handleAttendedEvents = (value: string) => {
        setattendedEvents(value);
    };

    const handleFirstNameChange = (e: any) => {
        setFirstname(e.target.value);
    };
    const handleLastNameChange = (e: any) => {
        setLastname(e.target.value);
    };

    return (
        <div className='w-11/12 mx-auto bg-white h-full'>

            <div className='flex justify-between h-[100px] mx-3 '>
                {/* routing info */}
                <div className='flex gap-3'>
                    <p>Settings</p>
                    <p>{"<"}</p>
                    <p>Profile Info</p>
                </div>
                {/* routing heading */}
                <div className='mt-4 text-black text-2xl'>Profile Info</div>

                {/* profile photo */}
                <div>profile photo</div>

            </div>
            {/* input fields */}
            <div className=' bg-[#F7F7F7] h-min-max'>
                <div className='flex justify-between mx-3 p-6'>
                    <div className='flex flex-col gap-2 '>
                        <label>FIRST NAME<span className='text-red-600'>*</span></label>
                        <input onChange={handleFirstNameChange} type='text'
                            value={firstname}
                            required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label>LAST NAME<span className='text-red-600'>*</span></label>
                        <input onChange={handleLastNameChange} type='text'
                            value={lastname}
                            required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5' />
                    </div>

                </div>
                <div className='flex justify-between mx-3 p-6'>
                    <div className='flex flex-col gap-2 '>
                        <label>USERNAME<span className='text-red-600'>*</span></label>
                        <input onChange={(e) => { setUsername(e.target.value) }} type='text'
                            value={username}
                            required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <div className='flex justify-between'>
                            <label>EMAIL<span className='text-red-600'>*</span></label>
                            <div className='text-red-600'>verify email</div>
                        </div>
                        <input onChange={(e) => { setEmail(e.target.value) }} type='text'
                            value={email}
                            required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5' />
                    </div>

                </div>
                <div className='flex justify-between mx-3 p-6'>
                    <div className='flex flex-col gap-2 '>

                        <label>BIRTHDAY</label>
                        <input onChange={(e) => { setBirthday(e.target.value) }} type='date'
                            value={birthday}
                            required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] p-4 px-5' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label>LOCATION<span className='text-red-600'>*</span></label>
                        <input onChange={(e) => { setlocation(e.target.value) }} type='text'
                            value={location}
                            required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5' />
                    </div>
                </div>
                <div className='flex justify-between mx-3 p-6'>
                    <div className='flex flex-col gap-2'>
                        <label>GENDER</label>
                        <select className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-4 focus:border-0' value={gender} onChange={(e) => { setGender(e.target.value) }}>
                            <option value="-1" selected>select an option</option>
                            <option value="female">Female</option>

                            <option value="male">Male</option>

                            <option value="notSure">prefer not to say</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>SWITCH EVENT</label>
                        <select name="" id="" className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-4 focus:border-0' value={currentEvent}
                            onChange={(e: any) => { setCurrentEvent(e.target.value) }}>
                            <option value="-1" selected>select event</option>
                         {events?.map((item:any,idx)=>{
                            return(<option value={item?.id} key={item?.id}>{item?.eventName}</option>)
})}
                        </select>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#ff0000] px-4 py-3 rounded-3xl text-white' onClick={onSave}>Save Changes</button>
                </div>
                {/* password reset section */}
                <div className='border border-gray-400 h-0 w-11/12  mx-auto mt-8'></div>
                <div className='flex justify-center text-gray-500 text-2xl mt-8'>Change Password</div>
                <div className='mx-3 p-6'>
                    <div className='flex flex-col gap-2 '>
                        <label> CURRENT PASSWORD<span className='text-red-600'>*</span></label>
                        <input onChange={(e) => { setCurrentPassword(e.target.value) }} type='password'
                            value={currentpassword}
                            required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5' />
                    </div>

                    <div className='flex justify-between mt-8 '>
                        <div className='flex flex-col gap-2 '>
                            <label>NEW PASSWORD<span className='text-red-600'>*</span></label>
                            <input onChange={(e) => { setNewPassword(e.target.value) }} type='password'
                                value={newPassword}
                                required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5' />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label>CONFIRM PASSWORD<span className='text-red-600'>*</span></label>
                            <input onChange={(e) => { setConfirmPassword(e.target.value) }} type='password'
                                value={confirmPassword}
                                required={true} className='bg-white h-[46px] border border-[#E4E7EB] w-[470px] px-5 ' />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <button className='bg-[#ff0000] px-4 py-3 rounded-3xl text-white'>Save Changes</button>
                    </div>
                </div>
                <div className='flex justify-center uppercase my-5 text-lg '>you will be asked to log in again with new password after you save your changes</div>
            </div>

        </div>



    );
}

export default PrivacyInfo;
