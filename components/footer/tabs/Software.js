import SoftwareLogo from "@/assets/images/SOMI-Software-Logo.svg";
import Image from "next/image";
const Software = () => {
    return (
        <>
            <div className="flex flex-col border-t-8 border-brand-orange bg-[hsl(27,85%,13%)]">
                <div className="mx-auto mb-3 w-80 p-3 text-gray-100">
                    <div className="mt-4 w-28 rounded bg-gray-100 p-3">
                        <Image src={SoftwareLogo} alt="Software Logo" />
                    </div>
                    <div className="my-4">
                        <p className="text-xl font-semibold">
                            discover, hire and{" "}
                            <span className="text-brand-orange">
                                manage talent.
                            </span>{" "}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs leading-5 text-[#aa8d74]">
                            Im Jahr 2024 aus der SOMI Experts ausgegliedert,
                            haben wir unsere Kompetenz weiter gestärkt, um Ihnen
                            spezialisierte Softwarelösungen bieten zu können.
                            Bei SOMI Software sind wir auf die Entwicklung
                            maßgeschneiderter Lösungen im Bereich der
                            Personalbeschaffung spezialisiert und bieten
                            innovative Tools …
                        </p>
                    </div>
                    <div className="mb-2 mt-4">
                        <a
                            href="https://www.somi-software.de"
                            target="_blank"
                            className="inline-block h-full w-full rounded bg-brand-orange py-2 text-center font-semibold text-gray-100 no-underline hover:cursor-pointer"
                        >
                            zu SOMI Software
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
export default Software;
