const initialState = {
    ticketSort: 'cheep',
}

export const sortReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CHEEP':
            return {
                ...state,
                ticketSort: 'cheep'
            }
        case 'FAST':
            return {
                ...state,
                ticketSort: 'fast'
            }
        default:
            return state;
    }
}