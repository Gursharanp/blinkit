import React from 'react';
import styles from '../style/Fruits.module.css'
export default function Fruits({name,image,price,id,weight}) {
  return (
  <div className={styles.breakfastprod}>
  <div className={styles.headerbreakfast}>
       <img className='breakfatimg'
  src={image}/>
  </div>
  <div className={styles.breakid}>
  </div>
  <div className={styles.breakname}>
      Name:{ name}
  </div>

  <div className={styles.breakweight}>
      Weight:{ weight}
  </div>
  <div className={styles.price}>
      Rs.{ price}
  </div>

  <div className={styles.breakbtn}>
      <button>Add+</button>
  </div>

</div >
)
}
