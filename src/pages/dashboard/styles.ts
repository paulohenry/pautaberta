import styled from 'styled-components';
import {Link as SLink} from 'react-router-dom'

export const Link = styled(SLink)`
    text-decoration:none;
    font-weight:bold;   
    color:${props=>props.theme.colors.others.normals}; 
    cursor:pointer;   
`;
export const Container = styled.div`
   display:flex;
   flex-direction:column;
   overflow-y:hidden;
`;

export const CalendarContainer = styled.div`  
    margin:15px;    
    width:30vw;    
    max-height:100%;
   
    >h3{
        margin-bottom:30px;
        font-weight:bold;
        font-size:20px;
    }  
`

export const ScheduleContainer = styled.div`
    display:flex;    
    margin:15px 30px 30px 30px;
    background-color:
    ${props=>props.theme.colors.layout_colors.primary};
    border:1px solid ${props=>props.theme.colors.others.light_texts};
    border-radius:8px;    
    overflow:hidden;
    
    
`;

export const Schedule = styled.div`
    margin:15px;    
    width:40vw; 
   
    >h3{
        margin-bottom:15px;
        font-weight:bold;
        font-size:20px;
    }
`;

export const CardContainer = styled.div`
    position:relative;

    display:flex;
    justify-content:space-between;
    align-items:flex-end;
       
    height:195px;
    margin:0px 30px 0 30px;
    padding-bottom:15px;

    border:1px solid ${
    props=>props.theme.colors.others.light_texts};
    border-radius:8px;
    background-color:${
    props=>props.theme.colors.layout_colors.primary};
    
    
    >h1{
        position:absolute;
        left:15px;
        top:15px;
        font-size:24px;
        font-weight:bold;
    }
`;

export const InfosContainer = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;   
        width:74.5vw;
        height:100%;
        margin:0 0 10px 30px;
        
`
export const LatestProcess = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    width:37vw;
    height:40vh;
    margin-right:10px;
    border-radius:8px;
    border:1px solid 
    ${props=>props.theme.colors.others.light_texts};
    background-color:${props=>props.theme.colors.layout_colors.primary};

    >span{
        display:flex;
        justify-content:space-between;
        margin-bottom:20px;
    }
`
export const ScheduleList = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    height:40vh;
    width:37vw;
    border-radius:8px;
    margin-left:10px;
    border:1px solid 
    ${props=>props.theme.colors.others.light_texts};
    background-color:${props=>props.theme.colors.layout_colors.primary};

    >span{
        display:flex;
        justify-content:space-between;
        margin-bottom:20px;
      }
`