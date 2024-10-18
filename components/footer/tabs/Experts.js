import ExpertsLogo from "@/assets/images/SOMI-Experts-Logo.svg";
import Image from "next/image";
const Experts = () => {
    return (
        <>
            <div className="flex flex-col border-t-8 border-brand-blue bg-[hsl(208,68%,11%)]">
                <div className="mx-auto mb-3 w-80 p-3 text-gray-100">
                    <div className="mt-4 w-28 rounded bg-gray-100 p-3">
                        <Image src={ExpertsLogo} alt="Experts Logo" />
                    </div>
                    <div className="my-4">
                        <p className="text-xl font-semibold">
                            recru
                            <span className="text-brand-blue">IT</span>
                            ing. solutions.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs leading-5 text-[#788d9f]">
                            Seit 2010 bieten wir als Full-Service-Dienstleister
                            spezialisierte Recruiting- und Consulting-Lösungen
                            mit einem Fokus auf die IT-Branche an. Unser Team
                            vermittelt hochqualifizierte Experten und
                            unterstützt Unternehmen bei der Umsetzung
                            innovativer IT-Projekte. Mit maßgeschneiderten
                            Lösungen …
                        </p>
                    </div>
                    <div className="mb-2 mt-4">
                        <a
                            href="https://somi.de/"
                            target="_blank"
                            className="inline-block h-full w-full rounded bg-brand-blue py-2 text-center font-semibold text-gray-100 no-underline hover:cursor-pointer"
                        >
                            zu SOMI Experts
                        </a>
                    </div>
                    <div>
                        <p className="text-xs italic">
                            part of www.somi-group.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Experts;
