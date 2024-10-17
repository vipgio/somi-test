import { useState } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import ContactButton from "./ContactButton";
import SaveButton from "./SaveButton";
import ContactCard from "./ContactCard";

const Main = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="w-[300px] rounded">
            {showContact ? (
                <>
                    <ContactCard />
                </>
            ) : (
                <div className="relative mb-1 flex h-96 items-center justify-center">
                    <div
                        className={`perspective relative h-40 w-64 transform cursor-pointer transition-transform duration-700`}
                        onClick={handleFlip}
                    >
                        <div
                            className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-700 ${
                                isFlipped ? "rotate-y-180" : ""
                            }`}
                        >
                            <div
                                className={`backface-hidden absolute flex h-full w-full items-center justify-center rounded-lg`}
                                style={{ transform: "rotateY(0deg)" }}
                            >
                                <CardFront />
                            </div>

                            <div
                                className={`backface-hidden absolute flex h-full w-full items-center justify-center rounded-lg`}
                                style={{ transform: "rotateY(180deg)" }}
                            >
                                <CardBack />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex gap-5 p-6">
                <ContactButton
                    showContact={showContact}
                    setShowContact={setShowContact}
                />
                {!showContact && <SaveButton />}
            </div>
        </div>
    );
};
export default Main;
