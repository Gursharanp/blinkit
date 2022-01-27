import React from 'react';
import styles from '../style/Madical.module.css'
export default function Madical({name,image,price,id,Unit}) {
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
                Units:{ Unit}
            </div>
            <div className={styles.price}>
                Rs.{ price}
            </div>

            <div className={styles.breakbtn}>
                <button>Add+</button>
            </div>

        </div >)
}
