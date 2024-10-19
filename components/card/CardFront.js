import Image from "next/image";
import ProfileImage from "@/public/images/businesscard_profile.webp";
import Flipper from "./Flipper";
const CardFront = () => {
    return (
        <>
            <div className="relative flex h-96 w-[300px] flex-col rounded-md border bg-brand-card shadow-md">
                <div className="absolute -right-5 -top-5 z-50">
                    <Flipper />
                </div>

                <div className="mt-5 flex flex-col items-center justify-center font-poppins">
                    <p>Dipl. Inform.</p>
                    <p className="font-semibold">Soroosh Sadeghi</p>
                    <p>COO</p>
                </div>
                <div className="mt-auto overflow-hidden rounded">
                    <Image src={ProfileImage} alt="Profile Image" priority />
                </div>
            </div>
        </>
    );
};
export default CardFront;
