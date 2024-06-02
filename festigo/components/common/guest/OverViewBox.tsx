import React from 'react';
import { IconType } from 'react-icons';
import Image, { StaticImageData } from 'next/image';

interface OverviewBoxProps {
    num: any;
    icon1: IconType | string | StaticImageData;
    icon2: IconType | string | StaticImageData;
    text1: string;
    color: string;
}

const OverviewBox: React.FC<OverviewBoxProps> = ({ num, icon1, icon2, text1, color }) => {
    
    const Icon1 = typeof icon1 === 'function' ? icon1 : null;
    const Icon2 = typeof icon2 === 'function' ? icon2 : null;

    return (

        <div className='overview-box p-7 border min-w-[200px] px-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

            <div>

                <p className={`text-[${color}] text-[64px] font-bold`}>{num}</p>

            </div>
            <div className='flex gap-5 justify-center items-center'>

                {Icon1 ? <Icon1 className="icon" style={{ color }} size={19} /> : (typeof icon1 === 'string' ? <img src={icon1} alt="icon1" className="w-6 h-6" /> : <Image src={icon1} alt="icon1" width={24} height={24} />)}
                <p className="text-[#BDBDBD] text-[14px]">today</p>

            </div>

            <div className='flex flex-col gap-1 justify-center items-center mt-6'>

                {Icon2 ? <Icon2 className="icon" style={{ color: '#2E3A59' }} size={24}/> : (typeof icon2 === 'string' ? <img src={icon2} alt="icon2" className="w-6 h-6" /> : <Image src={icon2} alt="icon2" width={24} height={24} />)}

                <p className="text-[#4F4F4F] text-[16px] text-center font-bold">{text1}</p>

            </div>

        </div>
    );
};

export default OverviewBox;




