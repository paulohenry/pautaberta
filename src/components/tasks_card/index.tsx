import React from 'react'
import {Container} from './styles'

interface TasksCardProps{
    title:string;
    priority:string;
    status:string;
}

const Content:React.FC<TasksCardProps> = ({
  title,priority,status
}) => {

  return (
    <Container status={status}>
      <p>{title}</p>
      <span>{priority}</span>
    </Container>
  )
}
export default Content
