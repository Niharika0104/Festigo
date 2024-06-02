"use client"

import React, { useState } from 'react'
import image1 from "@/public/assets/images/product_requests.webp";
import image2 from "@/public/assets/images/service_requests.webp";
import { BiEdit } from 'react-icons/bi';
import image3 from "@/public/assets/images/emergency_service_reqeusts.webp";
import image4 from "@/public/assets/images/transactions_reqeusts.webp";
import VendorForm from "@/components/common/VendorForm"
const imageUrl="https://s3-alpha-sig.figma.com/img/8971/7a1b/12c69d0d7b4e6a2c28958d2218e7fc80?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0xXS~jglNqKoXosgDE1ZR5GGf5d9EMMyFvHlTfJ~JdpaERaIbIeTUe8XvFuEyoRLYHfV1HbSt3OPXC9~HyTTMGLwkpx8E81m-ER~cIN3-69da-C2brtoi1WBtIqlm6~kQ5FG-9oaeg7Mu2khfjGqq9sVC22KxqJyi4Bw4-JjyQ6T~zjLVSAPPcfEPJNlBS2FHJsNZyua9Yw6eVp9c8XO6OfI8hKQIa6CXbqFoYO38KE7Bfo5QME5KsRONFvogerR869TJIuKW2oRycGEF7KwdZzm1WgZ~Ol9eZnsndB0MUZ9V~Wd~pwZekeio0kPJskBo69C~DsAicMeIydG4hSMg__"

import chatImage from "@/public/assets/images/chatIcon.png";

import ReusableModal from '@/components/common/Modal';
import Image, { StaticImageData } from "next/image";

function Vendor() {
    const [modalOpen,setModalOpen]=useState(false);
    const [content,setContent]=useState({})
    const [title,setTitle]=useState("")

const OpenPopUp=()=>{
  setContent({title:"Add a vendor"})
  setTitle("Add a vendor")
setModalOpen(true);
    }
  return (
    <div className='mt-8 px-8'>
         <ReusableModal
        open={modalOpen}
        setOpen={setModalOpen}
        title={title}
        content={VendorForm} 
        contentProps={content} 
        
      />
        {/* images */}
      <div className='flex justify-between '>
        <Image src={image1} alt="products" className='w-[270px] h-[134px]'/> 
        <Image src={image2} alt="services" className='w-[270px] h-[134px]'/> 

        <Image src={image3} alt="emergency" className='w-[270px] h-[134px]'/> 
        <Image src={image4} alt="transactions" className='w-[270px] h-[134px]'/> 


      </div>
      {/* table data */}
      <div>
        <div className='flex justify-end mt-6 mx-5'>
        <button className='bg-[#ff0000] text-white rounded-3xl px-6 py-2' onClick={OpenPopUp}>Add a vendor</button>
        </div>
        <table class=" w-full bg-white mt-5  table  table-auto">
        <thead className='h-[55px] '>
        <tr className=''>
    <th className="">Vendor</th>
    <th className="">Location</th>
    <th className="">Order Details</th>
    <th className="">Order Type</th>
    <th className="">Order Status</th>
    <th className="">Time</th>
 <th></th>
 <th></th>
</tr>

</thead>

  <tbody className=''>
    <tr className='border border-gray-400 ' ></tr>
    <tr className='py-10'>
      <td className='px-9'>Raymon</td>
      <td className='px-3'>Nashville</td>
      <td className=' px-10 mx-2 flex justify-center'>
        <div className=''>
        <p>Order Id #129874873</p>
       
         
                <p className='text-black font-bold'>Nan Khatayi Wali </p>
                <p className='text-black '>$400</p>
                </div>
      </td>
      <td>Service</td>
      <td><p className='bg-[#FFF5EB] rounded-full px-4 py-2 w-[100px] text-[#FB7E15]'>Pending</p></td>
    <td>Just now</td>
    <td><button className=' rounded-full px-4 py-2 w-[120px] bg-green-300'>
    <div className='flex gap-2 px-2 items-center'>  
     <Image src={chatImage} alt="chatIcon" width={30} />
     <p className=''>Chat</p></div> 
      </button></td>
      <td><button className=' rounded-full px-4 py-2 w-[120px] bg-yellow-300'>
    <div className='flex gap-2 px-2 items-center'>  <BiEdit color='white' fontSize={30}/>
     <p className=''>Edit</p></div> 
      </button></td>
    </tr>
   
  </tbody>
</table>
       
       <div>

       </div>
        




      </div>
    </div>
  )
}

export default Vendor
