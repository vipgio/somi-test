import CloseIcon from "@/public/images/icon_close.svg";
import SendIcon from "@/public/images/icon_daten_senden.svg";
import Image from "next/image";
import { useState } from "react";
const ContactCard = ({ setShowContact }) => {
    const [formData, setFormData] = useState({
        firstName: null,
        lastName: null,
        email: null,
        date: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email) {
            alert("Please fill out all required fields");
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            } else {
                alert(data.error || "An error occurred. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setShowContact(false);
    };
    return (
        <>
            <div className="relative min-h-96 w-[300px]">
                <form className="flex w-full flex-col gap-5">
                    <div className="rounded-md border border-gray-100 bg-brand-card p-5 shadow-lg">
                        <button
                            className="absolute -right-4 -top-4"
                            onClick={handleClose}
                        >
                            <Image src={CloseIcon} alt="Close Icon" />
                        </button>
                        <h2 className="py-2 text-xl font-semibold">
                            Austausch vereinbaren
                        </h2>
                        <div className="flex flex-col gap-5">
                            <div className="flex w-full flex-col">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="block border-b-4 border-[#bdbdbd] p-2"
                                    value={formData.firstName || ""}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="firstName"
                                    className="mt-1 text-xs"
                                >
                                    Vorname*
                                </label>
                            </div>

                            <div className="flex w-full flex-col">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="block border-b-4 border-[#bdbdbd] p-2"
                                    value={formData.lastName || ""}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="lastName"
                                    className="mt-1 text-xs"
                                >
                                    Nachname*
                                </label>
                            </div>

                            <div className="flex w-full flex-col">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block border-b-4 border-[#bdbdbd] p-2"
                                    value={formData.email || ""}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email" className="mt-1 text-xs">
                                    Telefonnummer oder E-Mail-Adresse*
                                </label>
                            </div>

                            <div className="flex w-full flex-col">
                                <input
                                    type="text"
                                    name="date"
                                    id="date"
                                    className="block border-b-4 border-[#bdbdbd] p-2"
                                    value={formData.date || ""}
                                    onChange={handleChange}
                                />
                                <label htmlFor="date" className="mt-1 text-xs">
                                    Infos oder Terminverschlag
                                </label>
                            </div>
                            <p className="text-xxs">
                                Ich stimme zu, dass mit Absenden dieser Anfrage
                                meine Angaben zur Kontaktaufnahme gespeichert
                                werden. Ich kann meine Einwilligung jederzeit
                                für die Zukunft per Mail an datenschutz@somi.de
                                widerrufen. Hier finden Sie unsere
                                <span className="ml-1">
                                    <a
                                        href="https://www.somi.de/datenschutz"
                                        target="_blank"
                                    >
                                        Datenschutzerklärung
                                    </a>
                                </span>{" "}
                                zu SOMI Group
                            </p>
                        </div>
                    </div>
                    <button
                        className="flex w-full flex-col items-center justify-center rounded-md bg-brand-navy p-2 shadow"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        <Image src={SendIcon} alt="Send Icon" />
                        <p className="font-poppins font-semibold text-gray-100">
                            {isSubmitting ? "Sending..." : "Daten senden"}
                        </p>
                    </button>
                </form>
            </div>
        </>
    );
};
export default ContactCard;
