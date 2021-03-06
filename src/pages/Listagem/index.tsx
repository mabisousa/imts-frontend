import React, { useState } from 'react';

import { Container, Filtros, Titulo, Formulario, Filtro } from './style';

import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import TabelaListagem from "../../components/TabelaListagem";

import { i18n } from '../../translate/i18n';

interface tema{
  alternarTema(): void
}

const Listagem: React.FC<tema> = ({alternarTema}) => {
  const [pesquisa, setPesquisa] = useState('');
  
  return (
    <>  
      <Container>
        <Cabecalho alternarTema={alternarTema}>
          <p>
            {i18n.t('listagem.tituloPag')}
          </p>
        </Cabecalho>
        <Menu/>
        <Filtros>
          <Titulo>
            {i18n.t('listagem.titulo')}
          </Titulo>
          <Filtro>
            <Formulario>
              <label>
                {i18n.t('consultores.nome')}
              </label>
              <input placeholder={i18n.t('consultores.placeHolder')} 
                value={pesquisa} onChange={(ev) => setPesquisa(ev.target.value)}/>
            </Formulario>
          </Filtro>
        </Filtros>
        <TabelaListagem/>
      </Container>
    </>
  )
};

export default Listagem;
