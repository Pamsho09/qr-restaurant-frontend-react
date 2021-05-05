import React,{useState} from "react";
import styled,{keyframe, keyframes} from "styled-components";
import { Link } from "react-router-dom";
const animate=keyframes`
 0%{
   opacity:0;

    transform: rotate(270deg);
  
   
  }
  100% {
    opacity:1;
  
  transform: rotate(0deg);
  }
`


function Header() {
  const [menu,setMenu]=useState(false)
  const HeaderC = styled.header`
   transition:all 0.5s ease-out;
.subMenu{
  display:none;
}
  @media (max-width: 450px) {
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;

    width: 6em;
  
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    .restaurant {
      width: 6em;
      z-index:11;
      height: 6em;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      h4 {
        display: none;
      }
      img {
        width: 100%;
   
        
      }
      
    }
    &:hover .menu {
        display: flex;
        width: 100%;
        flex-direction: column-reverse;
        gap: 1em;
        align-items: center;
      
        padding: 0;
        li {
          animation:${animate} 2s  cubic-bezier(0.42, 0, 0, 0.79); ;
          list-style: none;
          width: 100%;
          border-radius: 10px;
          background-image: linear-gradient(
            109.6deg,
            rgba(62, 161, 219, 1) 11.2%,
            rgba(93, 52, 236, 1) 100.2%
          );
          a {
            width: 100%;
            padding-top: 0.5em;
            padding-bottom: 0.5em;

            text-align: center;
            font-size: 16px;
            color: #fff;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }

    .menu {
      display: none;
    }
  }
  @media (min-width: 450.1px) and (max-width:1024px) {
    height: ${menu?"340px":"8em"};
    width: 100%;
    background-image: linear-gradient(
      109.6deg,
      rgba(62, 161, 219, 1) 11.2%,
      rgba(93, 52, 236, 1) 100.2%
    );
    z-index: 11;
    border-radius:0 0px  20px 20px;
   
    display: flex;
    justify-content: space-between;
flex-wrap:wrap;
    align-items: center;
    .restaurant {
      display: flex;
      gap: 1em;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 2em;
      h4 {
        display:none;
      }
    }
    img {
      width: 6em;
      border-radius: 50%;
    }
    .subMenu{
      display:flex;
      color:#fff;
      font-size:3em;
      margin-right:1em;
      padding:0.5em;
      :hover{
    
        border-radius:10px;
        background-color:rgba(256, 256, 256, 0.5)
      }
     
    }

    .menu {
      transition:all 1s ease-out;
      display:  ${menu?"flex":"none"};
      width:100%;
      flex-direction:column;
      gap: 1em;
      align-items:center;
      margin-right: 1em;
      list-style: none;
      flex-wrap:wrap;
      li {
        a {
          color: #fff;
          font-weight: 700;
          font-size: 2em;

          text-decoration: none;
          align-self: center;
          align-content: center;
          text-align: center;
          justify-content: center;
          align-items: center;

          span {
            margin-left: 0.5em;
          }
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (min-width: 1024.1px) {
    height: 8em;
    width: 100%;
    background-image: linear-gradient(
      109.6deg,
      rgba(62, 161, 219, 1) 11.2%,
      rgba(93, 52, 236, 1) 100.2%
    );
    z-index: 11;
    display: flex;
    justify-content: space-between;

    align-items: center;
    .restaurant {
      display: flex;
      gap: 1em;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 2em;
      h4 {
        font-weight: 700;
      }
    }
    img {
      width: 6em;
      border-radius: 50%;
      width:3em;
    }
    .menu {
      display: flex;
      gap: 3em;
      margin-right: 1em;
      list-style: none;
      li {
        a {
          color: #fff;
          font-weight: 700;
          font-size: 2em;

          text-decoration: none;
          align-self: center;
          align-content: center;
          text-align: center;
          justify-content: center;
          align-items: center;

          span {
            margin-left: 0.5em;
          }
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
  return (
    <HeaderC>
      <div className="restaurant">
        <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4159.png" />
        <h4>Name of restaurant</h4>
      </div>
      <div className="subMenu" onClick={()=>{setMenu(!menu)}}>
      <i class="fas fa-bars"></i>
      </div>
      <ul className="menu">
        <li>
          <Link to="/dashboard/orders" onClick={()=>{setMenu(!menu)}}>
            {" "}
            <i class="fas fa-child"></i>
            <span> Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/menu" onClick={()=>{setMenu(!menu)}}>
            <i class="fas fa-utensils"></i>
            <span> Menu</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/generate-code" onClick={()=>{setMenu(!menu)}}>
            {" "}
            <i class="fas fa-qrcode"></i>
            <span>Generate Code</span>{" "}
          </Link>
        </li>
        <li>
          <Link to="/dashboard/settings" onClick={()=>{setMenu(!menu)}}>
            {" "}
            <i class="fas fa-user-cog"></i>
            <span>Settings</span>{" "}
          </Link>
        </li>
      </ul>
    </HeaderC>
  );
}

export default Header;
