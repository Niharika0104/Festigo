import React from 'react';
import { StaticImageData } from 'next/image';

interface Props {
    text: string;
    image?: StaticImageData; // Optional prop to accept StaticImageData
    textSize?: string; // Optional prop for text size
    imageWidth?: string; // Optional prop for image width
    imageHeight?: string; // Optional prop for image height
    onClick?: () => void; // Optional prop for an onClick function
}

const GuestContainer: React.FC<Props> = ({ text, image, textSize = '16px', imageWidth, imageHeight, onClick }) => {
    return (
        <div
            className="flex justify-center items-center border shadow-custom-shadow rounded-xl p-12 gap-14 px-20"
            onClick={onClick}
        >
            {image && <img src={image.src} alt="Guest" className={`w-[${imageWidth}] h-[${imageHeight}]`} />} 
            {text && <p style={{ fontSize: textSize }} className="w-[105px] font-semibold">{text}</p>}
        </div>
    );
}

export default GuestContainer;


