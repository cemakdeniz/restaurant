import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
    <Link href={`/product/$[id]`}><a><Image src='/img/pizza.png' alt='' width='500' height='500' /></a></Link>
      
      <h1 className={styles.price}>FIORI DI ZUCCA</h1> 
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo blanditiis tenetur saepe quia vel in quos nesciunt culpa commodi tempore ab minus, quidem amet voluptatem accusamus suscipit quis dolores nihil.
      </p>
    </div>
  )
}

export default PizzaCard
