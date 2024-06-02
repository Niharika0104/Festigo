"use client"
import { useEvent } from '@/app/context/EventContext';
import React, { useEffect, useState } from 'react'
import image1 from "@/public/assets/images/product_requests.webp";
import image2 from "@/public/assets/images/service_requests.webp";
import { BiEdit } from 'react-icons/bi';
import image3 from "@/public/assets/images/emergency_service_reqeusts.webp";
import image4 from "@/public/assets/images/transactions_reqeusts.webp";
import VendorForm from "@/components/common/VendorForm"
import ReusableModal from '@/components/common/Modal';
import InviteUserComponent from '@/components/common/InviteLink';
import Image, { StaticImageData } from "next/image";
import chatImage from "@/public/assets/images/chatIcon.png";
import axios from 'axios';
import { MdChangeCircle } from 'react-icons/md';
import {useRouter} from 'next/navigation';
const imageUrl="https://s3-alpha-sig.figma.com/img/8971/7a1b/12c69d0d7b4e6a2c28958d2218e7fc80?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0xXS~jglNqKoXosgDE1ZR5GGf5d9EMMyFvHlTfJ~JdpaERaIbIeTUe8XvFuEyoRLYHfV1HbSt3OPXC9~HyTTMGLwkpx8E81m-ER~cIN3-69da-C2brtoi1WBtIqlm6~kQ5FG-9oaeg7Mu2khfjGqq9sVC22KxqJyi4Bw4-JjyQ6T~zjLVSAPPcfEPJNlBS2FHJsNZyua9Yw6eVp9c8XO6OfI8hKQIa6CXbqFoYO38KE7Bfo5QME5KsRONFvogerR869TJIuKW2oRycGEF7KwdZzm1WgZ~Ol9eZnsndB0MUZ9V~Wd~pwZekeio0kPJskBo69C~DsAicMeIydG4hSMg__"

interface VendorData {
    vendorId?: string;
    vendorService: string;
    vendorName: string;
    contactInfo: string;
  }
function Vendor() {
    const router=useRouter();
  const {event}=useEvent();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChatOpen, setmodalChatOpen] = useState(false);
 const [email,setEmail]=useState("");
  const [content, setContent] = useState({})
  const [title, setTitle] = useState("")
  const [vendors,setVendors]=useState([])
  const [ChatModelContent,setChatModelContent]=useState();
  const [change,setChange]=useState(false);
  //const [ModalComponent,setModalComponent]=useState(VendorForm)
   const [loading ,setLoading]=useState(true);
   const AddVendor=async ()=>{
    const sendEventData = async (eventData: VendorData) => {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/vendor/createVendor`, eventData);
          console.log('Response:', response.data);
          return response.data;
        } catch (error) {
          console.error('Error sending event data:', error);
          throw error;
        }
      };
   }
   const handleModalClose=()=>{
    setModalOpen(false);
   }
   const onChatClick=async (email:string)=>{
    const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/emailExists`, {
        email:email
      })
      if(result?.data?.exists===true){
      return   router.push('/chatroom');;
      }
      else {
        setmodalChatOpen(true)
        setModalOpen(false)
      }
   }
   const OnEditClick=async(item:any)=>{
   
    setContent({...item,edit:true,invoke:invoke})
   }

function generateOrderNumber() {
    return Math.floor(100000000 + Math.random() * 900000000);
}
  const [currentEvent,setCurrentEvent]=useState(event);
  
  const invoke=()=>{setChange(!change)}
   
  useEffect(() => {
   
    const fetchVendors = async () => {
      
      
        try {
         
            const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/allvendors`, {
                eventId: event?.id
            });
            const res = result?.data?.message?.vendors;
            setVendors(res || []);  
           
        } catch (error) {
            console.error("Error fetching vendors:", error);
        }
    };

    fetchVendors();
}, [event,change]);  
    const OpenPopUp = () => {
        setContent({ title: "Add a vendor" })
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
                contentProps={{...content,closemodal:handleModalClose}}
            />
             <ReusableModal
                open={modalChatOpen}
                setOpen={setmodalChatOpen}
                title={title}
                content={InviteUserComponent}
                contentProps={{email:email,closemodal:handleModalClose}}
            />
            {/* Images */}
            <div className='flex justify-between'>
                <Image src={image1} alt="products" className='w-[270px] h-[134px]' />
                <Image src={image2} alt="services" className='w-[270px] h-[134px]' />
                <Image src={image3} alt="emergency" className='w-[270px] h-[134px]' />
                <Image src={image4} alt="transactions" className='w-[270px] h-[134px]' />
            </div>

            {/* Table Data */}
            <div>
                <div className='flex justify-end mt-6 mx-5'>
                    <button className='bg-[#ff0000] text-white rounded-3xl px-6 py-2' onClick={OpenPopUp}>Add a vendor</button>
                </div>
                <table className='w-full bg-white mt-5 table-auto'>
                    <thead className='h-[55px]'>
                        <tr className='text-center'>
                            <th className="py-2">Vendor</th>
                            <th className="py-2">Location</th>
                            <th className="py-2">Order Details</th>
                            <th className="py-2">Order Type</th>
                            <th className="py-2">Order Status</th>
                            <th className="py-2">Time</th>
                            <th className="py-2"></th>
                            <th className="py-2"></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                    <tr className='border border-gray-400 ' ></tr>
                    {vendors?.map((item:any,idx)=>{
return (<tr key={idx}>
  <td className='px-4 py-2'>{item.vendorName}</td>
  <td className='px-4 py-2'>{item.Location==""?"-":item.Location}</td>
  <td className='px-4 py-2 flex flex-col items-center'>
      <p>Order Id #{generateOrderNumber()}</p>
      <p className='text-black font-bold'>{item.OrderTitle}</p>
      <p className='text-black'>${item.budget}</p>
  </td>
  <td className='px-4 py-2'>{item.OrderType}</td>
  <td className='px-4 py-2'>
      <p className='bg-[#FFF5EB] rounded-full px-4 py-2 w-[100px] text-[#FB7E15] mx-auto'>Pending</p>
  </td>
  <td className='px-4 py-2'>{item.dateOfOrder.split('T')[0]}</td>
  <td className='px-4 py-2'>
      <button className='rounded-full px-4 py-2 w-[120px] bg-green-300 flex items-center justify-center gap-2'
       onClick={()=>{onChatClick(item?.email)}}>
          <Image src={chatImage} alt="chatIcon" width={20} height={20} />
          <span>Chat</span>
      </button>
  </td>
  <td className='px-4 py-2'>
      <button className='rounded-full px-4 py-2 w-[120px] bg-yellow-300 flex items-center justify-center gap-2'
      onClick={()=>{setModalOpen(true);OnEditClick(item)}}
      >
          <BiEdit color='white' fontSize={20} />
          <span>Edit</span>
      </button>
  </td>
</tr>)
                    })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Vendor;
