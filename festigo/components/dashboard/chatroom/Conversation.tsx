import Image from "next/image";
import { usePathname } from "next/navigation";
import bgImage from "/public/assets/images/main-page-hero.jpg";
import messageImg from "/public/assets/images/message.png";
import { BsThreeDots } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";

export function Conversation() {
  const pathname = usePathname();

  const conversationId = false;

  //   const [conversationId, setConversationId] = useState<null | string>(null);
  //   useEffect(() => {
  //     setConversationId("");
  //   }, [pathname]);

  return (
    <div className="w-full h-full">
      <div className="w-full relative h-full">
        {/* Navbar of chat section */}
        <div className="w-full flex justify-between items-center bg-white">
          {/* User name */}
          <div className="w-full h-[50px] p-2">
            {conversationId && (
              <div className="flex justify-center items-center">
                {/* profile-image */}
                <div className="rounded-full relative h-full w-[50px]">
                  <Image src={""} alt="profile" fill />
                </div>

                {/* name | online */}
                <div>
                  {/* name */}
                  <div></div>
                  {/* name */}
                  <div></div>
                </div>
              </div>
            )}
          </div>
          {/* more options dots */}
          <div>
            <button className="p-2">
              <BsThreeDots fontSize={25} />
            </button>
          </div>
        </div>

        {/* Middle part for chat */}
        <div className="h-full w-full relative">
          {/* Chat bg Image */}
          <div className="absolute z-0  w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={bgImage}
                alt="Bg-image"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white/[70%] w-full h-full top-0 left-0 absolute"></div>
          </div>

          <>
            {conversationId ? (
              // If conversation id found
              <></>
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
        </div>

        {/* Footer of chat section */}
        <div className="flex justify-between items-center gap-3">
          {/* Add button */}
          <div>
            <button className="text-[#747881]">
              <MdAddCircleOutline fontSize={50} />
            </button>
          </div>

          {/* Input field */}
          <div className="w-full flex justify-center items-center border-[#F49595] border-[0.5px] rounded-xl">
            <input
              type="text"
              className=" w-full outline-none p-2 rounded-xl"
            />
            <div>
              <button className="text-[#747881] mt-2">
                <MdOutlineEmojiEmotions fontSize={30} />
              </button>
            </div>
          </div>

          {/* Send button */}
          <div>
            <button className="text-white rounded-full bg-[#FF0000]/[70%] p-3">
              <IoMdSend fontSize={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
