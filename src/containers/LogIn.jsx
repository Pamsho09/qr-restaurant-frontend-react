import React, { useState, useRef,useContext } from "react";

import AppContext from "../context"
import { Link,useHistory } from "react-router-dom";
import styled from "styled-components";

const SignInC = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #08aeea;
  background-image: linear-gradient(214deg, #08aeea 0%, #2af598 100%);

  font-family: "Roboto", sans-serif;
  h3 {
    font-weight: 400;
  }
  h1 {
    font-size: 4em;
    color: #565656;
    margin-bottom: 0;
  }
  .container {
    width: 532px;
    height: auto;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1em;
    a {
      color: #4dbef1;
      text-decoration: none;
    }
    form {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 1em;
      .name,
      h3 {
        font-weight: 700;
        grid-column: 1/3;
        font-weight: 400;
      }
      input {
        width: 100%;
        border-radius: 10px;
        height: 3em;
        outline: none;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        box-sizing: border-box;
        padding: 1em;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 17px;
      }
      .term {
        grid-column: 1/3;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        input {
          width: 10px;
          opacity: 0;
        }
      }
      .send {
        grid-column: 1/3;
        box-shadow: none;
        color: #fff;
        font-family: 400;
        text-transform: capitalize;
        background-color: #4dbef1;
        text-align: center;
        :hover {
          background-color: #89cfef;
        }
      }
    }
  }
`;
function SignIn() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  let history=useHistory(null)

  const {setToken}=useContext(AppContext)
  const HandleSubmit = (e) => {
    e.preventDefault();
    fetch(`/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
       
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((response) => 
        response.json()
     )
      .then((data) => {
        console.log(data)
      localStorage.setItem("token",data.token)
      setToken(data.token)
      
      history.push('/dashboard')
    
      });
    console.log(pass, email);
  };
  return (
    <SignInC>
      <div className="container">
        <h1>Sign in</h1>
        <h3>
          Don't have an account yet? <Link to="/signup">Sign up</Link>{" "}
        </h3>

        <form method="POST" onSubmit={HandleSubmit}>
          <input
            required
            className="name"
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
            onChange={() => {
              setEmail(emailRef.current.value);
            }}
          />
          <input
            required
            className="name"
            type="password"
            name="pass"
            ref={passRef}
            placeholder="Password"
            onChange={() => {
              setPass(passRef.current.value);
            }}
          />

          <input className="send" type="submit" value="Join" />
        </form>
      </div>
    </SignInC>
  );
}

export default SignIn;
