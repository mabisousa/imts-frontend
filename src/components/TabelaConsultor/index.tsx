import React, { useState, useEffect, useCallback } from 'react';

import { Container, Tr } from './style';

import Popup from "../PopupConsultor";
import api from "../../services/api";

import { i18n } from '../../translate/i18n';

interface Consultores{
  idConsultor: number,
  consultorNome: string,
  consultorStatus: string,
  consultorValorHora: number,
  usuario: {
    email: string,
  },
  consultorAlocacoes: [
    {
      projeto: {
        id: number,
        projetoNome: string,
        projetoStatus: string,
      }
      skill: {
        skillNome: string,
      }
    }
  ],
  horasTotais: number,
  horasTrabalhadas: number
}

interface Consultor {
  status: string,
  pesquisa: string,
}

const TabelaConsultor: React.FC<Consultor> = ({status, pesquisa}) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [consultor, setConsultor] = useState<Consultores[]>([]);
  const [consulta, setConsulta] = useState<Consultores>();

  const handleMostrarPopup = (mostrarPop: boolean) => {
    setMostrarPopup(mostrarPop);
  }
  const handleAbrirPopup = useCallback((id: number) => {
    setMostrarPopup(!mostrarPopup);
    setConsulta(consultor[id-1]);

  },[consultor, setConsulta, setMostrarPopup, mostrarPopup]);

  useEffect(() => {
    if(status !== 'Todos'){
      api.get(`/consultores/status/${status}`).then((response) => {
        setConsultor(response.data)
      })
    } else {
      api.get(`/consultores`).then((response) => {
        setConsultor(response.data);
      })
    }
  }, [consultor, setConsultor, status]);
  
  return (
    <> 
      { consultor &&
        <Container>
          <table>
            <thead>
              <tr>
                <td>
                  {i18n.t('tabelaConsultor.cadastro')}
                </td>
                <td>
                  {i18n.t('tabelaConsultor.nome')}
                </td>
                <td>
                  {i18n.t('consultorPopup.status')}
                </td>
                <td>
                  {i18n.t('projetos.titulo')}
                </td>
                <td>
                  {i18n.t('tabelaConsultor.detalhes')}
                </td>
              </tr>
            </thead>
            <tbody>
              {pesquisa ? 
                consultor.filter((consultor) => consultor.consultorNome.toLowerCase().includes(pesquisa.toLowerCase())).map(consultor => (
                  <Tr color={consultor.consultorStatus}>
                    <td>
                      {consultor.idConsultor}
                    </td>
                    <td>
                      {consultor.consultorNome}
                    </td>
                    <td>
                      {consultor.consultorStatus}
                    </td> 
                    <td>
                      {consultor.consultorAlocacoes.length}
                    </td>
                    <button onClick={() => handleAbrirPopup(consultor.idConsultor)} key={consultor.idConsultor}>
                      <td> + </td>
                    </button>
                  </Tr>
                ))
              :
                consultor.map((consultor) => (
                  <Tr color={consultor.consultorStatus}>
                    <td>
                      {consultor.idConsultor}
                    </td>
                    <td>
                      {consultor.consultorNome}
                    </td>
                    <td>
                      {consultor.consultorStatus}
                    </td> 
                    <td>
                      {consultor.consultorAlocacoes.length}
                    </td>
                    <button onClick={() => handleAbrirPopup(consultor.idConsultor)} key={consultor.idConsultor}>
                      <td> + </td>
                    </button>
                  </Tr>
                ))
              }
            </tbody>
          </table>
        </Container>
      } 
        
      { mostrarPopup && consulta &&
        <Popup id={consulta.idConsultor} mostrarPopup={handleMostrarPopup}/>
      }
    </>
  )
};

export default TabelaConsultor;
