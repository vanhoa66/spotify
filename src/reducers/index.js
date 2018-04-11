import { combineReducers } from 'redux'

import search from './search'
import breadcrumb from './breadcrumb'

const rootReducer = combineReducers({
    search,
    breadcrumb
})

export default rootReducer