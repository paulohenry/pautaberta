import styled from 'styled-components';
import  {CardStatusProps} from 'card-status'


const chooseColor = (color:string) =>{
   if(color==='progress') {
      return '#0091FF'
   }
   if(color==='opens'){
      return '#E6E6E6'
   }
   if(color==='waitings'){
    return '#C8372D'
   }
   if(color==='solveds'){
     return '#29CC97'
   }else{
     return '#252733'
   }
}


export const Container = styled.div<CardStatusProps>`
  
  display:flex;
  flex-direction:column;
  
  width:30%;
 
  margin:30px 15px 0px 15px;
  justify-content:center;
  align-items:center;  
  
  padding:20px 0 20px 0;
  
  
  border-radius:8px;
  border:2px solid ${props=>chooseColor(props.borderColor)};
  color:${props=>chooseColor(props.contentColor)};

  cursor:pointer;
  z-index:5;
  transition:all 0.3s;
 
  >h1{
    color:${props=>chooseColor(props.contentColor)};
    font-weight:bold; 
    margin:0;
    padding:0; 
  }
  >p{
    font-size:20px;
    font-weight:bold;
    color:${props=>chooseColor(props.borderColor)};
    
  }
  &:hover{
    box-shadow:0 0 25px ;
    transform:translateY(-5px);
    ${props=>chooseColor(props.borderColor)};
  }
  
`;