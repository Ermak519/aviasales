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
                all: !state.all,
                options: !state.all ? [...state.labels] : []
            }
        case 'GROUP':
            return {
                ...state,
                all: state.labels.length === action.list.length,
                options: [...action.list]
            }
        default:
            return state;
    }
}