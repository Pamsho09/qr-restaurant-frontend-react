import React, { useState, useRef } from "react";

import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import check from "../assets/cheque.svg";
const SignUpC = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #74ebd5;
  background-image: linear-gradient(204deg, #74ebd5 0%, #9face6 100%);
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
        input[type="checkbox"]:checked + .check {
          background: #4dbef1;
          background-image: url(${check});
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .check {
          border-radius: 10px;
          width: 30px;
          height: 30px;

          box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 5px;

          display: flex;
          background-size: cover;
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
function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [nameRestaurant, setNameRestaurant] = useState(null);

  let history = useHistory();
  const [address, setAddress] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const restaurantRef = useRef(null);
  const addressRef = useRef(null);
  const HandleSubmit = (e) => {
    e.preventDefault();
    fetch(`/addUser/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        username: name,
        email: email,
        password: pass,
        nameRestaurant: nameRestaurant,
        address: address,
      }),
    })
      .then((response) => (response.json()))
      .then((data) => {
        console.log(data);

        history.push("/login");
      });
   
  };
  return (
    <SignUpC>
      <div className="container">
        <h1>Create account</h1>
        <h3>
          Already have an account? <Link to="/signin">Sign in</Link>{" "}
        </h3>

        <form method="POST" onSubmit={HandleSubmit}>
          <input
            required
            type="text"
            className="name"
            placeholder="Name"
            ref={nameRef}
            onChange={() => {
              setName(nameRef.current.value);
            }}
          />
          <input
            required
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
            type="password"
            name="pass"
            ref={passRef}
            placeholder="Password"
            onChange={() => {
              setPass(passRef.current.value);
            }}
          />

          <input
            required
            type="text"
            className="name"
            placeholder="Name of the restaurant"
            ref={restaurantRef}
            name="restaurant"
            onChange={() => {
              setNameRestaurant(restaurantRef.current.value);
            }}
          />
          <input
            required
            type="text"
            name="address"
            placeholder="Address"
            ref={addressRef}
            onChange={() => {
              setAddress(addressRef.current.value);
            }}
          />
          <div className="term">
            <input required type="checkbox" id="check" />
            <label for="check" name="check" className="check">
              {" "}
            </label>
            <label>
              I have read and agree to the <Link>Terms of Service</Link>
            </label>
          </div>
          <input className="send" type="submit" value="register" />
        </form>
      </div>
    </SignUpC>
  );
}

export default SignUp;
