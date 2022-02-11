const initialState = {
    searchID: null,
    ticketSort: 'cheep',
    ticketsFilter: {
        labels: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
        all: true,
        options: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
    },
    allTickets: false,
    ticketListStatus: 'loaded',
    serverError: false,
    lengthOfList: 5,
    tickets: [
    ]
}

export default function reducer(state = initialState, action = {}) {
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
        case 'OPTIMAL':
            return {
                ...state,
                ticketSort: 'optimal'
            }
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
        case 'LIST_STATUS_LOADING':
            return {
                ...state,
                ticketListStatus: 'loading'
            }
        case 'LIST_STATUS_LOADED':
            return {
                ...state,
                ticketListStatus: 'loaded'
            }
        case 'ADD_TICKETS':
            return {
                ...state,
                lengthOfList: state.lengthOfList + 5
            }
        case 'SET_SEARCH_ID':
            return {
                ...state,
                searchID: action.placeholder
            }
        case 'ADD_TICKETS_DATA':
            return {
                ...state,
                tickets: [...state.tickets, ...action.placeholder]
            }
        case 'SERVER_ERROR':
            return {
                ...state,
                serverError: true
            }
        default:
            return state;
    }
}




