const initialState = {
    ticketFilter: 'cheep',
    transPlants: {
        labels: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
        all: false,
        options: []
    }
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'CHEEP':
            return {
                ...state,
                ticketFilter: 'cheep'
            }
        case 'FAST':
            return {
                ...state,
                ticketFilter: 'fast'
            }
        case 'OPTIMAL':
            return {
                ...state,
                ticketFilter: 'optimal'
            }
        case 'ALL':
            return {
                ...state,
                transPlants: {
                    ...state.transPlants,
                    all: !state.all,
                    options: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
                }
            }
        case 'GROUP':
            return {
                ...state,
                transPlants: {
                    ...state.transPlants,
                    all: !state.all,
                    options: []
                }
            }
        default:
            return state;
    }
}
