import React from 'react'
import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = () => {
    const status = 0
    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inProgress
        if(index - status > 1) return styles.unDone
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
        <table className={styles.table}>
            <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>CORALZO</span>
              </td>
              <td>
              <span className={styles.name}>John Doe</span>
              </td>
              <td>
              <span className={styles.address}>Elton st. 212-33 LA </span>
              </td>
              <td>
              <span className={styles.total}>$39.80</span>
              </td>
            </tr>
        </table>
        </div>
        <div className={styles.row}>
            <div className={statusClass(0)}>
                <Image src='/img/paid.png' width={30} height={30} alt=''/>
                <span>Ödeme Alındı</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} alt=''/>
                </div>
            </div>
            <div className={statusClass(1)}>
                <Image src='/img/bake.png' width={30} height={30} alt=''/>
                <span>Hazırlanıyor</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} alt=''/>
                </div>
            </div>
            <div className={statusClass(2)}>
                <Image src='/img/bike.png' width={30} height={30} alt=''/>
                <span>Siparişiniz Yolda</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} alt=''/>
                </div>
            </div>
            <div className={statusClass(3)}>
                <Image src='/img/delivered.png' width={30} height={30} alt=''/>
                <span>Teslim Edildi</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} alt=''/>
                </div>
            </div>
        </div>
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
          <button disabled className={styles.button}>ÖDEME YAPILDI</button>
        </div>
      </div>
      </div>
  )
}

export default Order
