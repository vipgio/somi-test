import Image from "next/image";
import HeaderLogoSVG from "@/assets/images/SOMI-Experts-Logo.svg";
const HeaderLogo = () => {
    return (
        <>
            <div className="relative m-2 w-full">
                <Image src={HeaderLogoSVG} alt="Header Logo" fill priority />
            </div>
        </>
    );
};
export default HeaderLogo;
