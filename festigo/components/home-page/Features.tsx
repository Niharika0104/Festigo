import React from "react";
import feature1Bg from "/public/assets/images/feature-1-bg.jpg";
import feature2Bg from "/public/assets/images/feature-2-bg.jpg";
import feature3Bg from "/public/assets/images/feature-3-bg.jpg";
import { StaticImageData } from "next/image";

type FeatureCardProps = {
  tagline: string;
  title: string;
  description: string;
  lists: string[];
  bgImage: StaticImageData;
  image: StaticImageData;
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
    image: feature1Bg,
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
    image: feature3Bg,
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
    image: feature3Bg,
  },
];

function FeatureCard({
  title,
  description,
  tagline,
  lists,
  bgImage,
  image,
}: FeatureCardProps) {
  return (
    <div className="w-full h-[800px]">
      <div className=""></div>
    </div>
  );
}

export function Features() {
  return (
    <div>
      <div className="w-full">
        {/* feature cards */}
        <div>
          {features.map((card, index) => {
            return <FeatureCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
