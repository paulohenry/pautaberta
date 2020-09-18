import styled from 'styled-components';
import {ScheduleCardProps} from 'schedule-card';


const chooseColor = (color:string) =>{
  if(color==='urgency') {
     return '#FEC400'
  }
  if(color==='normal'){
     return '#9FA2B4'
  }
  if(color==='high'){
   return '#C8372D'
  }
  if(color==='important'){
    return '#29CC97'
  }else{
    return '#252733'
  }
}


export const Container = styled.div<ScheduleCardProps>` 

    display:flex;
    position:relative;
    width:100%;
    height:80px;
    margin-bottom:10px;
    cursor:pointer;
    border:1px solid 
    ${props=>props.theme.colors.others.light_texts};
    border-radius:8px;
    transition:all .3s;
    >span{
      position:absolute;
        left:0;
        height:100%;
        width:10px;
        background-color:
        ${props=>props.priority && chooseColor(props.priority)};
        border-top-left-radius:8px;
        border-bottom-left-radius:8px;
    }

    &:hover{
      transform:translateX(-10px);
      box-shadow: 0 0 12px ${props=>props.priority && chooseColor(props.priority)};
    }
    
`;


export const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    flex:1;
    height:100%;
    overflow:hidden;
    text-overflow:'.';
    padding:15px 5px 15px 15px;    
`
export const Title = styled.p`
  font-weight:bold;
`
export const Hourly = styled.p`
    
    
`;
export const Description = styled.p`
    white-space: nowrap;
    font-style:italic;
    margin-left:40%;
    width:100%;
    text-overflow:'.';   
`;