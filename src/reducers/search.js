import { CHANGE_SEARCH } from './../constants/ActionTypes'

const initialState = ''

const Search = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH:
            state = action.search;
            return state
        default:
            return state
    }
}

export default Search