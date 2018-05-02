import { combineReducers } from 'redux'

import token from './token'
import search from './search'
import breadcrumb from './breadcrumb'

const rootReducer = combineReducers({
    token,
    search,
    breadcrumb
})

export default rootReducer