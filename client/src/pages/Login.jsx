import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <section className="login-section">
                <div className="login-box">
                    <h3>Task Manager</h3>

                    {isLogin ? <h2> Log into your account </h2> :
                        <h2>Create a free account</h2>}
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
                    {isLogin ?
                        <p>Forgot Password?</p> : <p></p>
                    }
                    <Button
                        onClick={() => handleLogin()}
                        label={isLogin ? "LOGIN" : "REGISTER"}
                        className="btn-landing-page"

                    />
                    {isLogin ?
                        <p>Don't have an account?
                            <span
                                className="register-link"
                                onClick={() => setIsLogin(!isLogin)}
                            > Register
                            </span>
                        </p> :
                        <p>Already have an account?
                            <span
                                className="register-link"
                                onClick={() => setIsLogin(!isLogin)}
                            > Login
                            </span>
                        </p>
                    }
                </div>
            </section>
        </>
    )
}

export default Login;