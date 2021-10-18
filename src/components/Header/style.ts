import styled, { css } from "styled-components";

interface dropdownProps {
  showDropdown: boolean;
  showIdioms: boolean;
  showFonts: boolean;
  changeTheme: boolean;
  darkMode: boolean;
}

export const Container = styled.div<dropdownProps>`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: 2px solid #90C0E3;  

  ${(props) => props.darkMode ?
    css`
      background: #fff; 
      #name{
        p{
          color: #00579D;
        }
      }  
      #exit{
        svg{
          color: #7E7E7E;
        }
      }   
      #sair {
        color: #00579D;
        border-left: 1.5px solid #00579D;
      }
      #dropdown{
        border: solid 1px #7E7E7E;
        background-color: #FFF; 

        button{
          border-bottom: solid 1px #7E7E7E;
          color: #7E7E7E;
        }
      }
    `: css`
      background: #1B2126;
      #name{
        p{
          color: #fff;
        }
      } 
      #exit{
        svg{
          color: #fff;
        }
      }  
      #sair {
        color: #fff;
        border-left: 1.5px solid #fff;
      }
      #dropdown{
        border-bottom: solid 1px #fff;
        background-color: #1F262B; 

        button{
          color: #fff;
        }
      }
    `}

  #name{
    width:220px;
    display: flex;
    align-items: center;
    
    img{
      margin:0 30px;
      height: 70px;
      cursor: pointer;
    }
    
    p {
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
    }
  }

  #exit{
    width: 60px;
    height: 30px;
    margin: 5px 20px 5px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
    svg{
      height: 20px;
      width: 20px;
      cursor: pointer;
      margin-right: 7px;
      margin-top: 10px;
    }

    #sair {
      font-size: .9em;
      width: 40px;
      cursor: pointer;
      text-align: center;
      margin-top: 7px;
    }
  }

  #dropdown{
    position: absolute;
    right: 62px;
    top: 35px;
    cursor: pointer;
    min-width: 180px;
    height: auto;

    ${(props) => props.showDropdown ?
      css`
        display: none;
      `: css`
        display: block;
      `}

    svg{
      height: 27px;
      width: 27px;
      margin: 4px 8px 4px 8px;
    }

    button{ 
      width: 100%;
      border: none;
      display: flex;
      min-height: 35px;
      align-items: center;
      background-color: transparent;

        p{
          min-height: 20px;
          font-size: 1em;
        }

        img{
          height: 30px;
          width: 30px;
          margin-left: 8px;
          margin-right: 8px;
        }

        span{
          min-height: 20px;
          font-size: .9em;
        }
    }

    #idioms, #fonts{
      img{
        height: 25px;
        width: 25px;
        cursor: pointer;
        margin-left: 16px;
        margin-right: 8px;
      }                
    }
      
    #idioms{
      height: 105px;

      ${(props) => props.showIdioms ?
      css`
        display: none;
      `: css`
        display: block;
      `}  
    }

    #fonts{
      height: 70px;
        
      ${(props) => props.showFonts ?
      css`
        display: none;
      `: css`
        display: block;
      `}
    }

    #switchThemeLight{
      ${(props) => props.changeTheme ?
      css`
        display: block;
      `: css`
        display: none;
      `}
    }

    #switchThemeDark{
      ${(props) => props.changeTheme ?
      css`
        display: none;
      `: css`
        display: block;
      `}
    }     
  }
`;