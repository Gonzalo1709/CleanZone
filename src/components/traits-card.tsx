import React from 'react'

interface TraitsProps {
    icon: React.ReactNode;
    h1: string;
    text: string;
}

const TraitsCard: React.FC<TraitsProps> = ({icon, h1, text}) => {
  return (
    <div className="px-4 sm:px-[150px] lg:px-0">
    <div className="flex justify-center mb-4">
      {icon} 
    </div>
    <h1 className="text-2xl font-bold mb-4 text-[#5CC0BE]">{h1}</h1>
    <p className='text-white'>{text}</p>
  </div>
  )
}

export default TraitsCard