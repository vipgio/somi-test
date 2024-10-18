import Head from "next/head";
import Main from "@/components/card/Main";

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
            <Main />
        </>
    );
};
export default index;
