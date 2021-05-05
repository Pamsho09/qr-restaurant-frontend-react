import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../context";
import AddProducts from "./types/AddProducts"
function Modal() {
  const { state, setModal } = useContext(AppContext);
  const { modal } = state;

  const ModalC = styled.div`
    display: ${modal.state ? "flex" : "none"};
    position: absolute;
    justify-content: center;
    align-items: center;

    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    .container-modals {
      width: 60%;
      min-height:50vh;
      height: auto;
      background: #fff;
      border-radius: 30px;
      position: relative;
      display:flex;
      justify-content:center;
      .back {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #4d4d4d;
        font-size: 3em;
      }
    }
  `;
  return (
    <ModalC>
      <div className="container-modals">
        <div className="back">
          <i
            class="fas fa-times-circle"
            onClick={() => {
              setModal({
                state: false,
                type: null,
              });
            }}
          ></i>
        </div>


        {modal.type=="AddPruducts"?<AddProducts/> :"ERROR"}
      </div>
    </ModalC>
  );
}

export default Modal;
