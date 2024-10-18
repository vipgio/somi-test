import Image from "next/image";
import FlipIcon from "@/assets/images/icon_flip.svg";

const Flipper = () => {
    return (
        <div className="hover:cursor-pointer" title="Flip the card">
            <Image src={FlipIcon} width="auto" height="auto" alt="Flip" />
        </div>
    );
};
export default Flipper;
