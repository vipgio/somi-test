import { useEffect, useRef } from "react";

const TabSelection = ({ tabs, setSelectedTab, selectedTab }) => {
    const scrollRef = useRef(null);

    const scrollToIndex = () => {
        scrollRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };
    useEffect(() => {
        scrollToIndex();
    }, [selectedTab]);

    return (
        <div className="mt-12 flex items-end justify-between">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className="relative h-full w-16 cursor-pointer"
                    onClick={() => setSelectedTab(tab.id)}
                    ref={(el) => (scrollRef.current = el)}
                >
                    <div
                        className={`absolute bottom-0 w-full transition-all duration-200 ${tab.color} ${
                            selectedTab === tab.id ? "h-8" : "h-5"
                        }`}
                    />
                </div>
            ))}
        </div>
    );
};
export default TabSelection;
