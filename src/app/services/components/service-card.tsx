import React from 'react'
import Image from 'next/image'

interface ServiceCardProps {
    title: string;
    img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, img}) => {
  return (
    <div className="">
      <div className="flex justify-center items-center content-center">
        <div>
          <div className="text-2xl font-semibold text-[#383388]">
            <h1>{title}</h1>
          </div>

          <Image
            src={img}
            width={500}
            height={500}
            alt="Test Image"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard