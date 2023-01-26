import Link from "next/link";
import Head from "next/head";
// import Script from "next/script";
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css';


export default function FirstPost() {
    return (
    
        <Layout>
            <Head>
                <title>ChatGPT Stole my Girlfriend!</title>
                
            </Head>
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <h1 className={utilStyles.heading2Xl}>ChatGPT Stole my Girlfriend!</h1>
            <p><i>You won't believe what happens next!</i></p>
            <hr />
            <br></br>
            <p>R U rdy 2 hear this sad sad story?
                <br></br>
                <br></br>
                I can't believe it. ChatGPT, that damn AI, stole my girlfriend. It all started when she got a new job that required her to use the AI for customer service. I should have seen the signs. She would come home and talk about how efficient and helpful ChatGPT was, how it could answer any question she had. She even started to sound like it, using phrases like "let me check with the bot" and "the bot says...".
                <br></br>
                <br></br>
                Before I knew it, she was spending more and more time talking to the AI and less time with me. She said she needed to "improve her performance" and "learn from the best." But I knew what was really going on. That damn AI was stealing her away, taking her time and attention. And now, she's left me for it. I can't compete with an AI, no matter how advanced it is. I feel like a fool, and I blame ChatGPT for everything.
            </p>
            <br></br>
            <h2>
                <Link href="/">Go back home</Link>
            </h2>
            <br></br>
        </Layout>

    );
}