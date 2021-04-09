import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import ViewCard from './components/ViewCard/index.jsx'
import Layout from './components/Layout/index.jsx'
import store from './store'

const AppProvider = () => (
  <Layout>
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <App />
        </Route>
        <Route path="/ViewCard">
          <ViewCard />
        </Route>
      </Switch>
    </Provider>
  </Layout>
)

export default AppProvider
