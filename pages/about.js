import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>Next.js || about</title>
            </Head>
            <div className="container">
                <h1>Hello Masum</h1>
                <p className={styles.details}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae porro ipsa dolore tenetur reiciendis qui, odit ratione ullam beatae nisi placeat atque ducimus, odio mollitia quasi, ad maiores aliquid ea consectetur. Vel, omnis?</p>
            </div>
        </>
    );
}

export default About;