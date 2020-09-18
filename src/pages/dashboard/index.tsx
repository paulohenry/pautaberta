import React,{useEffect,useState} from 'react'

import {
  Container,
  ScheduleContainer,
  CardContainer,
  CalendarContainer,
  Schedule,
  InfosContainer,
  LatestProcess,
  ScheduleList,
  Link
} from './styles'

import CardStatus from '../../components/card_status'
import Header from '../../components/header'
import ScheduleCard from '../../components/schedule_card'
import Calendar from '../../components/calendar'
import axios from '../../services/axios'


interface UserProps{
    id:string;  
    name:string;
    login:string;
    status_process:{
      opens:number;
      solveds:number;
      progress:number;
      waitings:number;
    }
    schedule:{
      date:string;
      schedules:{
        title:string;
        description:string;
        hourly:string;
        priority:string;        
      }[]
    }[]
}

const Dashboard:React.FC = () => {


  const [user, setUsers] = useState<UserProps>()
  
  const handleApi = async()=>{
      const {data} = await axios.get(`/users/${1}`)
      console.log(data) 
      setUsers(data)   
  }
 
  useEffect(()=>{
      handleApi()
  },[])

  return (
    <Container>{ 
      user && <>
         <Header>{user.name}</Header>
      <CardContainer>
        <h1>Total de processos</h1>
        <CardStatus 
          borderColor='progress'
          contentColor='progress'
          status='Em andamento'
          quantities={user.status_process.progress}/> 
        <CardStatus 
          borderColor='solveds'
          contentColor='solveds'
          status='Resolvidos'
          quantities={user.status_process.solveds}/>
        <CardStatus 
          borderColor='opens'
          contentColor='black'
          status='Abertos'
          quantities={user.status_process.opens}/>  
        <CardStatus 
          borderColor='waitings'
          contentColor='waitings'
          status='Aguardando'
          quantities={user.status_process.waitings}/>                    
      </CardContainer>
        <ScheduleContainer>
          <CalendarContainer> 
            <h3>Agenda</h3>            
            <Calendar/>
          </CalendarContainer>  
          <Schedule>
            <h3>Atividades do dia</h3>    
             {user.schedule[0].schedules.map((card,index)=>{
               return(
                 <ScheduleCard 
                  key={index}
                  title={card.title}
                  hourly={card.hourly}
                  description={card.description}
                  priority={card.priority}/>
               )
             })}
          </Schedule>      
        </ScheduleContainer>
        <InfosContainer>
           <LatestProcess>
             <span>
              <h3>Últimos processos</h3>
              <Link to="/process/create">
                ver todos            
              </Link>
             </span>

           </LatestProcess>
           <ScheduleList>
             <span>
              <h3>Tarefas</h3>
              <Link to="/schedule/create">
                ver todos             
              </Link>
             </span>      
                 
           </ScheduleList>
        </InfosContainer>
        </>
        }
    </Container>
  )
}
export default Dashboard