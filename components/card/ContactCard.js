import CloseIcon from "@/assets/images/icon_close.svg";
import Image from "next/image";
const ContactCard = ({ setShowContact }) => {
    const handleClose = () => {
        setShowContact(false);
    };
    return (
        <>
            <div className="relative flex min-h-96 w-[300px] flex-col rounded-md border border-gray-100 bg-brand-card font-poppins shadow-lg">
                <div className="p-5">
                    <button
                        className="absolute -right-4 -top-4"
                        onClick={handleClose}
                    >
                        <Image src={CloseIcon} alt="Close Icon" />
                    </button>
                    <h2 className="pt-2 text-xl font-semibold">
                        Austausch vereinbaren
                    </h2>
                    <form className="flex flex-col items-center justify-center gap-4 py-2">
                        <div className="flex w-full flex-col">
                            <input
                                type="text"
                                name="vorname"
                                id="vorname"
                                required
                                className="block"
                            />
                            <label htmlFor="vorname" className="mt-1 text-xs">
                                Vorname*
                            </label>
                        </div>

                        <div className="flex w-full flex-col">
                            <input
                                type="text"
                                name="nachname"
                                id="nachname"
                                required
                            />
                            <label htmlFor="nachname" className="mt-1 text-xs">
                                Nachname*
                            </label>
                        </div>

                        <div className="flex w-full flex-col">
                            <input
                                type="text"
                                name="tel"
                                id="tel"
                                // placeholder="Telefonnummer oder E-Mail-Adresse"
                                required
                            />
                            <label htmlFor="tel" className="mt-1 text-xs">
                                Telefonnummer oder E-Mail-Adresse*
                            </label>
                        </div>

                        <div className="flex w-full flex-col">
                            <input
                                type="text"
                                name="termin"
                                id="termin"
                                // placeholder="Telefonnummer oder E-Mail-Adresse"
                            />
                            <label htmlFor="termin" className="mt-1 text-xs">
                                Infos oder Terminverschlag
                            </label>
                        </div>
                    </form>
                    <p className="text-xxs">
                        Ich stimme zu, dass mit Absenden dieser Anfrage meine
                        Angaben zur Kontaktaufnahme gespeichert werden. Ich kann
                        meine Einwilligung jederzeit für die Zukunft per Mail an
                        datenschutz@somi.de widerrufen. Hier finden Sie unsere
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
        </>
    );
};
export default ContactCard;
