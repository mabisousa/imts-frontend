import React, { useCallback, useEffect, useState } from 'react';
import { Cards, Card, TitleSection, TitleProject, HoldHours, Hours, Status, Date, Title, Form, Filters, Filter, Container, TitlePopUp, InfosPopup, InfosGerais, Objetivo, Horas, HorasApontadas, Skills, Table, ConsultoresAlocados, DetailsPopup} from './style';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { IoIosArrowDown } from 'react-icons/io';
import display1 from '../../imgs/display1.svg';
import display2 from '../../imgs/display2.svg';
import api from "../../services/api"
import Popup from "../../components/PopupProjetos"
import Chart from 'react-google-charts';
import { BsX } from 'react-icons/bs';
import Grid from '../../components/Grid';

interface Projetos{
  id: number,
  secao: string,
  nome: string,
  descricao: string,
  consultores: [{
    id: number,
    nome: string,
    skill: string
  }],
  status: string,
  dataInicio: string,
  dataFim: string,
  horasApontadas: number,
  horasTotal: number,
}

const Home: React.FC = () => {

  const [isOpen, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [projetos, setProjeto] = useState<Projetos[]>([]);
  const [show, setShow] = useState(false);

  const handleOpen = useCallback(() => {
      if(!!isOpen === false) {
        setOpen(true);    
      } else {
        setOpen(false);    
      }
    }, [isOpen, setOpen]);

  const handleShow = useCallback(() => {
    if(!!show === false) {
      setShow(true);    
    }
  }, [show, setShow]);

  const handleNotShow = useCallback(() => {
    if(!!show !== false) {
      setShow(false);    
    }
  }, [show, setShow]);

  useEffect(() => {
    api.get("/projetos").then((response) => {
      setProjeto(response.data)
    })
  }, []);

  return (
    <>
      <Header>
        <p>PROJETOS</p>
      </Header>
      
      <Profile/>
      <Menu/>
      <Filters>
        <div>
            <Title>
              PROJETOS ALOCADOS
            </Title>
            <div>
                <Filter>
                    <Form >
                        <label>Projeto:</label>
                        <input type="text" placeholder="Digite aqui... "/>
                    </Form>
                    <p>Seção:</p>
                    <div>
                        <span>Todos</span>
                        <IoIosArrowDown id="img" size={17}/>
                    </div>
                    <p>Status:</p>
                    <div>
                        <span>Todos</span>
                        <IoIosArrowDown id="img" size={17}/>
                    </div>
                </Filter>
                <button onClick={handleShow}><img src={display1} alt=""/></button>
                <button onClick={handleNotShow}><img src={display2} alt=""/></button>
            </div> 
        </div>
      </Filters>
      <Cards > 
      {projetos.map((projeto) => (
        <Card Show={!!show} color="#EBB93A" onClick={() => setShowPopup(!showPopup)} key={projeto.id}>
          <TitleSection Show={!!show}>000 - {projeto.secao}</TitleSection>
          <TitleProject Show={!!show}>{projeto.id} - {projeto.nome} </TitleProject>
          <HoldHours Show={!!show}>
            <Hours Show={!!show}>
              <p>Total:</p>
              <p>{projeto.horasTotal}</p>
            </Hours>
            <Hours Show={!!show}>
              <p>Apontadas:</p>
              <p>{projeto.horasApontadas}</p>
            </Hours>
          </HoldHours>
          <Status Show={!!show}>
            <p>Situação: </p>
            <p>{projeto.status}</p>
          </Status>
          <Date Show={!!show}>
            <p>De: {projeto.dataInicio}</p>
            <p>Até: {projeto.dataFim}</p>
          </Date>
        </Card>
      ))}
      </Cards>
      {showPopup && 
        <Container Open={!!isOpen}  show={!!showPopup}>
        <div id="hold">
          <button onClick={() => setShowPopup(!showPopup)}><BsX/></button>
          <TitlePopUp>
            <h2> 0000 - SEÇÃO XYZ</h2>
            <h1>0000000 - RESTAURAÇÃO DE ALTERADORES</h1>
          </TitlePopUp>
          <InfosPopup>
            <InfosGerais Open={!!isOpen}  className="cont">
              <h1>INFORMAÇÕES GERAIS:</h1>
              <div>
                <p>GESTOR RESPONSÁVEL: </p>
                <p>FORNECEDOR: </p>
              </div>
            </InfosGerais>
            <Objetivo Open={!!isOpen} className="cont">
              <h1>OBJETIVO: </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur officiis ducimus ut debitis mollitia modi 
                  tempora unde nobis reiciendis illum libero ipsam excepturi
                  itaque aperiam quae assumenda praesentium, maxime consequatur.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur officiis ducimus ut debitis mollitia modi 
                  tempora unde nobis reiciendis illum libero ipsam excepturi
                  itaque aperiam quae assumenda praesentium, maxime consequatur.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur officiis ducimus ut debitis mollitia modi 
                  tempora unde nobis reiciendis illum libero ipsam excepturi
                  itaque aperiam quae assumenda praesentium, maxime consequatur.
              </p>
            </Objetivo>
            <Horas Open={!!isOpen}  className="cont">
              <h1>HORAS: </h1>
              <HorasApontadas>
                <Chart
                  width={'160px'}
                  height={'160px'}
                  rootProps
                  chartType="PieChart"
                  data={[
                    ['Task', 'Hours per Day'],  
                    ['Total', 10],
                    ['Apontadas', 10]
                  ]}
                  options={{
                    pieHole: 0.7  ,
                    tooltip: { trigger: 'none'},
                    legend: 'none',
                    backgroundColor: '',
                    pieSliceText: 'none',
                    slices: {
                      0: { color: '57b7dc' },
                      1: { color: 'B4DDFB' },
                    },  
                  }}
                />
                <div>
                  <p>TOTAL:
                    <span>1600h</span> 
                  </p> 
                  <p>APONTADAS:
                    <span>800h</span>
                  </p>
                </div>
              </HorasApontadas>
            </Horas>
            <Skills Open={!!isOpen}  className="cont">
              <Table id="table">
                <table>
                  <thead>
                    <tr>
                      <td>SKILL</td>
                      <td>HORAS APONTADAS</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Desenvolvimento PHP</td>
                      <td>40H</td>
                    </tr>
                    <tr>
                      <td>Desenvolvimento JAVA</td>
                      <td>15H</td>
                    </tr>
                    <tr>
                      <td>Desenvolvimento React</td>
                      <td>20H</td>
                    </tr>
                  </tbody>
                </table>
              </Table>
              <button id="visualizar" onClick={handleOpen}>VISUALIZAR CONSULTORES</button>
            </Skills>
            <ConsultoresAlocados Open={!!isOpen}>
              <table>
                <thead>
                  <tr>
                    <td>CADASTRO</td>
                    <td>NOME</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr><tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr><tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                  <tr>
                    <td>67270</td>
                    <td >Isac Freire Bezerra</td>
                  </tr>
                  <tr>
                    <td>67271</td>
                    <td>Jean Henrique Reiguel</td>
                  </tr>
                </tbody>
              </table>
            </ConsultoresAlocados>
          </InfosPopup>
          <DetailsPopup>
            <Grid/>
            <h1>EM ANDAMENTO</h1>
          </DetailsPopup>
        </div>
      </Container>
      }
    </>
                
  ) 
};

export default Home;