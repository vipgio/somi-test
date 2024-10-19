import Image from "next/image";
import HeaderLogoSVG from "@/public/images/SOMI-Experts-Logo.svg";
const HeaderLogo = () => {
    return (
        <>
            <div className="flex w-full justify-center">
                <div className="relative w-20">
                    <a href="https://somi.de/" target="_blank">
                        <Image
                            src={HeaderLogoSVG}
                            alt="Header Logo"
                            fill
                            priority
                        />
                    </a>
                </div>
            </div>
        </>
    );
};
export default HeaderLogo;
