import React from "react"

function Login() {
    return (
        <>
            <div className="loginmain">
                <div className="login">
                    <div className="pnv">
                        <h2>Phone Number Verification
                        </h2>
                    </div>
                    <div className="input-section">
                        <div className="message">
                            <h3>Enter your phone number to <br></br>
                                Login/Sign up</h3>
                        </div>
                        <div className="mobile">
                            <input type="text" placeholder="+91 -"></input>
                        </div>
                        <div className="btn">
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
