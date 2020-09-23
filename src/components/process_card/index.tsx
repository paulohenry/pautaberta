import React from 'react'
import {
  Container,
  ContentContainer
} from './styles'

interface ICreateProcessProps {
  number:number;
  latest?:string;
  status:string;
  priority:string;
}


const Content:React.FC<ICreateProcessProps> = ({
  number,latest,status,priority
}) => {

  return (
    <Container borderColor={priority}>
      <ContentContainer>
          <h4>{number}</h4>
          <p>{latest}</p>
      </ContentContainer>
      <span>{status}</span>
    </Container>
  )
}
export default Content
