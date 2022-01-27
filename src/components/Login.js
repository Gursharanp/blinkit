import React from 'react';
import styles from '../style/Login.module.css';
import { Link } from 'react-router-dom';
export default function Login() {
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
                    Login
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
                <div className={styles.lbtn}>
                    <button>Login</button>
                </div>
                <div className={styles.stt}> Or </div>
                <div className={styles.lbtn}>
                    <Link to="/CreateAccount">
                        <button>Create-New-Account</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
