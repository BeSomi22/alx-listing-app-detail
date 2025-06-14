import Image from "next/image";
import HERO_IMAGE from "@/public/assets/Image 1.png";
import { useState } from "react";
import Pill from "@/components/common/Pill";
import Button from "@/components/common/Button";
import FILTER from '@/public/assets/icons/Filter.png'
import Card from '@/components/common/Card';
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters = [
  'All', 'Top Villa', 'Free Reschedule', 'Book Now, Pay later', 'Self CheckIn', 'Instant Book'
]

const Home: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-6">
        <div className="relative h-[500px] max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-md">
          <Image
            src={HERO_IMAGE}
            alt="hero-image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-center px-4">
            <h1 className="font-source text-white font-bold text-4xl md:text-6xl mb-4 drop-shadow-lg">
              Find your favorite <span className="block">place here!</span>
            </h1>
            <p className="font-quicksand  text-white text-lg md:text-xl max-w-2xl drop-shadow-sm">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </section>
      {/* Pill */}
      <section className="px-4 md:px-8 py-6 max-w-7xl mx-auto flex flex-wrap justify-between gap-5">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              selected={selectedFilters.includes(filter)}
              onClick={() => toggleFilter(filter)}
            />
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <button className="flex flex-row justify-center items-center border border-gray-300 rounded-full px-5 py-1" >
            Filter
            <Image src={FILTER} alt="filter-icon" width={24} height={24} />
          </button>
          <button className="border border-gray-300 rounded-full py-1 px-5" >
            <span className="text-gray-400">Sort by:</span>
            Highest Price
          </button>
        </div>
      </section>
      {/* Listing images */}
      <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center px-4 py-8 mx-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <Card key={index}{...property} />
        ))
        }
      </section>

    </>
  );
};

export default Home;
