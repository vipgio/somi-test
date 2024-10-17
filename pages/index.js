import Main from "@/components/card/Main";
import Head from "next/head";

const index = () => {
    return (
        <>
            <Head>
                <title>Somi</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="flex h-full items-center justify-center">
                <Main />
            </div>
        </>
    );
};
export default index;
