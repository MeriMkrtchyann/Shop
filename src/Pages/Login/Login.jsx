import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.style.css"

export default function Login({ onLogin }){

    const [userEmail, setEmail] = useState("")
    const [userPassword , setUserPassword] = useState("")
    const [validationError, setValidationError] = useState("")


    const navigate = useNavigate()
    

    const check = () => {
      const storedUsers = localStorage.getItem("users")

      if (storedUsers){
        const users = JSON.parse(storedUsers)

        const isUserRegistered = users.some(
          (user) =>
            user.userEmail.toLowerCase() === userEmail.toLowerCase() &&
            user.userPassword === userPassword
        );

        if (isUserRegistered) {
          onLogin()
          navigate("/");
        } else {
          setValidationError('Пользователь не зарегистрирован. Создайте новый аккаунт.');
        }

      } else {
        setValidationError('Нет зарегистрированных пользователей. Создайте новый аккаунт.');
      }
    }
    

    return (
        <div className="login">
          <h2>Login</h2>
          <form className="loginForm">
              <label>Login:
                <input  type="email" id="username"  value={userEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>Password:
                <input type="password" id="password" value={userPassword} 
                  onChange={ (e) => setUserPassword(e.target.value)}
                />
              </label>
              <button className='loginButton' type="button" onClick = {check} >
                Login
              </button>
              <button className='createAccountButton' type="button" onClick = {()=> navigate("/registration")} >
                Create new account
              </button>
          </form>
          {validationError && <p>{validationError}</p>}
        </div>
      )
}