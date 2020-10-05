import { combineReducers } from 'redux'
import { userReducer as user } from './user'
import { postReducer as post } from './post'

export default combineReducers({
    user,
    post
})