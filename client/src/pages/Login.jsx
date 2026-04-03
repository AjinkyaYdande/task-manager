import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <section className="login-section">
                <div className="login-box">
                    <h3>Task Manager</h3>
                    <h2>Log into your account</h2>
                    <InputField
                        type="text"
                        minLength={8}
                        maxLength={15}
                        label="Username"
                        placeHolder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                    />
                    <InputField
                        type="password"
                        minLength={8}
                        maxLength={15}
                        label="Password"
                        placeHolder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <p>Forgot Password?</p>
                    <Button
                        onClick={() => handleLogin()}
                        label="LOGIN"
                        className="btn-landing-page"

                    />
                    <p>Don't have an account?
                        <span
                            className="register-link"
                            onClick={() => navigate('/register')}
                        >  Register</span></p>
                </div>
            </section>
        </>
    )
}

export default Login;