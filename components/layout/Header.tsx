import React from 'react'
import Image from "next/image"
import VECTOR from '@/public/assets/Vector.png'
import CASE_MINIMALISTIC from '@/public/assets/icons/Case Minimalistic.png'
import SEARCH from '@/public/assets/icons/Magnifer.png'
import Button from '@/components/common/Button';

const accommodationTypes = [
  {
    title: "Rooms",
    image: "/assets/logos/living-room 1.png",
  },
  {
    title: "Mansion",
    image: "/assets/logos/mansion 1.png",
  },
  {
    title: "Countryside",
    image: "/assets/logos/farm 1.png",
  },
  {
    title: "Villa",
    image: "/assets/logos/villa 1.png",
  },
  {
    title: "Tropical",
    image: "/assets/logos/palm-tree 1.png",
  },
  {
    title: "New",
    image: "/assets/logos/key-chain 1.png",
  },
  {
    title: "Amazing pool",
    image: "/assets/logos/swimming-pool 1.png",
  },
  {
    title: "Beach house",
    image: "/assets/logos/vacations 1.png",
  },
  {
    title: "island",
    image: "/assets/logos/island (1) 1.png",
  },
  {
    title: "Camping",
    image: "/assets/logos/tent 1.png",
  },
  {
    title: "Apartement",
    image: "/assets/logos/apartment 1.png",
  },
  {
    title: "House ",
    image: "/assets/logos/home 1.png",
  },
  {
    title: "Lakefront",
    image: "/assets/logos/cottage 1.png",
  },
  {
    title: "Farm house",
    image: "/assets/logos/barn 1.png",
  },
  {
    title: "Treehouse",
    image: "/assets/logos/treehouse (1) 1.png",
  },
  {
    title: "Cabins",
    image: "/assets/logos/cabin 1.png",
  },
  {
    title: "Castales",
    image: "/assets/logos/castle-tower 1.png",
  },
  {
    title: "Lakeside",
    image: "/assets/logos/farm 1.png",
  }
];

const Header: React.FC = () => {
  return (
    <header className='w-full sticky top-0 z-50'>
      <div className='bg-[#34967C] py-2 w-full text-white flex justify-center items-center gap-2'>
        <Image width={16} height={16} src={CASE_MINIMALISTIC} alt="case image" />
        <p className='text-xs'>Overseas trip? Get the latest information on travel guides</p>
        <Button label='More Info' className='bg-black rounded-2xl text-white text-xs px-3 py-1' />
      </div>
      <div className='bg-white w-full h-[40px] flex  justify-around items-center py-2'>
        {/* Logo */}
        <Image src={VECTOR} alt='Logo image' width={52.73} height={30.7} className='my-2' />
        {/* Input */}
        <div className='rounded-full border border-gray-300 flex w-[40%] mt-3'>
          <input type='text' placeholder='Search destinations, stays...'
            className='w-full px-4 py-2 focus:outline-none text-sm'
            aria-label='Search' />
          <button className='bg-[#FFA800] rounded-full p-2 ' aria-label='Search button'>
            <Image src={SEARCH} alt='search-icon' width={20} height={20} />
          </button>
        </div>
        {/* Sign in/out Button */}
        <div className='flex items-center gap-1 mt-2'>
          <Button label="Sign In" className='bg-[#34967C] text-white text-[12px] px-5 py-2  rounded-4xl' />
          <Button label="Sign Up" className=' border bg-white py-2 px-5 text-black text-[12px]  rounded-4xl border-gray-300' />

        </div>
      </div>
      <div className=' bg-white flex justify-center gap-6 py-4 overflow-x-auto px-4'>
        {accommodationTypes.map((item, index) => (
          <div key={index} className='flex flex-col items-center text-sm text-gray-700 hover:text-[#34967C] cursor-pointer'>
            <Image src={item.image} alt={item.title} width={26} height={26} loading="lazy" />
            <span className='mt-1 text-[10px]'>{item.title}</span>
          </div>
        ))}

      </div>
    </header>
  )
}
export default Header;