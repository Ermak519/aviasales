const initialState = {
    transPlants : [],
    ticketFilter: 'cheep'
}

export default function appReducer(action, state = initialState) {
    switch (action.type) {
        case 'ALL':
            return {
                ...state, 
                transPlants: [
                    'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'
                ]
            }
    default:
        return state
    }
}