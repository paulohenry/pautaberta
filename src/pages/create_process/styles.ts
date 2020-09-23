import styled from 'styled-components';
import {
    Form as AntForm,
    Input,
    Tooltip,
    Radio as AntRadio,
    Modal as AntModal
    } from 'antd'

import { InfoCircleOutlined } from '@ant-design/icons'


export const Tool = styled(Tooltip)`
`
export const Info = styled(InfoCircleOutlined)`
`
export const Modal = styled(AntModal)`

`
export const Container = styled.div`
    margin:0 15px 0 15px;

`;

export const BtnCadastrar = styled.button`
    position:absolute;
    right:0;
    top:0;
    color:${props=>props.theme.colors.layout_colors.primary};
    font-weight:bold;
    background-color:${props=>props.theme.colors.layout_colors.tertiary};
    border:1px solid ${props=>props.theme.colors.layout_colors.tertiary};
    width:184px;
    height:56px;
    border-radius:8px;
    transition:opacity .3s;
    &:hover{
      opacity:0.8;
    }
`;
export const BtnVoltar = styled.button`
    position:absolute;
    left:0;
    top:0;
    color:${props=>props.theme.colors.layout_colors.light_texts};
    font-weight:bold;
    background-color:${props=>props.theme.colors.layout_colors.primary};
    border:1px solid ${props=>props.theme.colors.others.light_texts};
    width:184px;
    height:56px;
    border-radius:8px;
    transition:all .3s;
    &:hover{
      color:${props=>props.theme.colors.layout_colors.primary};
      background-color:${props=>props.theme.colors.layout_colors.light_texts};
      border:1px solid ${props=>props.theme.colors.layout_colors.light_texts};
    }
`;
export const Form = styled(AntForm)`

      margin:0 30px 15px 30px;
      background-color:
      ${props=>props.theme.colors.layout_colors.primary};
      border-radius:8px;
      border:1px solid ${props=>props.theme.colors.others.light_texts};

      padding:30px;
      height:auto;

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
export const ButtonsLine = styled(Form.Item)`
    position:relative;
    width:100%;
    margin-bottom:-30px;
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

