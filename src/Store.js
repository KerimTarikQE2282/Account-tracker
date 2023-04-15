import reducer from'./Features/Accounts'
import { applyMiddleware } from 'redux'
import  ThunkMiddleware  from 'redux-thunk'

const { createStore } = require("redux")
const route=applyMiddleware(ThunkMiddleware)
const Store=createStore(reducer,route)

export default Store