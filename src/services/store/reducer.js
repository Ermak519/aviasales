const initialState = {
    ticketFilter: 'cheep',
    searchID: null,
    transPlants: {
        labels: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
        all: false,
        options: []
    },
    ticketListStatus: 'loaded',
    tickets: [
        'dddd',
        'aaaa'
    ]
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
                    all: !state.transPlants.all,
                    options: !state.transPlants.all ? [...state.transPlants.labels] : []
                }
            }
        case 'GROUP':
            return {
                ...state,
                transPlants: {
                    ...state.transPlants,
                    all: state.transPlants.labels.length === action.list.length,
                    options: [...action.list]
                }
            }
        default:
            return state;
    }
}
