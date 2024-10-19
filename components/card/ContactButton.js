import Image from "next/image";
import ChatIcon from "@/public/images/icon_austausch_vereinbaren.svg";
const ContactButton = ({ setShowContact }) => {
    return (
        <>
            <button
                className="flex w-36 flex-col items-center justify-center rounded bg-brand-navy p-2 shadow"
                onClick={() => setShowContact(true)}
            >
                <Image src={ChatIcon} alt="Chat Icon" priority />
                <p className="font-poppins font-semibold text-gray-100">
                    Austausch vereinbaren
                </p>
            </button>
        </>
    );
};
export default ContactButton;
