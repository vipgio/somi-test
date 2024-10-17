import Image from "next/image";
import FlipIcon from "@/assets/images/icon_flip.svg";

const Flipper = ({ onFlip }) => {
    return (
        <div
            className="hover:cursor-pointer"
            onClick={onFlip}
            title="Flip the card"
        >
            <Image src={FlipIcon} width={50} height={50} />
        </div>
    );
};
export default Flipper;
