import React, { Fragment, useState,useContext } from "react";
import { FormContainer, LoginForm } from "./styledLogin";
import style from './login.module.css';
import { DataContext } from "../dataProvider";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {handleLogin} = useContext(DataContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    
  }
  
	return (
		<Fragment>
			<FormContainer>
				<LoginForm>
					<div className={style.heading}>Welcome</div>
					<form className={style.loginForm} onSubmit={handleSubmit}>
						<div className={style.inputContainer}>
							<label htmlFor="Email">Email:</label>
							<br />
							<input
								type={"text"}
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={style.inputField}
							/>
						</div>
						<div className={style.inputContainer}>
							<label htmlFor="password">Password:</label>
							<br />
							<input
								type={"password"}
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={style.inputField}
							/>
						</div>
						<div className={style.buttonContainer}>
							<button type="submit" className={style.loginBtn}>
								LOGIN
							</button>
						</div>
					</form>
				</LoginForm>
			</FormContainer>
		</Fragment>
	);
}

export default Login;
