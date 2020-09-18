import React,{useState} from 'react'
import {Calendar as AntCalendar,Month,ContainerHeader} from './styles'

type mode = "year"|"month"|undefined;

const Calendar:React.FC = () => {

  const [change, setChange]=useState<mode>("month")

  const changeToMonth = ()=>{
        if(change==="month"){
          setChange("year")
        }else if(change==="year"){
          setChange("month")
        }
  }
 
   return (       
       <AntCalendar 
       fullscreen={false}
       mode={change}
       headerRender={()=>{
         return(
           <ContainerHeader>
             <Month onClick={()=>{changeToMonth()}}>Setembro </Month>
           </ContainerHeader>
         )
       }}/> 
    )
}
export default Calendar