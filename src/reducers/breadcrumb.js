import { GO_HOME, GO_ARTIST, GO_ALBUM } from './../constants/ActionTypes'

const initialState = [{ to: '/', name: 'Home' }]

const breadcrumb = (state = initialState, action) => {
    let { to, name } = action;
    switch (action.type) {
        case GO_HOME:
            state = [{ to: '/', name: 'Home' }];
            return [...state]
        case GO_ARTIST:
            state[1] = { to, name };
            if (state.length > 2) state.splice(-1, 1);
            return [...state]
        case GO_ALBUM:
            state[2] = { to, name };
            return [...state]
        default:
            return state
    }
}

export default breadcrumb