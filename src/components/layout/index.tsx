import React from 'react'

import {Grid} from './styles'
import Aside from '../aside'
import Content from '../content'


const Layout:React.FC = ({children}) => {
  return (
    <Grid>
      <Aside/>
      <Content>
        {children}
      </Content>
    </Grid>
  )
}
export default Layout