import React from 'react'


import {
    Container,
    HeaderContainer,
    MenuItemLink,
    ContainerLinks,
    ContainerFooter
    } from './styles'


import { ReactComponent as IconHome} from '../../assets/home.svg'
import { ReactComponent as IconProcess} from '../../assets/process.svg'
import { ReactComponent as IconCustomer} from '../../assets/customer.svg'
import { ReactComponent as IconSchedule} from '../../assets/schedule.svg'
import { ReactComponent as IconCash} from '../../assets/cashs.svg'
import { ReactComponent as IconReport} from '../../assets/report.svg'
import { ReactComponent as IconConfig} from '../../assets/report.svg'
import {ReactComponent as Logo} from '../../assets/logo.svg'

const Aside:React.FC = () => {
  return (
    <Container>
        <HeaderContainer>
            <Logo/>
        </HeaderContainer>
        <ContainerLinks>
          <MenuItemLink to="/home">
              <span/>
              <IconHome/>
              Home
          </MenuItemLink>
          <MenuItemLink to="/process">
              <span/>
              <IconProcess/>
              Processos
          </MenuItemLink>
          <MenuItemLink to="#">
              <span/>
              <IconCustomer/>
              Clientes
          </MenuItemLink>
          <MenuItemLink to="#">
              <span/>
              <IconSchedule/>
              Agenda
          </MenuItemLink>
          <MenuItemLink to="#">
              <span/>
              <IconCash/>
              Financeiro
          </MenuItemLink>
          <MenuItemLink to="#">
              <span/>
              <IconReport/>
              Relatórios
          </MenuItemLink>
        </ContainerLinks>
        <ContainerFooter>
             <span/>
             <IconConfig/>
          Configurações
        </ContainerFooter>
    </Container>
  )
}
export default Aside