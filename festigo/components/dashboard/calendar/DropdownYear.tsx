import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const iconStyle = {
  fontSize: '1.5rem',
  color: '#000'
};

interface DropdownWithYearsProps {
  currentMonth: { month: string };
  handleLeftClick: () => void;
  handleRightClick: () => void;
}

const DropdownWithYears: React.FC<DropdownWithYearsProps> = ({ currentMonth, handleLeftClick, handleRightClick }) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const years: number[] = Array.from(new Array(currentYear - 1950 + 1), (_, index) => 1950 + index);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div className='w-[200px] h-[100px] flex justify-evenly items-center gap-12 relative'>
      <FaChevronLeft style={{ ...iconStyle, cursor: 'pointer' }} onClick={handleLeftClick} />
      <div className='text-lg mx-12 w-auto object-contain absolute'>
        {currentMonth.month}
      </div>
      <select
        value={selectedYear}
        onChange={handleYearChange}
        className='absolute top-0 right-0 mt-12 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500'
        style={{
          height: '100px',
          overflowY: 'scroll',
          width: '80px',
        }}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <FaChevronRight style={{ ...iconStyle, cursor: 'pointer' }} onClick={handleRightClick} />
    </div>
  );
};

export default DropdownWithYears;
