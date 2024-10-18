import { useState } from "react";
import Academy from "./footer/tabs/Academy";
import Experts from "./footer/tabs/Experts";
import Services from "./footer/tabs/Services";
import Software from "./footer/tabs/Software";
import TabSelection from "./footer/TabSelection";

const Footer = () => {
    const [selectedTab, setSelectedTab] = useState();

    const tabs = [
        {
            id: "experts",
            label: "Experts",
            component: Experts,
            color: "bg-brand-blue",
        },
        {
            id: "services",
            label: "Services",
            component: Services,
            color: "bg-brand-teal",
        },
        {
            id: "software",
            label: "Software",
            component: Software,
            color: "bg-brand-orange",
        },
        {
            id: "academy",
            label: "Academy",
            component: Academy,
            color: "bg-brand-purple",
        },
    ];

    const TabContent = ({ selectedTabId }) => {
        const selectedTab = tabs.find((tab) => tab.id === selectedTabId);
        if (!selectedTab) return null;

        const TabComponent = selectedTab.component;
        return <TabComponent />;
    };

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
                    <TabContent selectedTabId={selectedTab} />
                </footer>
            </div>
        </>
    );
};
export default Footer;
