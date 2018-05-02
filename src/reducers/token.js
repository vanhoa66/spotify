import { CHANGE_TOKEN } from './../constants/ActionTypes'

const initialState = 'BQDW24DDBxqOREIciNS284-4_3Am_aP8_jYJBQMLqWZR8M3P48Y3pFXWREdus5VmJUpAUs6iPN8ctz1uyjdl-iw1N04J2CY0wd1JI0NOnXp0P5KCGxCUdo-_k5hIL1rRdwcgegl8u3_RX0Rc6qQDTkPz8mG_psw'

const Token = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TOKEN:
            return action.token;
        default:
            return state
    }
}

export default Token