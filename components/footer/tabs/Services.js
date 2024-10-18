import ServicesLogo from "@/assets/images/SOMI-Services-Logo.svg";
import Image from "next/image";
const Services = () => {
    return (
        <>
            <div className="flex flex-col border-t-8 border-brand-teal bg-[hsl(191,100%,10%)]">
                <div className="mx-auto mb-3 w-80 p-3 text-gray-100">
                    <div className="mt-4 w-28 rounded bg-gray-100 p-3">
                        <Image src={ServicesLogo} alt="Services Logo" />
                    </div>
                    <div className="my-4">
                        <p className="text-xl font-semibold">
                            excellent{" "}
                            <span className="text-brand-teal">Support</span> in
                            a different way{" "}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs leading-5 text-[#84acb5]">
                            Ausgegliedert im Jahr 2023 von SOMI Experts, sind
                            wir nun als eigenständige Gesellschaft tätig, um
                            Ihnen noch mehr Kompetenz und spezialisierte
                            Dienstleistungen bieten zu können. Als verlässlicher
                            Partner für erfolgreiche IT-Projekte und Managed
                            Services unterstützen wir Sie dabei, Ihre
                            technologischen Herausforderungen …
                        </p>
                    </div>
                    <div className="mb-2 mt-4">
                        <a
                            href="https://somi-services.de/"
                            target="_blank"
                            className="inline-block h-full w-full rounded bg-brand-teal py-2 text-center font-semibold text-gray-100 no-underline hover:cursor-pointer"
                        >
                            zu SOMI Services
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
export default Services;
