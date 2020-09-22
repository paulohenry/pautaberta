import React,{useState, useEffect} from 'react'
import {
  Container,
  Line,
  Form,
  ClienteItem,
  SituacaoItem,
  ProcessItem,
  FolderItem,
  OpponentItem,
  OpLawyerItem,
  JurisdictionItem,
  EllItem,
  TramitLocalItem,
  CountyItem,
  JuridicAreaItem,
  ProcedureItem,
  DegreeJuridictItem,
  CauseValueItem,
  ResponseItem,
  ClientInput,
  SituacaoInput,
  ProcessInput,
  FolderInput,
  OpponentInput,
  OpLawyerInput,
  JurisdictionInput,
  EllInput,
  TramitLocationInput,
  CountyInput,
  JuridicAreaInput,
  ProcedureInput,
  DegreeJuridictInput,
  CauseValueInput,
  ResponseInput,
  Button,
  Tool,
  Info,
  Radio,
  Urgency,
  High,
  Normal,
  Important

} from './styles'

import axios from '../../services/axios'

import Header from '../../components/header'




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


const CreateSchedule:React.FC = () => {

  const [user, setUser] = useState<UserProps>()
  const [valueProcess, setValueProcess] = useState('R$');

  const changeValueProcess = (value:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(value)

  }

  const onFinish = (values:any) => {
    console.log(values);
  };

  const handleApi = async()=>{
    const userData = await axios.get(`/users/${1}`)
    setUser(userData.data)
  }
  useEffect(()=>{
    handleApi()
  },[])

  return (
    <Container>
      <Header page="Cadastrar novo processo">
        {user && user.name}
      </Header>
      <Form onFinish={onFinish} name="normal_login" initialValues={{remember:true}} >
        <Line>
          <ClienteItem
            name="customer"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <ClientInput
                placeholder="Cliente"
                suffix={
                  <Tool title="Insira o nome do cliente">
                    <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                  </Tool>
                }
               />
         </ClienteItem>
          <SituacaoItem
           name="Situation"
           rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <SituacaoInput
              placeholder="Situação do cliente"
              suffix={
                <Tool title="Insira a situação do cliente">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }
              />
          </SituacaoItem>
        </Line>
        <Line>
          <ProcessItem
            name="process_number"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <ProcessInput
              placeholder="Numero do processo"
              suffix={
                <Tool title="Insira o número do processo">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }
             />
          </ProcessItem>
          <FolderItem
            name="folder"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <FolderInput
              placeholder="Pasta do processo"
              suffix={
                <Tool title="Insira a pasta do processo">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }
             />
          </FolderItem>
        </Line>
        <Line>
         <OpponentItem
            name="opponent"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
          <OpponentInput
              placeholder="Parte contrária"
              suffix={
                <Tool title="Insira o nome da parte contrária">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }
        />
         </OpponentItem>
         <OpLawyerItem
            name="opponent_lawyer"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
          <OpLawyerInput
              placeholder="Advogado contrário"
              suffix={
                <Tool title="Insira o nome do advogado contrário">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }
              />
         </OpLawyerItem>
        </Line>
        <Line>
         <JurisdictionItem
            name="jurisdiction"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <JurisdictionInput

              placeholder="Jurísdição"
              suffix={
                <Tool title="Insira a Jurísdição">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }/>
         </JurisdictionItem>
         <Form.Item
          name="priority"
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
        <Line>
          <EllItem
            name="ell"
            rules={[{required:true, message:'este é um campo obrigátorio'}]}>
              <EllInput
              placeholder="Vara de tramitação"
              suffix={
                <Tool title="Insira a vara por onde vai tramitar o processo">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }/>
          </EllItem>
          <TramitLocalItem
           name="tramit_local"
           rules={[{required:true, message:'este é um campo obrigátorio'}]}>
              <TramitLocationInput
              placeholder="Local de tramitação"
              suffix={
                <Tool title="Insira o local de tramitação">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }/>
          </TramitLocalItem>
          <CountyItem
           name="county"
           rules={[{required:true, message:'este é um campo obrigátorio'}]}>
              <CountyInput
              placeholder="Comarca"
              suffix={
                <Tool title="Insira a Comarca">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }/>
          </CountyItem>
        </Line>
        <Line>
          <JuridicAreaItem
          name="juridical_area"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <JuridicAreaInput
              placeholder="Área jurídica"
              suffix={
                <Tool title="Insira a área jurídica">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }/>
          </JuridicAreaItem>
          <ProcedureItem
          name="procedure"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <ProcedureInput
              placeholder="Procedimento"
              suffix={
                <Tool title="Insira o procedimento">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }/>
          </ProcedureItem>
          <DegreeJuridictItem
          name="degree_jurisdiction"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
              <DegreeJuridictInput
              placeholder="Grau de Jurisdição"
              suffix={
                <Tool title="Insira o grau de jurisdicão">
                  <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
                </Tool>
              }/>
          </DegreeJuridictItem>
        </Line>
        <Line>
          <CauseValueItem
          name="cause_value"
          rules={[{required:true,type:'string', message:'este é um campo obrigátorio e aceita apenas números'}]}>
            <CauseValueInput
              prefix="R$"
              suffix="BRL"
             placeholder="Valor da causa em R$"/>
          </CauseValueItem>
          <ResponseItem
          name="responsible"
          rules={[{required:true, message:'este é um campo obrigátorio'}]}>
            <ResponseInput
             placeholder="Responsável"
             suffix={
               <Tool title="Insira o responsavél">
                 <Info style={{ color: 'rgba(0,0,0,.45)' }}/>
               </Tool>
             }/>
          </ResponseItem>
        </Line>
        <Form.Item>
          <Button type="primary" htmlType="submit">Cadastrar</Button>
        </Form.Item>
      </Form>
    </Container>
  )
}
export default CreateSchedule
