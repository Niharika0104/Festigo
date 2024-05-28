import React from "react";
import { Button } from "../common/Button";
import logoImage from "/public/assets/images/logo.png";
import webLogo from "/public/assets/images/main-logo.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full bg-main-page-hero z-10 h-screen flex justify-center items-center relative">
      <div className=" w-full z-[-10] h-screen opacity-80  absolute bg-black"></div>
      {/* logo-Image */}
      <div className="absolute top-5 left-7">
        <div className="relative w-[120px] h-[120px]">
          <Image src={logoImage} alt="logo" fill />
        </div>
      </div>

      <div className="flex mt-40 text-white max-w-[700px] justify-center items-center flex-col">
        {/* website-name | subtitle */}
        <div className="flex flex-col justify-center items-center max-w-[600px]">
          {/* Website Name */}
          <div className="relative w-[450px] h-[100px]">
            <Image src={webLogo} fill alt="website-logo" />
          </div>

          {/* Subtitle Tagline */}
          <div>
            <p className="text-2xl font-extralight">
              &quot;Simplify Your Event Planning Journey&quot;
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-6">
          <span className="text-2xl font-kumbh-sans font-extralight">
            &quot;Bringing Your{" "}
            <span className="text-[#FF0000]">
              Events to Life: Simplified Regis
            </span>
            tration, Seamless Managem
            <span className="text-[#FF0000]">ent, and Ea</span>sy
            Ticketing.&quot;
          </span>
        </div>

        {/* sign-up | sign-in Buttons */}
        <div className="flex w-[500px] mt-24 justify-between items-center">
          {/* Sign-in button */}
          <Button css="text-white text-2xl rounded-lg font-bold py-3 bg-[#C31616] px-16">
            Sign in
          </Button>

          {/* Sign-up button */}
          <Button css="text-white text-2xl rounded-lg font-bold py-3 bg-[#1C1C1C] px-16">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}