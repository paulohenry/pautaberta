import styled from 'styled-components';
import {
    Form as AntForm,
    Button as AntButton,
    InputNumber as InputNum,
    Input,
    Tooltip,
    Radio as AntRadio
    } from 'antd'

import { InfoCircleOutlined } from '@ant-design/icons'


export const Tool = styled(Tooltip)`
`
export const Info = styled(InfoCircleOutlined)`
`

export const Container = styled.div`
    margin:0 15px 0 15px;

`;

export const Button = styled(AntButton)`

`
export const Form = styled(AntForm)`

      margin:0 30px 15px 30px;
      background-color:
      ${props=>props.theme.colors.layout_colors.primary};
      border-radius:8px;
      border:1px solid ${props=>props.theme.colors.others.light_texts};
      padding:30px;
      height:100vh;

`;

export const ClienteItem = styled(Form.Item)`
    width:60%;
    height:46px;
    margin-right: 5%;

`
export const SituacaoItem = styled(Form.Item)`
    width:35%;
    height:46px;
`
export const ProcessItem = styled(Form.Item)`
    width:60%;
    height:46px;
    margin-right: 5%;

`
export const FolderItem = styled(Form.Item)`
    width:35%;
    height:46px;
`

export const OpponentItem = styled(Form.Item)`
    width:47.5%;
    height:46px;
    margin-right: 5%;
`
export const OpLawyerItem = styled(Form.Item)`
    width:47.5%;
    height:46px;

`
export const JurisdictionItem = styled(Form.Item)`
    width:47.5%;
    height:46px;

`

export const EllItem = styled(Form.Item)`
    width:30%;
    height:46px;
    margin-right:5%;
`
export const TramitLocalItem = styled(Form.Item)`
    width:30%;
    height:46px;
    margin-right:5%;
`
export const CountyItem = styled(Form.Item)`
    width:30%;
    height:46px;

`
export const JuridicAreaItem = styled(Form.Item)`
    width:30%;
    height:46px;
    margin-right:5%;
`
export const ProcedureItem = styled(Form.Item)`
    width:30%;
    height:46px;
    margin-right:5%;
`
export const DegreeJuridictItem = styled(Form.Item)`
     width:30%;
    height:46px;
`
export const CauseValueItem = styled(Form.Item)`
     width:47.5%;
    height:46px;
    margin-right:5%;
`
export const ResponseItem = styled(Form.Item)`
     width:47.5%;
    height:46px;
`

export const Line = styled.span`
      display:flex;
      width:100%;
      height:46px;
      margin-bottom:30px;
      align-items:center;
`;

export const ClientInput = styled(Input)`
    border-radius:8px;
    padding:10px;
`
export const SituacaoInput = styled(Input)`
    border-radius:8px;
    padding:10px;
`
export const ProcessInput = styled(Input)`
    border-radius:8px;
    padding:10px;
`
export const FolderInput = styled(Input)`
    border-radius:8px;
    padding:10px;
`
export const OpponentInput = styled(Input)`
    border-radius:8px;
    padding:10px;
`
export const OpLawyerInput = styled(Input)`
    border-radius:8px;
    padding:10px;
`

export const JurisdictionInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;

`
export const EllInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;
`
export const TramitLocationInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;
`
export const CountyInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;
`


export const JuridicAreaInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;
`
export const ProcedureInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;
`
export const DegreeJuridictInput = styled(Input)`

    border-radius:8px;
    padding:10px;
    width:100%;
`
export const CauseValueInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;
`
export const ResponseInput = styled(Input)`
    border-radius:8px;
    padding:10px;
    width:100%;
`


export const Radio = styled(AntRadio.Group)`

    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    margin-left:20%;

`
export const Normal = styled(AntRadio.Button)`

    :hover{
      color:#000;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.normals};
    }
    .ant-radio-button-checked{
      z-index:-1;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.normals};
    }
`;
export const Important = styled(AntRadio.Button)`
    margin-left:10px;
   :hover{
      color:#FFF;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.important};
    }
    .ant-radio-button-checked{
      z-index:-1;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.important};
    }
`;
export const High = styled(AntRadio.Button)`
    margin-left:10px;
   :hover{
      color:#FFF;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.high_priority};
    }
    .ant-radio-button-checked{
      z-index:-1;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.high_priority};
    }

`;

export const Urgency = styled(AntRadio.Button)`
    margin-left:10px;
    z-index:2;
   :hover{
      color:#FFF;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.urgents};

    }
    .ant-radio-button-checked{
      z-index:-1;
      border-color:none;
      background-color:${props=>props.theme.colors.priority_colors.urgents};
    }

`;

