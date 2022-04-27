import { useGlobalState } from "../../context/GlobalState";
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react"
import jwtDecode from "jwt-decode";


const Login = ({toggleModal}) => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
        navigate('/profile')
      });
  }

  return (
    <div className="login">
    <div className="login-content">
      <div className="login-container">
        <div className="login-title">Login</div>
        <div className="login-close">
          <img
            alt="close"
            onClick={() => toggleModal(false)}
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
          />
        </div>
      </div>
      <div className="login-subtitle"></div>
      <div className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          </div>
          <div>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  </div>



























    // <div className="c-form">
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label htmlFor="username">Username:</label>
    //       <input
    //         type="text"
    //         id="username"
    //         name="username"
    //         onChange={(e) => setUsername(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="pass">Password</label>
    //       <input
    //         type="password"
    //         id="pass"
    //         name="password"
    //         minLength="8"
    //         required
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <input
    //       type="submit"
    //       value="Sign in"
    //     />
    //   </form>
    // </div>
  )

}

export default Login