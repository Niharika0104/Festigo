"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import InputField from "../common/InputField";
import { MdEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assests/logo.png";

import bgImage from "../../public/assests/loginLightBg.jpg";

import homeIcon from "../../public/assests/icons/home.gif";

export default function Login() {

  const [userData, setUserData] = useState({ email: "", password: "", rememberme: false });

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {

    setUserData({ ...userData, [event.target.name]: event.target.value });
    
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {

    setUserData({ ...userData, rememberme: event.target.checked })
    ;
  }

  function submitHandler(event: FormEvent) {

    event.preventDefault();
    console.log(userData);

  }

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="relative flex flex-col gap-12 justify-center items-center w-screen min-h-screen mx-auto">
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${isHover ? "opacity-100" : "opacity-50"}`}
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <Image src={logo} alt="logo" className="w-20 h-20 absolute top-2 left-2" />

      {

        !isHover && 
        
        <div className="flex flex-col gap-1 absolute w-fit  top-2 right-2 invisible md:visible">

          <Image src={homeIcon} alt="" className="w-14 h-14 " />

          <p className="text-[#FF0000] uppercase font-bold">Home</p>

        </div>

      }


      <div className="relative z-10 flex flex-col gap-12 justify-center items-center w-full h-full">


        <div className="flex flex-col gap-2">

          <h1 className="font-bold text-red-600 uppercase text-center text-4xl">Festigo</h1>

          <p className="text-neutral-600 text-3xl">" Simplyfying Your Event Planning Journey "</p>

        </div>

        <div className="w-full max-w-md border rounded-lg p-8 shadow-lg bg-white">

          <form onSubmit={submitHandler} className="flex flex-col space-y-6">


            <h1 className="text-red-600 text-3xl font-bold text-center">Login to your account</h1>

            <InputField
              type="email"
              name="email"
              value={userData.email}
              onChange={changeHandler}
              label="Enter Your Email:"
              required={true}
              icon={<MdEmail />}
              placeholder="email.address.123@festigo.com"
            />
            <InputField
              type="password"
              name="password"
              value={userData.password}
              onChange={changeHandler}
              label="Enter Your Password:"
              required={true}
              icon={<HiOutlineLockClosed />}
              placeholder="password"
            />

            <div className="flex items-center justify-between">

              <div className="flex items-center">

                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberme"
                  checked={userData.rememberme}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-red-600"
                />
                <label htmlFor="rememberMe" className="ml-2 text-gray-700">

                  Remember me

                </label>

              </div>

              <Link href={"/auth/forgotPassword"} className="text-sm text-red-600 hover:underline">

                Forgot Password?

              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">

            <p className="text-gray-700">

              Don't have an account? <Link href={"/auth/signup"} className="text-red-600 hover:underline">Sign Up Here</Link>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



