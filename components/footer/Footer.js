import { useState } from "react";
import TabSelection from "./TabSelection";
import TabContent from "./TabContent";

const Footer = () => {
    const [selectedTab, setSelectedTab] = useState("experts");

    const tabs = [
        {
            id: "experts",
            label: (
                <>
                    recru
                    <span className="text-brand-blue">IT</span>
                    ing. solutions.
                </>
            ),
            description:
                "Seit 2010 bieten wir als Full-Service-Dienstleister spezialisierte Recruiting- und Consulting-Lösungen mit einem Fokus auf die IT-Branche an. Unser Team vermittelt hochqualifizierte Experten und unterstützt Unternehmen bei der Umsetzung innovativer IT-Projekte. Mit maßgeschneiderten Lösungen …",
            descriptionColor: "text-[#788d9f]",
            color: "bg-brand-blue",
            bg: "bg-[#091d2f]",
            border: "border-brand-blue",
            logo: "/images/SOMI-Experts-Logo.svg",
            link: "https://somi.de/",
            linkText: "zu SOMI Experts",
        },
        {
            id: "services",
            label: (
                <>
                    excellent <span className="text-brand-teal">Support</span>{" "}
                    in a different way{" "}
                </>
            ),
            description:
                "Ausgegliedert im Jahr 2023 von SOMI Experts, sind wir nun als eigenständige Gesellschaft tätig, um Ihnen noch mehr Kompetenz und spezialisierte Dienstleistungen bieten zu können. Als verlässlicher Partner für erfolgreiche IT-Projekte und Managed Services unterstützen wir Sie dabei, Ihre technologischen Herausforderungen …",
            descriptionColor: "text-[#84acb5]",
            color: "bg-brand-teal",
            bg: "bg-[#002a33]",
            border: "border-brand-teal",
            logo: "/images/SOMI-Services-Logo.svg",
            link: "https://somi-services.de/",
            linkText: "zu SOMI Services",
        },
        {
            id: "software",
            label: (
                <>
                    discover, hire and{" "}
                    <span className="text-brand-orange">manage talent.</span>
                </>
            ),
            description:
                "Im Jahr 2024 aus der SOMI Experts ausgegliedert, haben wir unsere Kompetenz weiter gestärkt, um Ihnen spezialisierte Softwarelösungen bieten zu können. Bei SOMI Software sind wir auf die Entwicklung maßgeschneiderter Lösungen im Bereich der Personalbeschaffung spezialisiert und bieten innovative Tools …",
            descriptionColor: "text-[#aa8d74]",
            color: "bg-brand-orange",
            bg: "bg-[#3d1e05]",
            border: "border-brand-orange",
            logo: "/images/SOMI-Software-Logo.svg",
            link: "https://somi-software.de/",
            linkText: "zu SOMI Software",
        },
        {
            id: "academy",
            label: (
                <>
                    unlock your{" "}
                    <span className="text-brand-purple">potential.</span>
                </>
            ),
            description:
                "Bei SOMI Academy glauben wir daran, dass Ihr Unternehmen und jeder Einzelne in Ihrem Team das Potenzial hat, Großes zu erreichen. Unsere Mission ist es, dieses Potenzial zu entfesseln, indem wir Ihnen maßgeschneiderte Onboardings und Schulungen anbieten, die auf Ihre individuellen Bedürfnisse zugeschnitten sind. …",
            descriptionColor: "text-[#a17486]",
            color: "bg-brand-purple",
            bg: "bg-[#330517]",
            border: "border-brand-purple",
            logo: "/images/SOMI-Academy-Logo.svg",
            link: "https://somi-academy.de/",
            linkText: "zu SOMI Academy",
        },
    ];

    return (
        <>
            <div className="border-t-2">
                <footer>
                    <div className="mx-auto w-80">
                        <div className="my-5 flex justify-between text-xs">
                            <p>
                                <a
                                    href="https://somi-group.com/"
                                    target="_blank"
                                >
                                    www.somi-group.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://somi-group.com/impressum/"
                                    target="_blank"
                                >
                                    Impressum
                                </a>
                            </p>
                        </div>
                        <TabSelection
                            tabs={tabs}
                            setSelectedTab={setSelectedTab}
                            selectedTab={selectedTab}
                        />
                    </div>
                    <div className="h-0">
                        <TabContent
                            tab={tabs.find((tab) => tab.id === selectedTab)}
                        />
                    </div>
                </footer>
            </div>
        </>
    );
};
export default Footer;
