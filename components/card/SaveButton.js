import Image from "next/image";
import SaveIcon from "@/assets/images/icon_kontakt_speichern.svg";
const SaveButton = () => {
    return (
        <>
            <button className="flex w-36 flex-col items-center justify-center rounded bg-brand-navy p-2 shadow">
                <Image src={SaveIcon} alt="Save Icon" />
                <p className="text-gray-100">Kontakt speichern</p>
            </button>
        </>
    );
};
export default SaveButton;
