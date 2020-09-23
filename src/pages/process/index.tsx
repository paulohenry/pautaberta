import React,{useState, useEffect} from 'react'
import {ReactComponent as IconOrder} from '../../assets/ordernate.svg'
import tryicons from '../../assets/tryicons.png'
import { ReactComponent as TryDots} from '../../assets/trydots.svg'

import {
  Container,
  ListProcess,
  SearcherContainer,
  BtnNewProcess,
  SearcherInput,
  IconSearch,
  IconFilter,
  BtnOrder,
  BtnFilter,
  TableContainer,
  Tag
 } from './styles'

import Header from '../../components/header'
import axios from '../../services/axios'
import {Link} from 'react-router-dom'
import compareDate from '../../utils/compareDate'


interface UserProps{
  id:string;
  name:string;
  login:string;
  resume_process:{
      opens:number;
      progress:number;
      waitings:number;
      solveds:number;
  }
}
interface StatusProcess{
  id:number;
  id_user:number;
  updated_at:string;
  process_number:number;
  status:string;
  priority:string;
  customer:string;
}

const Process:React.FC = () => {

  const [user, setUser] = useState<UserProps>()
  const [processList, setProcessList] = useState<StatusProcess[]>([])

  const handleApi = async()=>{
    const userData = await axios.get(`/users/${1}`)
    const statusProcess = await axios.get(`/status_process?user_id=${userData.data.id}`);
    setProcessList(statusProcess.data)
    setUser(userData.data)

  }

  useEffect(()=>{
    handleApi()
  },[])


  return (
    <Container>
     <Header page="Processos">{user && user.name}</Header>
      <span>
        <Link to="/process/create">
         <BtnNewProcess>
            + Novo Processo
         </BtnNewProcess>
        </Link>
      </span>
      <ListProcess>
        <SearcherContainer>
          <SearcherInput
            prefix={<IconSearch/>}
            placeholder="Pesquisar"/>
          <span>
            <BtnOrder>
              <IconOrder/>
              Ordenar
            </BtnOrder>
            <BtnFilter>
              <IconFilter />
              Filtro
            </BtnFilter>
          </span>
        </SearcherContainer>
        <TableContainer>
          <thead>
            <tr>
              <th>Detalhes do Processo</th>
              <th>Cliente</th>
              <th>Data de criação</th>
              <th>Prioridade</th>
              <th>Ações Rápidas</th>
              <th> +  </th>
            </tr>
          </thead>
          <tbody>
            {processList.length>0?(
                processList.map((processo, index)=>{
                  return(
                    <tr key={index}>
                        <td>
                          <span>{processo.process_number}</span>
                          <span>{compareDate(processo.updated_at)}</span>
                        </td>
                        <td>{processo.customer}</td>
                        <td>{processo.updated_at}</td>
                        <td><Tag status={processo.status}>{processo.priority}</Tag></td>
                        <td>
                           <img src={tryicons} alt="try-icons"/>
                        </td>
                        <td>
                            <TryDots/>
                        </td>

                    </tr>
                  )
                })
            ):(
              <div>Não a processos para mostrar por favor crie um novo processo</div>
            )}
          </tbody>
        </TableContainer>
      </ListProcess>
    </Container>
  )
}
export default Process
