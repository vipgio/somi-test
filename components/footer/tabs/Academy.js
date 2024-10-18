import AcademyLogo from "@/assets/images/SOMI-Academy-Logo.svg";
import Image from "next/image";
const Academy = () => {
    return (
        <>
            <div className="flex flex-col border-t-8 border-brand-purple bg-[hsl(336,82%,11%)]">
                <div className="mx-auto mb-3 w-80 p-3 text-gray-100">
                    <div className="mt-4 w-28 rounded bg-gray-100 p-3">
                        <Image src={AcademyLogo} alt="Academy Logo" />
                    </div>
                    <div className="my-4">
                        <p className="text-xl font-semibold">
                            unlock your{" "}
                            <span className="text-brand-purple">
                                potential.
                            </span>{" "}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs leading-5 text-[#a17486]">
                            Bei SOMI Academy glauben wir daran, dass Ihr
                            Unternehmen und jeder Einzelne in Ihrem Team das
                            Potenzial hat, Großes zu erreichen. Unsere Mission
                            ist es, dieses Potenzial zu entfesseln, indem wir
                            Ihnen maßgeschneiderte Onboardings und Schulungen
                            anbieten, die auf Ihre individuellen Bedürfnisse
                            zugeschnitten sind. …
                        </p>
                    </div>
                    <div className="mb-2 mt-4">
                        <a
                            href="https://www.somi-academy.de/"
                            target="_blank"
                            className="inline-block h-full w-full rounded bg-brand-purple py-2 text-center font-semibold text-gray-100 no-underline hover:cursor-pointer"
                        >
                            zu SOMI Academy
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
export default Academy;
