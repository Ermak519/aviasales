const initialState = {
    searchID: null,
    ticketSort: 'cheep',
    ticketsFilter: {
        labels: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
        all: true,
        options: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
    },
    ticketsProgress: 10,
    allTickets: null,
    listStatus: 'loaded',
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
        case 'LIST_STATUS':
            return {
                ...state,
                listStatus: action.placeholder
            }

        case 'ADD_SHOW_TICKETS':
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
                tickets: [...action.placeholder]
            }
        case 'UPLOAD_TICKETS':
            return {
                ...state,
                tickets: [...state.tickets, ...action.placeholder]
            }
        case 'UPLOAD_PROGRESS':
            return {
                ...state,
                ticketsProgress: state.ticketsProgress + 6
            }
        case 'ALL_TICKETS_LOADED':
            return {
                ...state,
                allTickets: action.placeholder
            }
        default:
            return state;
    }
}




