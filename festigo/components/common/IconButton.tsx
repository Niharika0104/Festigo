import React from "react";
import { IconType } from "react-icons";

interface Props {
    title: string;
    icon: IconType | string; // Allow both IconType and string (URL to an image)
    onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ icon, title, onClick }) => {
    
    const isIconComponent = typeof icon !== 'string';

    return (
        <div 
            className={`flex gap-4 items-center w-full px-3 py-2 rounded-lg cursor-pointer transition-all
            bg-white text-gray-700 hover:bg-gray-100`} 
            onClick={onClick ? () => onClick() : undefined}
        >
            <div className="w-6 h-6 flex justify-center items-center">
                {isIconComponent 
                    ? React.createElement(icon as IconType) 
                    : <img src={icon as string} alt={title} className="w-full h-full object-contain" />}
            </div>
            <span>{title}</span>
        </div>
    );
};

export default IconButton;



