import "/src/styles/Header.css"
import styled from "styled-components";
import AppBarMenu from "./AppBarMenu";
import React, { useState, useEffect } from 'react';

import { FaGithub } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoLogoTux } from "react-icons/io5";

export default function Header(){

  const [menu, setMenu] = useState(false);

  const body = document.querySelector('body');

  function handleClick(){
    setMenu(true);
    body.style.overflow = 'hidden';
  }


  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 256px);
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 999; 
    display: ${({ menu }) => (menu ? 'block' : 'none')}; 
  `;

  function removeMenu(){
    setMenu(false);
    body.style.overflowY = 'scroll';
  }

  
  return(
    <header className="boxHeader">
      <div className="identityContainer">
        <IoLogoTux size={42} />
        <p>Linux World</p>
        <nav className="menuNavigation">
          <a href="#informacoes">Informações</a>
          <a href="#contato">Realizar Contato</a>
        </nav>
      </div>
      <div className="containerAccessMenu">
        <a href="https://github.com/ThiagoSilvaOf" target="_blank"><FaGithub size={28} /></a>
        <IoIosMenu onClick={handleClick} size={28}  />
      </div>
      <Overlay onClick={removeMenu} menu={menu} /> 
      <AppBarMenu menu={menu} />
    </header>
    
  )
}