import { FaPhone, FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Flipper from "./Flipper";
const CardBack = () => {
    return (
        <>
            <div className="relative h-96 w-[300px] rounded-md border bg-gray-100 p-4 shadow-md">
                <div className="absolute -right-5 -top-5 z-50">
                    <Flipper />
                </div>
                <div className="flex h-full flex-col justify-between divide-y divide-gray-300">
                    <div className="flex h-full flex-col justify-center">
                        <p className="font-semibold">Soroosh Sadeghi</p>
                        <p>Dipl. Inform.</p>
                        <p>COO</p>
                    </div>
                    <div className="flex h-full flex-col justify-center">
                        <p className="font-semibold text-brand-navy">
                            SOMI Experts GmbH
                        </p>
                        <p className="italic">part of SOMI Group</p>
                        <p>Kennedyallee 93</p>
                        <p>60596 Frankfurt a. M.</p>
                    </div>
                    <div className="flex h-full flex-col justify-evenly">
                        <div className="flex items-center">
                            <FaPhone />
                            <a
                                href="tel:+49 69 47 89 18 90 -11"
                                className="ml-2"
                            >
                                +49 69 47 89 18 90 -11
                            </a>
                        </div>
                        <div className="flex items-center">
                            <FaMobileAlt />
                            <a href="tel:+49 151 10 49 36 95" className="ml-2">
                                +49 151 10 49 36 95
                            </a>
                        </div>
                        <div className="flex items-end">
                            <MdOutlineMail />
                            <a
                                href="mailto:soroosh.sadeghi@somi.de"
                                className="ml-2"
                            >
                                soroosh.sadeghi@somi.de
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardBack;
