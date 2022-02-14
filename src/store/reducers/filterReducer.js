const initialState = {
    labels: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
    all: true,
    options: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
}

export const filterReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ALL':
            return {
                ...state,
                ticketsFilter: {
                    ...state.ticketsFilter,
                    all: !state.ticketsFilter.all,
                    options: !state.ticketsFilter.all ? [...state.ticketsFilter.labels] : []
                }
            }
        case 'GROUP':
            return {
                ...state,
                ticketsFilter: {
                    ...state.ticketsFilter,
                    all: state.ticketsFilter.labels.length === action.list.length,
                    options: [...action.list]
                }
            }
        default:
            return state;
    }
}