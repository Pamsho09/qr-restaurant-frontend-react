import React,{useContext} from 'react'
import styled from "styled-components"
import Product from"./Product"
import AppContext from "../../context"

const Main =styled.div`
 background:#cccccc;
 width:95%;
 border-radius:15px;
 display:flex;
 padding:1em;
 flex-direction:column;
 .container-buttons{
     display:flex;
     justify-content:space-between;
     padding:1em;
    
     .btn-grad {background-image: linear-gradient(to right, #EB3349 0%, #F45C43  51%, #EB3349  100%)}
       
     .btn-grad {background-image: linear-gradient(to right, #06beb6 0%, #48b1bf  51%, #06beb6  100%)}
         .btn-grad {
        

            margin: 10px;
            padding: 15px 35px;
            border:none;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: flex;
            outline:none;
            justify-content:space-between;
            align-items:center;
            gap:1em;
           h1{
          font-family:"roboto"
           }
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            padding: 17px 45px;
            color: #fff;
            text-decoration: none;
          }
         
         
 }

 .container-saucers{
     width:100%;
     background:#fff;
     min-height:10em;
     border-radius:20px;
     height:auto;
     display:flex;
     flex-direction:column;
     align-items:center;
     gap:2em;
     padding-top:1em;
     padding-bottom:1em;

 }
`
function Products() {
    const {setModal}=useContext(AppContext)
    return (
        <Main>
            <div className="container-buttons">
                <h1>Saucers </h1>
                <button className="btn-grad "
                onClick={()=>{
                    setModal({state:true,type:"AddPruducts"})
                }}
                > <i class="fas fa-plus"></i> Add saucer</button>
            </div>
            <div className="container-saucers">
                <Product/>

                <Product/>
                <Product/>
                <Product/>
                <Product/>



            </div>


          
        </Main>
    )
}

export default Products
