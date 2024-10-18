import Image from "next/image";
import ChatIcon from "@/assets/images/icon_austausch_vereinbaren.svg";
import SendIcon from "@/assets/images/icon_daten_senden.svg";
const ContactButton = ({ showContact, setShowContact }) => {
    return (
        <>
            {showContact ? (
                <button
                    className="flex w-full flex-col items-center justify-center rounded-md bg-brand-navy p-2 shadow"
                    onClick={() => setShowContact(false)}
                >
                    <Image
                        src={SendIcon}
                        alt="Send Icon"
                        width="auto"
                        height="auto"
                    />
                    <p className="font-poppins font-semibold text-gray-100">
                        Daten senden
                    </p>
                </button>
            ) : (
                <button
                    className="flex w-36 flex-col items-center justify-center rounded bg-brand-navy p-2 shadow"
                    onClick={() => setShowContact(true)}
                >
                    <Image src={ChatIcon} alt="Chat Icon" priority />
                    <p className="font-poppins font-semibold text-gray-100">
                        Austausch vereinbaren
                    </p>
                </button>
            )}
        </>
    );
};
export default ContactButton;
