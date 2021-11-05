import React, { useCallback, useState, useContext } from "react";
import { Container } from './style';

import bandeiraBrasil from "../../assets/brazilFlag.svg";
import bandeiraEspanha from "../../assets/spainFlag.svg";
import bandeiraEUA from "../../assets/usaFlag.svg";
import logo from "../../assets/logo.svg";

import tamanhoFonte from "../../js/fontSize";

import { IoSettingsSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { Type } from "react-bootstrap-icons";

import { i18n } from "../../translate/i18n";
import Switch from "react-switch"
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Link } from "react-router-dom";

interface tema{
  alternarTema(): void
}

const Header: React.FC<tema> = ({alternarTema, children,...props}) => {
  
  const [mostrarDropdown, setMostrarDropdown] = useState(true);
  const [mostrarIdiomas, setMostrarIdiomas] = useState(true);
  const [mostrarFonte, setMostrarFonte] = useState(true);
  const { cor, titulo } = useContext(ThemeContext);

  const handleMostrarDropdown = useCallback(() => {
    if(!!mostrarDropdown === false) {
      setMostrarDropdown(true);    
    }else {
      setMostrarDropdown(false);    
    }
  }, [mostrarDropdown, setMostrarDropdown]); 

  const handleMostrarIdiomas = useCallback(() => {
    if(!!mostrarIdiomas === false) {
      setMostrarIdiomas(true);    
    }else {
      setMostrarIdiomas(false);    
    }
  }, [mostrarIdiomas, setMostrarIdiomas]); 

  const handleMostrarFonte = useCallback(() => {
    if(!!mostrarFonte === false) {
      setMostrarFonte(true);    
    }else {
      setMostrarFonte(false);    
    }
  }, [mostrarFonte, setMostrarFonte]); 
  
  const sairDoSistema = () => {
    localStorage.removeItem("@WEGusers:token");
    localStorage.removeItem("@WEGusers:usuario");

    window.document.location.reload()
  }

  const handleMudarIngles = () => {
    localStorage.setItem('i18nextLng', 'en-US');
    window.location = window.location
  }

  const handleMudarPortugues = () => {
    localStorage.setItem('i18nextLng', 'pt-BR');
    window.location = window.location
  }

  const handleMudarEspanhol = () => {
    localStorage.setItem('i18nextLng', 'es-ES');
    window.location = window.location
  }
  
  return( 
    <Container showFonts={!!mostrarFonte} 
      showIdioms={!!mostrarIdiomas} showDropdown={!!mostrarDropdown} {...props}> 
      <div id="name">
        <Link to="/home"><img src={logo} alt=""/></Link>
        {children}
      </div>   
      <div id="exit">
        <div onClick={handleMostrarDropdown} >
          <IoSettingsSharp />
        </div> 
        <p id="sair" onClick={sairDoSistema}>
          {i18n.t('cabecalho.sair')}
        </p>
      </div>
      <div id="dropdown">
        <button onClick={handleMostrarIdiomas}>
          <IoLanguage /> 
          <p>
            {i18n.t('cabecalho.idioma')}
          </p>          
        </button>
        <div id="idioms">
          <button  onClick={handleMudarEspanhol}>
            <img src={bandeiraEspanha} alt=""/> 
            <span >
              Español
            </span> 
          </button>
          <button onClick={handleMudarIngles}>
            <img src={bandeiraEUA} alt=""/> 
            <span>
              English
            </span> 
          </button>
          <button onClick={handleMudarPortugues}>
            <img src={bandeiraBrasil} alt=""/>
            <span>
              Português do Brasil
            </span> 
          </button>
        </div>
        <button onClick={handleMostrarFonte}>
          <Type/>
          <p >
            {i18n.t('cabecalho.fonte')}
          </p> 
        </button>
        <div id="fonts">
          <button onClick={() => tamanhoFonte("pequeno")}>
            <Type/>
            <span>
              {i18n.t('cabecalho.pequeno')}
            </span> 
          </button>
          <button onClick={() => tamanhoFonte("medio")}>
            <Type/> 
            <span>
              {i18n.t('cabecalho.medio')}
            </span> 
          </button>
          <button onClick={() => tamanhoFonte("grande")}>
            <Type/>
            <span>
              {i18n.t('cabecalho.grande')}
            </span> 
          </button>   
        </div>
        <button>
          <Switch
            onChange={alternarTema}
            checked={titulo === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={30}
            handleDiameter={20}
            offColor={shade(0.15, cor.undeline)}
            onColor={cor.undeline}
          />
          <p>
            {i18n.t('cabecalho.tema')}
          </p> 
        </button> 
      </div>
    </Container>
  )
}

export default Header;