import React from "react";
import feature1Bg from "/public/assets/images/feature-1-bg.jpg";
import feature2Bg from "/public/assets/images/feature-2-bg.jpg";
import feature3Bg from "/public/assets/images/feature-3-bg.jpg";
import calender from "/public/assets/images/home-calender.png";
import marketing from "/public/assets/images/home-marketing.png";
import location from "/public/assets/images/home-location.png";
import Image, { StaticImageData } from "next/image";

type FeatureCardProps = {
  tagline: string;
  title: string;
  description: string;
  lists: string[];
  bgImage: StaticImageData;
  image: StaticImageData;
  css?: string;
};

const features: FeatureCardProps[] = [
  {
    tagline: "More speed. High efficiency",
    title: "Keep events on schedule",
    description:
      "In order to organize an event, you must log in as an event manager. The platform owner can assign event managers, or you may use test credentials. After logging in, you can begin managing the event.",
    lists: [
      "You will have your own dashboard",
      "Fill details and schedule your events",
      " Secure and quick access",
    ],
    bgImage: feature1Bg,
    image: calender,
  },
  {
    tagline: "More speed. High efficiency",
    title: "Keep events on schedule",
    description:
      "In order to organize an event, you must log in as an event manager. The platform owner can assign event managers, or you may use test credentials. After logging in, you can begin managing the event.",
    lists: [
      "You will have your own dashboard",
      "Fill details and schedule your events",
      " Secure and quick access",
    ],
    bgImage: feature3Bg,
    image: marketing,
  },
  {
    tagline: "More speed. High efficiency",
    title: "Keep events on schedule",
    description:
      "In order to organize an event, you must log in as an event manager. The platform owner can assign event managers, or you may use test credentials. After logging in, you can begin managing the event.",
    lists: [
      "You will have your own dashboard",
      "Fill details and schedule your events",
      " Secure and quick access",
    ],
    bgImage: feature2Bg,
    image: location,
  },
];

function FeatureCard({
  title,
  description,
  tagline,
  lists,
  bgImage,
  image,
  css,
}: FeatureCardProps) {
  return (
    <div
      className={`w-full group flex justify-between items-end z-10 h-[450px] relative ${css}`}
    >
      {/* Bg image */}
      <div className="absolute opacity-40 transition-all duration-200 ease-in-out group-hover:opacity-100 z-[-1] w-full h-full">
        <Image src={bgImage} alt="bg-image" fill />
      </div>

      {/* Text details */}
      <div className="flex w-3/5 p-6 m-10 z-10 bg-white shadow-md shadow-black/[25%] justify-start items-start flex-col gap-2">
        {/* tagline */}
        <div>
          <p className="text-xl text-[#FF0000]">{tagline}</p>
        </div>

        {/* title */}
        <div>
          <p className="text-black text-3xl">{title}</p>
        </div>

        {/* description */}
        <div>
          <p className="text-[#4C4949] text-2xl font-thin">{description}</p>
        </div>

        {/* lists */}
        <div>
          <ul className="ml-5 flex flex-col gap-1">
            {lists.map((list, index) => {
              return (
                <li key={index}>
                  <p className="text-[#675555] font-thin text-2xl">{list}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Side image */}
      <div className="w-2/5 z-10 transition-all duration-300 ease-in-out group-hover:scale-125 h-[400px] relative">
        <Image src={image} alt="main-image" fill />
      </div>
    </div>
  );
}

export function Features() {
  return (
    <div>
      <div className="w-full bg-white justify-center flex items-center">
        {/* feature cards */}
        <div className="w-10/12 flex flex-col justify-center items-center gap-40">
          {features.map((card, index) => {
            return (
              <FeatureCard
                key={index}
                bgImage={card.bgImage}
                image={card.image}
                tagline={card.tagline}
                title={card.title}
                description={card.description}
                lists={card.lists}
                css={index % 2 == 0 ? "flex-row" : "flex-row-reverse"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
