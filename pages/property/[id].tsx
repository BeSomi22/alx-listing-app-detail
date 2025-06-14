import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from '@/components/property/PropertyDetail';
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return <p>Property Not Found</p>

    return (
        <div className="container mx-auto px-4 py-8 space-y-10">
            <PropertyDetail property={property} />

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 w-full">
                    <BookingSection price={property.price} />
                </div>
                <div className="lg:w-2/3 w-full">
                    <ReviewSection reviews={property.reviews || []} />
                </div>
            </div>
        </div>
    )
}