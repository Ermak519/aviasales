const initialState = {
    searchID: null,
    ticketsProgress: 10,
    allTickets: null,
    listStatus: 'loaded',
    lengthOfList: 5,
    tickets: [
    ]
}

export const ticketListReducer = (state = initialState, action = {}) => {
    switch (action.type) {
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