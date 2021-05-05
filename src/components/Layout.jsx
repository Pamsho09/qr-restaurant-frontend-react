import React from 'react'
import Header  from "./Header"
import Footer from "./Footer"
import Modal from "../modals/Modal" 
import styled from "styled-components"
const LayoutC =styled.div`
position:relative;
`
function Layout({children}) {
    return (
        <LayoutC>
            <Header/>
            {children}
            <Footer/>
            <Modal/>
        </LayoutC>
    )
}

export default Layout
