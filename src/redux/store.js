import { createStore } from 'redux'
import { combineReducers as reducers } from './reducers'

const store = createStore(reducers);