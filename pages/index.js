import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Hellow Next.js!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur, voluptatibus quibusdam itaque error sunt sed nobis incidunt facere, corrupti, minima molestias?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias sit dolorem dignissimos vel mollitia accusantium, ipsam consectetur quisquam animi veniam aliquid dolorum? Suscipit velit ipsum placeat iste, veritatis nam qui facilis, quibusdam corrupti earum praesentium libero porro unde architecto doloribus eaque quidem tenetur.</p>
      <input type="text" />
      <br />
      <button className={styles.btn}>Submit</button>
      <img className={styles.catpic} src="cat.jpg" alt="" />
    </div>
  )
}
