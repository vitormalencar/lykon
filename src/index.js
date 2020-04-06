import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { routeComponents } from './Routes/index'

import registerServiceWorker from './registerServiceWorker'

import AppTemplate from './Common/UI/AppTemplate/AppTemplate'

import store from './store'

import './index.css'

const Main = () => (
  <Provider store={store}>
    <Router>
      <AppTemplate>{routeComponents}</AppTemplate>
    </Router>
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
