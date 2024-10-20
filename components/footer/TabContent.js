import Image from "next/image";

const TabContent = ({ tab }) => {
    return (
        <>
            <div className={`flex flex-col border-t-8 ${tab.bg} ${tab.border}`}>
                <div className="mx-auto mb-8 w-80 py-3 text-gray-100">
                    <div className="mt-4 w-28 rounded bg-gray-100 p-3">
                        <Image
                            src={tab.logo}
                            alt={tab.id}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="my-4">
                        <p className="text-xl font-semibold">{tab.label}</p>
                    </div>
                    <div>
                        <p
                            className={`text-xs leading-5 ${tab.descriptionColor}`}
                        >
                            {tab.description}
                        </p>
                    </div>
                    <div className="mb-2 mt-4">
                        <a
                            href={tab.link}
                            target="_blank"
                            className={`inline-block h-full w-full rounded py-2 text-center font-semibold text-gray-100 no-underline hover:cursor-pointer ${tab.color}`}
                        >
                            {tab.linkText}
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
export default TabContent;
