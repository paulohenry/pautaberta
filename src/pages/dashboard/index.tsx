import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import {
  Container,
  ScheduleContainer,
  CardContainer,
  CalendarContainer,
  Schedule,
  InfosContainer,
  LatestProcess,
  Tasks,
  TasksList,
  Searcher,
  Link
} from './styles'

import axios from '../../services/axios'
import CardStatus from '../../components/card_status'
import Header from '../../components/header'
import ScheduleCard from '../../components/schedule_card'
import Calendar from '../../components/calendar'
import ProcessCard from '../../components/process_card'
import TasksCard from '../../components/tasks_card'

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
interface ScheduleProps{
      id:number;
      user_id:number;
      date:string;
      schedules:{
        title:string;
        description:string;
        hourly:string;
        priority:string;
      }[]
}

interface StatusProcess{
  id:number;
  id_user:number;
  latest:string;
  process_number:number;
  status:string;
  priority:string;
}
interface TaskesProps{
  id:number;
  user_id:number;
  title:string;
  process:number;
  customer:string;
  description:string;
  date:string;
  responsible:string;
  priority:string;
  status:string;
}


const Dashboard:React.FC = () => {


  const [user, setUsers] = useState<UserProps>()
  const [schedule, setSchedule] = useState<ScheduleProps>()
  const [statusProcess, setStatusProcess] = useState<StatusProcess[]>([])
  const [tasks, setTaskes] = useState<TaskesProps[]>([])
  const history = useHistory()
  const handleApi = async()=>{
      const userData = await axios.get(`/users/${1}`)
      const scheduleData =  await axios.get(`/schedule/${1}`);
      const statusProcess = await axios.get(`/status_process`)
      const taskesData = await axios.get(`/tasks`)
      setStatusProcess(statusProcess.data)
      setSchedule(scheduleData.data);
      setUsers(userData.data)
      setTaskes(taskesData.data)
      console.log(statusProcess.data,scheduleData.data,userData.data,taskesData.data)
  }
 const callTasks = ()=>{
    history.push('/tasks/create')
 }
  useEffect(()=>{
      handleApi()
  },[])

  return (
    <Container>{
      user && <>
         <Header page="Home">{user.name}</Header>
      <CardContainer>
        <h1>Total de processos</h1>
        <CardStatus
          borderColor='progress'
          contentColor='progress'
          status='Em andamento'
          quantities={user.resume_process.progress}/>
        <CardStatus
          borderColor='solveds'
          contentColor='solveds'
          status='Resolvidos'
          quantities={user.resume_process.solveds}/>
        <CardStatus
          borderColor='opens'
          contentColor='black'
          status='Abertos'
          quantities={user.resume_process.opens}/>
        <CardStatus
          borderColor='waitings'
          contentColor='waitings'
          status='Aguardando'
          quantities={user.resume_process.waitings}/>
      </CardContainer>
        <ScheduleContainer>
          <CalendarContainer>
            <h3>Agenda</h3>
            <Calendar/>
          </CalendarContainer>
          <Schedule>
            <h3>Atividades do dia</h3>
             {schedule && schedule.schedules.map((card,index)=>{
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
             <div>
              {statusProcess.length>0 && statusProcess.map((process,index)=>{
                return(
                    <ProcessCard
                      key={index}
                      number={process.process_number}
                      latest={process.latest}
                      status={process.priority}
                      priority={process.status}/>
                   )
                })}
             </div>
           </LatestProcess>
           <Tasks>
             <span>
              <h3>Tarefas</h3>
              <Link to="/tasks/create">
                ver todos
              </Link>
             </span>
             <p>hoje</p>
             <Searcher>
                <p>criar nova tarefa</p>
                <button type="button" onClick={()=>{callTasks()}}>
                  <p> + </p>
                </button>
             </Searcher>
             <TasksList>
               {tasks && tasks.map((task,index)=>{
                 return(
                   <TasksCard
                     key={index}
                     title={task.title}
                     priority={task.priority}
                     status={task.status}/>
                 )
               })}
             </TasksList>
           </Tasks>
        </InfosContainer>
        </>
        }
    </Container>
  )
}
export default Dashboard
