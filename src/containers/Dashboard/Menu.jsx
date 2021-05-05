import React from 'react'
import styled from 'styled-components'
import Products from "../../components/dashboard/Products"
const MenuC=styled.div`
 position:relative;
  height:90vh;
  width:100%;
  background-color:#f5f4f4;
  display:grid;
  grid-template-columns:1fr 1fr;
 column-gap:1em;

  grid-template-rows:5em auto;
.title{
    grid-column:1/3;
    height:2em;
}
`
function Menu() {
    return (
        <MenuC>
            <h1 className="title">Menu settings</h1>
            <Products/>
          



        
        </MenuC>
    )
}

export default Menu
