import React from 'react';
import styles from '../style/Breakfast.module.css'
export default function Breakfast() {
    // export default function Breakfast({name,image,price,id,weight}) {

    return (
        <div className={styles.breakfastprod}>
            <div className={styles.headerbreakfast}>
                {/* <img className='breakfatimg'
            src={image}/> */}
            </div>
            <div className={styles.breakid}>
                id:1
            </div>
            <div className={styles.breakname}>
                name
            </div>

            <div className={styles.breakweight}>
                weight:
            </div>
            <div className={styles.price}>
                Rs. 200
            </div>

            <div className={styles.breakbtn}>
                <button>Add+</button>
            </div>

        </div >)

}
