import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Newbie News Network</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there! Ich bin <i>Blackadder</i>. I like websites, acid house, and foggy Scottish fishing hamlets by the beach.</p>
        <p>
          Follow my work at{' '}
          <a href="https://sharp.studio">sharp.studio</a>.
        </p>
        <p>Want to know more? Now you can <Link href="/posts/first-post">Read my mind</Link>.</p>
        
        <h2 className={utilStyles.headingLg}>Notes from my Blog</h2>
        <Link href="/posts/first-post">Damn you, ChatGPT!</Link>
        <br></br><br></br>
        <Link href="/posts/second-post">19 Hogs and Counting.</Link>
      </section>
{/* 
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}