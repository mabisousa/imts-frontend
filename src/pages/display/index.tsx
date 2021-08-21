import React from 'react';

import { Title, Form, Cards } from './styles';
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Menu from "../../components/Menu";
import Filters from "../../components/Filter";

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <p>PROJETOS</p>
      </Header>

      <Profile/>
      <Menu/>
      <Filters/>

      <Cards> 
        <div id="cards">
         <a href="popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000000 - RESTAURAÇÃO DE ALTERADORES </p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
          </a>
          <a href="popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000000 - RESTAURAÇÃO DE ALTERADORES </p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
          </a>
          <a href="popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000000 - RESTAURAÇÃO DE ALTERADORES </p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>    
          </a>
          <a href="popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000000 - RESTAURAÇÃO DE ALTERADORES </p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>    
          </a>
          <a href="popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000000 - RESTAURAÇÃO DE ALTERADORES </p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>    
          </a>
          <a href="popUp" id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000000 - RESTAURAÇÃO DE ALTERADORES </p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>    
          </a>
        </div>
      </Cards>
    </>
  )
};

export default Home;