import InputField from "./InputField";

import { PiUserCircleDuotone } from "react-icons/pi";

import { useState } from "react";

import { CiSearch } from "react-icons/ci";

export default function TopBar() {
  const [textData, setTextData] = useState({ text: "" });

  function changeHandler(event: any) {
    setTextData({ text: event.target.value });
  }

  return (
    <div>
      <div className="relative w-full flex justify-between items-baseline mt-3 px-3 pr-6">
        <div className="flex flex-col pl-8">
          <p className="text-[#707EAE]">Hii Radhika, </p>

          <h1 className="text-[#2B3674] text-3xl font-bold">
            Welcome to Festigo!
          </h1>
        </div>

        <div className="flex gap-6 justify-center items-center">
          <div className="w-[350px] z-[0]">
            <InputField
              type="text"
              placeholder="Enter Text to Search"
              value={textData.text}
              name="text"
              onChange={changeHandler}
              required={false}
              icon={<CiSearch />}
            ></InputField>
          </div>
          <div>
            <PiUserCircleDuotone size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
