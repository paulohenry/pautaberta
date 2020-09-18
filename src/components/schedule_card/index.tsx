import React from 'react'
import {
    Container, 
    ContentContainer,
    Title,
    Hourly,
    Description
  } from './styles'

import {ScheduleCardProps} from 'schedule-card'

const ScheduleCard:React.FC<ScheduleCardProps> = ({
  title,hourly,description,priority
}) => { 
  return (
    <Container 
      priority={priority}>    
       <span/>
       <ContentContainer>
       <Title>{title}</Title>         
       <Hourly>{hourly}</Hourly>
       <Description>{description}</Description>         
       </ContentContainer>       
    </Container>
  )
}
export default ScheduleCard