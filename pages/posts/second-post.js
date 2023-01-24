import Link from "next/link";
import Head from "next/head";
// import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
    
        <Layout>
            <Head>
                <title>Hands Off my Hogs!</title>
                
            </Head>
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <h1>Hands Off my Hogs!</h1>
            <p><i>19 hogs and couting.</i></p>
            <hr />
            <br></br>
            <p>
            The Razorback Hogs, Arkansas' beloved college football team, has been rocked by a scandal involving former White House Press Secretary Sarah Huckabee Sanders and the Duggar family of TLC's "19 Kids and Counting" fame.
            <br></br><br></br>
            According to sources close to the team, Sanders, a native of Arkansas and avid Razorback fan, had been in discussions with the Duggar family about potentially joining the team's coaching staff. However, the talks reportedly fell apart after it was revealed that members of the Duggar family had been involved in a series of sexual misconduct allegations. The team, facing intense pressure from fans and alumni, ultimately decided to distance themselves from the family and scrapped plans to bring Sanders on board.
            <br></br><br></br>
            The scandal has sparked a heated debate within the Razorback community, with some calling for Sanders and the Duggars to be given a second chance, while others argue that the team must prioritize the safety and well-being of its players and students. The Razorback Hogs organization has yet to officially comment on the situation.
            </p>
            <br></br>
            <h2>
                <Link href="/">Go back home</Link>
            </h2>
            <br></br>
        </Layout>

    );
}