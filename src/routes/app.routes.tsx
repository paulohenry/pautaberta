import React from 'react'
import {Switch,BrowserRouter,Route,Redirect} from 'react-router-dom'

import Layout from '../components/layout'
import Dashboard from '../pages/dashboard'
import Process from '../pages/process'
import CreateProcess from '../pages/create_process'
import CreateSchedule from '../pages/create_tasks'

const AppRoutes:React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/">
          <Redirect
            to={{
                pathname: "/tasks/create",
              }}/>
          </Route>
          <Route path="/home"  component={Dashboard} exact />
          <Route path="/process"  component={Process} exact/>
          <Route path="/process/create"  component={CreateProcess} exact/>
          <Route path="/tasks/create"  component={CreateSchedule} exact/>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes;
