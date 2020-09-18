import React from 'react'
import  {CardStatusProps} from 'card-status'
import {Container} from './styles'

const CardStatus:React.FC<CardStatusProps> = ({
  borderColor, contentColor,quantities, status
}) => {
  return (
    <Container 
        borderColor={borderColor}
        contentColor={contentColor}>   
          <p>{status}</p> 
        <h1>{quantities}</h1>
    </Container>
  )
}
export default CardStatus