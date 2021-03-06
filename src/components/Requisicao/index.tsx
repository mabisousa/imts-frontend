import React,{ useCallback, useState  }  from 'react';

import {RiArrowLeftSLine} from 'react-icons/ri';

import { Fundo, Container } from './style';

import { i18n } from '../../translate/i18n';
import api from '../../services/api';
import { toast } from 'react-toastify';

interface Selecionados {
  idApontamento: number,
}

interface MostrarRequest {
  responsavel: {
    idResponsavel: number,
  },
  consultor: {
    idConsultor: number,
  },
  selecionados: Selecionados[],
  mostrarRequisicao: (args0: boolean) => void
}

const Requisicao: React.FC<MostrarRequest> = ({ selecionados, consultor, responsavel, mostrarRequisicao}) => {

  const [conteudo, novoConteudo] = useState('');
  const [revisao, setRevisao] = useState(false);

  const requisicao = {
    consultor: {
      idConsultor: 0
    },
    responsavel: {
      idResponsavel: 0
    },
    apontamentos: [
      {
        idApontamento: 0
      }
    ],
    requisicaoDescricao: ""
  }

  const confirmarRequisicao = useCallback(() => {
    setRevisao(true);
  }, []);

  const enviarRequisicao = useCallback(async () => {

    try {
      requisicao.requisicaoDescricao = conteudo
      requisicao.consultor.idConsultor = consultor.idConsultor
      requisicao.responsavel.idResponsavel = responsavel.idResponsavel

      // if(selecionados.length > 0) {
         requisicao.apontamentos = selecionados
      // } else {

      //   toast.error("Selecione apontamentos para reprovar." , {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });

      //   return
      // }
      

      api.post(`requisicoes/inserir`,requisicao).then((response) => {

        toast.success("Requisição enviada com sucesso." , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
    } catch(e) {
      toast.error("Erro ao enviar requisição." , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(e)
    }
    mostrarRequisicao(false)
  }, [consultor.idConsultor, conteudo, mostrarRequisicao, requisicao, responsavel.idResponsavel, selecionados]);

  return (
    <>
      <Fundo> 
        <Container id="request" enviar={!!revisao}>
          {!revisao ? 
            <>
              <div>
                <RiArrowLeftSLine onClick={() => mostrarRequisicao(false)}/>
                <p>
                  {i18n.t('requisicao.requisicao')}
                </p>
              </div>
              <textarea id="text"
                value={conteudo}
                onChange={e => novoConteudo(e.target.value)}
              />
              <button onClick={confirmarRequisicao}>
                {i18n.t('requisicao.enviar')}
              </button>
            </>
          :
            <>
              <div>
                <p>
                  {i18n.t('requisicao.confirmar')}
                </p>
              </div>
              <div>
                <button onClick={() => setRevisao(false)}>
                  {i18n.t('requisicao.nao')}
                </button>
                <button onClick={enviarRequisicao}>
                  {i18n.t('requisicao.sim')}
                </button>
              </div>
            </>
          }    
        </Container>
      </Fundo>
    </>
  )
};

export default Requisicao;