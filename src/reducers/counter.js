import {
    INCREMENT,
    DECREMENT
} from '../actions/ActionTypes'

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
                dumbObject: {
                    ...state.dumbObject,
                    u: 0
                }
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}