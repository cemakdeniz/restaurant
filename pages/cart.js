import styles from '../styles/Cart.module.css'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
            <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image src='/img/pizza.png' layout='fill' objectFit='contain' alt='' />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
              <span className={styles.extras}>Double ingredient, spicy sauce</span>
              </td>
              <td>
              <span className={styles.price}>$19.90</span>
              </td>
              <td>
              <span className={styles.quantity}>2</span>
              </td>
              <td>
              <span className={styles.total}>$39.80</span>
              </td>
            </tr>

            <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
           <h2 className={styles.title}>SEPET TUTARI</h2>
           <div className={styles.totalText}>
            <div className={styles.totalTextTitle}>Subtotal: <b>$79.60</b></div>
           </div>
           <div className={styles.totalText}>
            <div className={styles.totalTextTitle}>Discount: <b>$0.00</b></div>
           </div>
           <div className={styles.totalText}>
            <div className={styles.totalTextTitle}>Total: <b>$79.60</b></div>
          </div>
          <button className={styles.button}><Link href="/orders/:id"><a>ÖDEME YAP</a></Link></button>
        </div>
      </div>
    </div>
  )
}

export default Cart