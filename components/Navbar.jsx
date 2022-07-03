import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
        <Link href="/"><a><Image src='/img/telephone.png' alt='' width='32' height='32' /></a></Link>
          </div>
        <div className={styles.texts}>
            <div className={styles.text}>SİPARİŞ HATTI</div>
            <div className={styles.text}>0212 212 12 12</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/"><a>Anasayfa</a></Link>
            </li>
            <li className={styles.listItem}><Link href="/menu"><a>Menü</a></Link></li>
            <Image src='/img/logo.png' alt='' width='160px' height='69px' />
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>İletişim</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Link href="/cart"><a><Image src='/img/cart.png' alt='' width='30px' height='30px' /></a></Link>
        
        <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
