import Image from "next/image"
import VECTOR from '@/public/assets/Vector1.png'

const footerItems = [
    "Terms of Service", "Policy service", "Cookies Policy", "Partners"
]

const Footer: React.FC = () => {
    return (
        <div className="font-quicksand">
            <div className="bg-[#34967C] w-full h-[30px]"/>
            <div className="bg-[#222222] w-full h-fit text-white ">
                <div className="flex flex-wrap gap-20 mb-5">
                    <div className="flex flex-col w-[600px] mt-8 ml-6  ">
                        <Image src={VECTOR} className="mb-6" alt="logo-image" width={58.73} height={30.6} />
                        <p className="text-[#CACACA] text-[16px]">ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
                    </div>
                    <div className="flex flex-row gap-17 mt-7 mb-10">
                        <div className="flex flex-col ">
                            <p className="text-2xl font-semibold text-[#CACACA] mb-6">Explore</p>
                            <ul className="flex flex-col gap-4 text-[#CACACA] text-sm  ">
                                <li className="hover:text-white "><a href="">Apartments in Dubai</a></li>
                                <li className="hover:text-white "><a href="">Hotels in New York</a></li>
                                <li className="hover:text-white "><a href="">Villa in Spain</a></li>
                                <li className="hover:text-white "><a href="">Mansion in Indonesia</a></li>
                            </ul>
                        </div><div>
                            <p className="text-2xl font-semibold text-[#CACACA] mb-6">Company</p>
                            <ul className="flex flex-col gap-4 text-[#CACACA] text-sm ">
                                <li className="hover:text-white "><a href="">About us</a></li>
                                <li className="hover:text-white "><a href="">Blog</a></li>
                                <li className="hover:text-white "><a href="">Career</a></li>
                                <li className="hover:text-white "><a href="">Customers</a></li>
                                <li className="hover:text-white "><a href="">Brand</a></li>
                            </ul>
                        </div><div>
                            <p className="text-2xl font-semibold text-[#CACACA] mb-6">Help</p>
                            <ul className="flex flex-col gap-4 text-[#CACACA] text-sm">
                                <li className="hover:text-white "><a href="">Support</a></li>
                                <li className="hover:text-white "><a href="">Cancel booking</a></li>
                                <li className="hover:text-white "><a href="">Refunds Process</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border border-white/4 mx-auto mt-5 mb-2 w-[90%] h-0"/>
                <div className="flex flex-row justify-between px-10 items-center gap-20 pb-4">
                    <p className="text-[#CACACA] text-sm">Some hotel requires you to cancel more than 24 hours before check-in. Details <span className="text-[#34967C]">here</span> </p>
                    <ul className="flex flex-row justify-around gap-3">
                    {
                        footerItems.map((item, index) => (
                            
                                <li key={index}
                                    className="text-[#CACACA] text-sm hover:text-white"
                                ><a href="#">{item}</a></li>
                            
                        ))
                    }
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Footer;