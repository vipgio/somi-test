import Image from "next/image";
import ChatIcon from "@/assets/images/icon_austausch_vereinbaren.svg";
const ContactButton = ({ showContact, setShowContact }) => {
    return (
        <>
            {showContact ? (
                <button
                    className="w-full rounded border bg-brand-navy"
                    onClick={() => setShowContact(false)}
                >
                    Daten senden
                </button>
            ) : (
                <button
                    className="flex w-36 flex-col items-center justify-center rounded bg-brand-navy p-2 shadow"
                    onClick={() => setShowContact(true)}
                >
                    <Image src={ChatIcon} alt="Chat Icon" />
                    <p className="text-gray-100">Austausch vereinbaren</p>
                </button>
            )}
        </>
    );
};
export default ContactButton;
