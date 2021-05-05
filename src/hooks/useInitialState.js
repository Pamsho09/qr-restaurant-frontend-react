import { useState } from "react";
const initialState = {
  stateCard: false,
  dataInfo: [],
  token:localStorage.getItem("token"),
  modal:{
    state:true,
    type:null

  }
};
const UseInitialState = () => {
  const [state, setState] = useState(initialState);
  
  const setToken=(payload)=>{
console.log(payload)
    setState({
      ...state,
      token:payload
    })
  }

const setModal=(payload)=>{

  setState({
    ...state,
    modal:payload
  })
}

  const changeState = (payload) => {
    console.log(state)
    setState(payload);
  };

  return { state, setToken,setModal };
};

export default UseInitialState;
