import styled from 'styled-components';
import {Calendar as AntCalendar} from 'antd'


export const Calendar = styled(AntCalendar)` 
     
   border:1px solid 
   ${props => props.theme.colors.others.light_texts};
   border-radius:8px;
   
`;

export const ContainerHeader = styled.div`
      padding-top:10px;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100%;
     
`
export const Month = styled.p`
  font-weight:bold;
  font-size:20px;
  cursor:pointer;
`