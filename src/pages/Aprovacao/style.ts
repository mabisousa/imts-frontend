import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width:100%;
  height:85vh;
  padding: 1% 8% 1% 8%;

  h1 {
    font-size: 1em;
    font-weight:500;
    margin:10px 0;
  }

  #finalizar {
    height: 50px;
    padding: 10px;
    color: #fff;
    background-color: #28B9DA;
    border: none;
  }
`;

export const Infos = styled.div`
  height: 40vh;
  width: 30vw;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2%;

  form {
    height: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
      }
    }
  }  
`;

export const Count = styled.div`
  height: 40vh;
  width: 20vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: -70px;   
  transition: 1s;

  div {
    .hold {
      display: flex;
      flex-direction: row;
      align-items:center;
      margin:10px 0;
      background: #fff;

      .numbers {
        margin: 0 20px 0px 0px;
        width: 40px;
        height: 40px;
        border: 1px solid #8B8787;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        font-size: .9em;
      }
    }

    .hold:nth-child(1) {
      .numbers {
        p {
          font-size: 1.12em;
          color: #7E7E7E90;
        }
      }
    }

    .hold:nth-child(2) {
      .numbers {
        p {
          font-size: 1.12em;
          color: #13B77C;
        }
      }
    }

    .hold:nth-child(3) {
      .numbers {
        p {
          font-size: 1.2em;
          color: #AC341A;
        }
      }
    }
  }

  button {
    border: 0;
    width: 80%;
    height: 50px;
    font-size: .9em;
    color: #fff;
    background: #28B9DA;
    transition: 1s;
  }

  #description {
    width: 115%;
    height: 100%;
    padding: 15px;
    border: 1px solid #8B8787;  
    background: #fff;
    position: absolute;
    display: none;

    h1 {
      font-size: 1em;
      width: 100%;
      height: 30px;
      border-bottom: 2px solid #8B8787;
    }

    p {
      padding: 5px;
      font-size: .9em;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 7.5px;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 15px solid #8B8787;
    }
  }
`;

export const Info = styled.div`
  height: 50px;
  max-width: 250px;
  border: 1px solid #a2a2a2;
  padding: 15px;
  color: #a2a2a2;
`;

export const Apontamentos = styled.div`
  width: 22vw;
  height: 300px;
  position: relative;

  table{
    border-collapse: collapse;
    width: 100%;
    font-size: .9em;       
    
    button{
      background: transparent;
      border: 0;
      font-size: 1.25em;
    }
    
    thead tr{
      background: #0075B1;
      color: #fff;
    }
            
    tbody {
      height: 300px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid #8B8787;

      span {
          position: relative;
          top: 120px;
          left: 40px;
      }
    }

    tr{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-bottom: 1px solid #8B8787;
      height: 56px;
    }

    td{
      display: flex;
      justify-content: space-evenly;
      width: 60px;
    }
      
    td:nth-child(1){
      width: 40px;
    }
  }
`;

export const Title = styled.h1`
  font-weight:normal;
  font-size: 1.25em;
  text-decoration: underline #0075B1;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 6rem 0rem 0rem 7rem;
`;

export const ProgressBar = styled.div`
  height:120px;
  width:55vw;
  
  .headers {
    height: 50px;
    display: flex;
    justify-content: space-between;
    text-align: center; 
    padding: 0px 11%;

    p {
      width:100px;
      height: 50px;
      font-weight: bold;
      color: #00579D;
    }
  }

  .steps {
    position: relative;
    display:flex;
    justify-content: space-evenly;
    margin-top: 2px;
    color: #fff; 
  }
`;

interface StepActive {
  isActive: boolean;
}

export const Step = styled.div<StepActive>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1.5s;

  &::before {
    z-index: -2;
    content: ' ';
    position: absolute;
    top: 45%;
    width:25%;
    height: 5px;
    background: #8B8787;
  }

  img {
    height: 20px;
    width: 20px;
  }

  ${(props) => props.isActive ?
    css`
      background: #448DCA;
      transition: 1s;

      &::before {
        z-index: -2;
        content: ' ';
        position: absolute;
        top: 45%;
        width:25%;
        height: 5px;
        background: #448DCA;
        transition: 1s;
      }
  `:
    css`
      background: #8B8787;
  
      &::before {
        z-index: -2;
        content: ' ';
        position: absolute;
        top: 45%;
        width:25%;
        height: 5px;
        background: #8B8787;
      }
  `}
`;

interface PopUp {
  show: boolean;
}
    
export const Consultores = styled.div<PopUp>`
    
  ${(props) => !props.show && 
    css`
      div {
        visibility: hidden;
      }
  `}
  
  transition: 200ms ease-in-out;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  
  #hold{
    background-color: #fff;
    height: 600px;
    width: 75%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    color: black;
    font-size: 1.9em;
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 200px;
    bottom: 567px;
  }

  table{
    border-collapse: collapse;
    width: 85%;
    text-align: center;
  }

  thead tr{
    text-transform: uppercase;
    font-size: .9em;
    background: #0075B1;
    color: #fff;
  }

  tr{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #8B8787;
    border-top: 0;
    height: 56px;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    font-size: .9em;
    background: #fff;
    
    td{
      width: 150px;
    }
    
    td:nth-child(2){
      width: 450px;
      text-align: start;
    }

    button{
      background: #fff;
      border: 0;
      font-size: 1.25em;
    }
  }

  tbody {
    height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid #8B8787;
  }
`;

interface colorConsultores{
  color: string;
}
  
export const Tr = styled.div<colorConsultores>`
  cursor: pointer;
  
  ${(props) => props.color === "ATIVO" &&
    css`
      td:nth-child(3){
        color: #000;
      }
  `}

  ${(props) => props.color === "INATIVO" && 
    css`
      td:nth-child(3){
        color: #AC341A;
      }
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #8B8787;
  border-top: 0;
  height: 56px;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  font-size: .9em;

  td{
    width: 150px;
  }
    
  td:nth-child(2){
    width: 450px;
    text-align: start;
  }

  button{
    background: #fff;
    border: 0;
    font-size: 1.25em;
  }
`;

export const Buttons = styled.div`
  width: 10vw;
  height: 20vh;
  position: absolute;
  right: 0vw;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  visibility: hidden;

  Button:nth-child(1) {
    background-color: #8B8787;
  }
  Button:nth-child(2) {
    background-color: #28B9DA;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Description {
  open: boolean;
}

export const Descriptions = styled.div<Description>`
  width:0;
  right: 100%;
  height: 270px;
  background: #fff;
  position: absolute;
  top: 0;

  ${(props) => !!props.open ?
    css`
      width: 330px;
      visibility: visible;
      background: #fff;
      border-left: 1px solid #8B8787;
      border-top: 1px solid #8B8787;
      border-bottom: 1px solid #8B8787;
      transition: 1.5s;

      header {
        width: 100%;
        height: 55px;
        border-bottom: 1px solid #8B8787;
        padding:15px 0px 15px 15px;
        align-items: center;
        font-size: 1em;
        display: flex;
        justify-content: space-between;

        p {
          transition: 0.5s;
          transition-delay: 1.5s;
        }
        span {
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          border-right: 20px solid #0075B1;
          transition-delay:1.5s;
        }
      }

      div {
        width: 100%;
        height: 100%;
        padding: 10px;

        p {
          transition: 0.5s;
          transition-delay: 1.5s;
        }
      }
   
    ` : 
    css`
      visibility: hidden;
      width: 0px;

      header p, span{
        display: none;
      }
      div {
        display: none;
      }
    `}
`;