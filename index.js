import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './sass/all.scss'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
render(
    document.getElementById('root')
)