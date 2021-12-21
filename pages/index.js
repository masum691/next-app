import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Hellow Next.js!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur, voluptatibus quibusdam itaque error sunt sed nobis incidunt facere, corrupti, minima molestias?</p>
      <input type="text" />
      <Footer></Footer>
    </div>
  )
}
