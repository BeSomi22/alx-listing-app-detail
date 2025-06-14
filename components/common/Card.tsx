import { PropertyProps } from '@/interfaces';
import Image from 'next/image';
import STAR from '@/public/assets/icons/Star 2.png'



const Card: React.FC<PropertyProps> = ({ name, address, price, offers, rating, category, image }) => {
  const propertyFeatures = [{
    img: '/assets/icons/bed 1.png',

  }]
  return (
    <div className='w-full  rounded-xl overflow-hidden'>
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} layout="fill" objectFit="cover" className='rounded-xl' />
      </div>
      <div className="p-3">
        <div className='flex flex-row gap-1 mb-2'>
          {category.map((category, index) => (
            <div key={index} className='border border-gray-100 rounded-full  text-[11px] px-[5px] py-[2px]  text-black bg-[#F9F9F9] font-medium w-fit'>
              {category}
            </div>
          ))}
        </div>
        < div className='flex mb-3' >
          <div className=' w-full flex flex-col '>
            <h3 className="font-semibold text-md">{name}</h3>
            <p className='text-sm text-[#929292] font-medium'><span>{address.state}</span><span>{address.city}</span><span>{address.country}</span></p>
          </div>
          <div className='flex flex-row justify-center h-fit'>
            <Image src={STAR} alt='star-icon' className='w-4.5 h-4 mt-0.5 mr-0.5' />
            <p className="text-[#161117] font-medium text-xs mt-1"> {rating}</p>
          </div>
        </div>
        <div className='flex flex-row justify-between '>
          <div className='w-[50%] flex justify-between gap-3 border border-gray-200 rounded-full py-1 px-5'>
            <div className='flex justify-between gap-1 '>
              <img className='w-4 h-4' src="/assets/icons/bed 1.png" alt="icons" />
              <span className='text-xs mr-1'>{offers.bed}</span>
            </div>
            <div className='flex justify-between gap-1'>
              <img className='w-3.5 h-3.5' src="/assets/icons/bathtub 1.png" alt="icons" />
              <span className='text-xs mr-1'>{offers.shower}</span>
            </div>
            <div className='flex justify-between gap-1'>
              <img className='w-4 h-4' src="/assets/icons/people 1.png" alt="icons" />
              <span className='text-xs  mr-1'>{offers.occupants}</span>
            </div>
          </div>
          <p className="text-black font-semibold text-lg">${price}<span className="text-sm">/n</span>
          </p>
        </div>
      </div >
    </div >
  )
}

export default Card