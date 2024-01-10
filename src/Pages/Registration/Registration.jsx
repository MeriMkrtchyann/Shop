import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { isValidUserName, isValidUserEmail, isValidPassword } from "../../Validation";
import { useNavigate } from 'react-router-dom';
import "./registration.style.css"
import "../firebase."

export default function Registration() {
  
  const [users, setUsers] = useState([]);
  const [userName, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storedUsers);
  }, [])

  const handleRegistration = async () => {

  const isValidUserNameResult = isValidUserName(userName)
  const isValidEmailResult  = isValidUserEmail(userEmail)
  const isValidPasswordResult= isValidPassword(userPassword)
  const isValid = isValidEmailResult && isValidUserNameResult && isValidPasswordResult;
  
  if (isValid) {
      const isUserExist = users.some(
        (user) => user.userName.toLowerCase() === userName.toLowerCase() || user.userEmail.toLowerCase() === userEmail.toLowerCase()
      );

      if (isUserExist) {
        setValidationError('User with this username or email already exists.');
      } else {
        try {
          const auth = getAuth();
          const userCredential = await createUserWithEmailAndPassword(auth , userEmail, userPassword);
          console.log("User registered successfully:", userCredential.user);

          const newUser = { userName, userEmail, userPassword };
          const updatedUsers = [...users, newUser];
          setUsers(updatedUsers)
          localStorage.setItem("users", JSON.stringify(updatedUsers))
          navigate('/login');
        } catch (error) {
          console.error("Registration error:", error.message);
          setValidationError('Registration failed. Please try again.');
        }
      }
  };
}

  console.log(users)
  console.log(localStorage)

  return (
    <div className="registration">
      <h2>Registration</h2>
      <form className="registrationForm">
        <label>
          Username:
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
        <button
          className="registrationButton"
          type="button"
          onClick={handleRegistration}
        >
          Register
        </button>
        <button
          className="backLoginButton"
          type="button"
          onClick = {()=> navigate("/login")}
        >
          Back to Login
        </button>
      </form>
      {validationError && <p>{validationError}</p>}
    </div>
  );
}
