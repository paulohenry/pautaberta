import React,{useState, useEffect} from 'react'
import Header from '../../components/header'
import axios from '../../services/axios'
import {Link,useHistory} from 'react-router-dom'
import choosePriority from '../../utils/choosePriority'
import formattedDateUS from '../../utils/formattedDateUS'

import {
  Container,
  Line,
  Form,
  TitleInput,
  ProcessItem,
  ProcessInput,
  CustomerInput,
  DescriptionInput,
  ResponseInput,
  TitleItem,
  CustomerItem,
  DescriptionItem,
  ResponseItem,
  Radio,
  Normal,
  Important,
  Urgency,
  High,
  Tool,
  Info,
  ButtonsLine,
  BtnVoltar,
  BtnCadastrar,
  DatePicker,
  Modal
  } from './styles'



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

const CreateTasks:React.FC = () => {

  const [user, setUser] = useState<UserProps>()
  const [date, setDate] = useState('')
  const history = useHistory()

  const datePicker = (date:any, dateString:string)=>{
      console.log(date, dateString);
      setDate(dateString);
  }

  const successAlert = ()=>{
    Modal.success({
      content: 'registro salvo com sucesso',
    });
    history.push('/home')
  }
  const errorAlert = ()=>{
    Modal.error({
      title: 'Mensagem de erro',
      content: 'Ocorreu um erro ao tentar salvar o registro',
    });
  }

  const onFinish =async(values:any)=>{
    try{
      await axios.post(`/tasks`,{
       user_id:user?.id,
       title:values.title,
       process:values.process ,
       customer:values.customer,
       description:values.description,
       date:formattedDateUS(date),
       responsible:values.responsible,
       status:values.status,
       priority:choosePriority(values.status)
      })
      successAlert()
     }catch(error){
      errorAlert()
     }
  }

  const handleApi = async()=>{
    const userData = await axios.get(`/users/${1}`)
    setUser(userData.data)
  }
  useEffect(()=>{
    handleApi()
  },[])


  return (
    <Container>
          <Header page="Cadastrar nova tarefa">
          {user && user.name}
        </Header>
        <Form onFinish={onFinish} name="normal_login" initialValues={{remember:true}}>
          <Line>
          <TitleItem
          name="title"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <TitleInput
            placeholder="Título"
            suffix={
              <Tool title="Insira o título da tarefa">
                <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
              </Tool>
              }/>
          </TitleItem>
          </Line>
          <Line>
          <ProcessItem
          name="process"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <ProcessInput
            placeholder="Processo"
            suffix={
              <Tool title="Insira o número do processo">
                <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
              </Tool>
              }/>
          </ProcessItem>
          </Line>
          <Line>
          <CustomerItem
          name="customer"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <CustomerInput
            placeholder="Cliente"
            suffix={
              <Tool title="Insira o cliente">
                <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
              </Tool>
              }/>
          </CustomerItem>
          </Line>
          <Line>
          <DescriptionItem
          name="description"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <DescriptionInput
            placeholder="Descrição da tarefa"
            suffix={
              <Tool title="Insira a descrição da tarefa de forma sucinta">
                <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
              </Tool>
              }/>
          </DescriptionItem>
          </Line>
          <Line>
          <ResponseItem
          name="responsible"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <ResponseInput
            placeholder="Responsável pela execução da tarefa"
            suffix={
              <Tool title="Insira o responsável pela execução da tarefa">
                <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
              </Tool>
              }/>
          </ResponseItem>
          </Line>
          <Line>
            <DatePicker onChange={datePicker}/>
           <Form.Item
            name="status"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <Radio buttonStyle="solid">
              <Normal
              value="normal">NORMAL</Normal>
              <Important
              value="important">IMPORTANTE</Important>
              <High
              value="high">ALTA</High>
              <Urgency
              className="urgency"
              value="urgency">URGENTE</Urgency>
            </Radio>
           </Form.Item>
          </Line>
          <Line className="line-button">
          <ButtonsLine>
            <Link to="/home">
              <BtnVoltar>Voltar</BtnVoltar>
            </Link>
            <BtnCadastrar type="submit" >Cadastrar</BtnCadastrar>
          </ButtonsLine>
        </Line>
        </Form>
    </Container>
  )
}


export default CreateTasks
