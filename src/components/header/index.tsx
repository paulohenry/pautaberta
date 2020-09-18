import React from 'react'
import {
    Container,
    UserImage,
    ContainerSignal  
  } from './styles'


import pay from '../../assets/pay.png'
import {ReactComponent as Signal} from '../../assets/signal.svg'
import user from '../../assets/avatar.svg'




const Header:React.FC = ({children}) => {
 
  return (
    <Container>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <img src={pay} alt="users pic"/>
        <ContainerSignal>
            <Signal/>
            <span/>
        </ContainerSignal>
        <p>{children}</p>
        <UserImage src={user}/>
      </div>

    </Container>
  )
}
export default Header