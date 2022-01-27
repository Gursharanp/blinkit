import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/CreateAccount.module.css';
export default function CreateAccount() {
    return (
        <div className={styles.login}>
            <div className={styles.head}>
                <Link to="/">
                <div className={styles.bhome}>
                    Home
                </div>
                </Link>
                <div className={styles.licon}>
                    <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" />
                </div>
            </div>
            <div className={styles.outer}>
                <div className={styles.tlogin}>
                    Create-Account
                </div>
                <div className={styles.tname}>
                    <div className={styles.tt}>
                        Email or Mobile Number
                    </div>
                    <div className={styles.linput}>
                        <input type="text" placeholder='example@example.com' />
                    </div>
                </div>
                <div className={styles.pname}>
                    <div className={styles.tt}>
                        Password
                    </div>
                    <div className={styles.pinput}>
                        <input type="password" placeholder='password' />
                    </div>
                </div>
                <div className={styles.pname}>
                    <div className={styles.tt}>
                        Confirm-Password
                    </div>
                    <div className={styles.pinput}>
                        <input type="password" placeholder='password' />
                    </div>
                </div>
                <div className={styles.lbtn}>
                    <button>Create-Account</button>
                </div>

            </div>

        </div>
    )
}
