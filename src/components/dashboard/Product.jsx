import React from "react";
import styled from "styled-components";
const ProdcutC = styled.div`
  width: 95%;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
background:#F1ECE1;
border-radius:20px;
  .btn-grad {
    background-image: linear-gradient(
      to right,
      #e53935 0%,
      #e35d5b 51%,
      #e53935 100%
    );
  }
  .btn-grad {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
  }

  .btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  button {
    border: none;
  }
  .container-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
.container-name{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
    img {
      width: 7em;
    }

    .btn-grad-edit {
      background-image: linear-gradient(
        to right,
        #00c6ff 0%,
        #0072ff 51%,
        #00c6ff 100%
      );
    }
    .btn-grad-edit {
      margin: 10px;
      padding: 15px 45px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
      display: block;
    }

    .btn-grad-edit:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }
`;
function Product() {
  return (
    <ProdcutC>
      <div className="container-product">
        <img src="https://cnet4.cbsistatic.com/img/_ZCD3xc0rvCDHBdyeBY3rdiPwas=/940x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg" />
        <div className="container-name">
        <h2>Hamburgesa</h2>
        <span>ID:08921049012</span>
        </div>
        <h3>$60</h3>
        <div className="buttons">
          <button className="btn-grad ">
            <i class="far fa-trash-alt"></i>
          </button>
          <button className="btn-grad-edit">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    </ProdcutC>
  );
}

export default Product;
