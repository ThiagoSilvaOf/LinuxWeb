import { IoMdHome } from "react-icons/io";
import { GrBlog } from "react-icons/gr";
import { SiGooglemessages } from "react-icons/si";
import { FaSearchPlus } from "react-icons/fa";
import styled from "styled-components";
import React from "react";


const BoxMenu = styled.div`
 opaity: 0;
 position:fixed;
 width:256px;
 height:100%;
 overflow-y:auto;
 top:0;
 right: 0;
 background-color: #ffffff;
 box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12);
 transform: translateX(100%);
 transition: transform 0.2s ease-out; 

 &.active {
    opaity: 1;
   transform: translateX(0);
 }

`

const MenuItensBox = styled.div`
  display: flex;
  flex-direction: column;
  gap:26px;
  padding-top:20px;
  padding-left:12px;
`

const MenuItem = styled.span`
  display: flex;
  align-items: center;
  cursor:pointer;

  P{
    padding-left: 24px;
  }
`



export default function AppBarMenu({menu}){
  return(
    <BoxMenu className={menu ? 'active' : ''}> 
      <MenuItensBox> 
        <MenuItem>
          <IoMdHome size={24}/> 
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <GrBlog size={24}/>
          <p>Acessar Blog</p>
        </MenuItem>
        <MenuItem>
          <SiGooglemessages size={24}/> 
          <p>Realizar Contato</p>
        </MenuItem>
        <MenuItem>
          <FaSearchPlus size={24}/>
          <p>Saiba Mais</p>
        </MenuItem>
      </MenuItensBox>
    </BoxMenu>
  )
}