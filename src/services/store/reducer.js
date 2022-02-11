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
        {
            "price": 55863,
            "carrier": "MH",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T01:35:00.000Z",
                    "stops": [
                        "SHA",
                        "BKK",
                        "IST"
                    ],
                    "duration": 1728
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-05T21:13:00.000Z",
                    "stops": [
                        "BKK",
                        "DXB"
                    ],
                    "duration": 1242
                }
            ]
        },
        {
            "price": 15255,
            "carrier": "FV",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T04:47:00.000Z",
                    "stops": [
                        "DXB"
                    ],
                    "duration": 798
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-06T11:24:00.000Z",
                    "stops": [
                        "KUL",
                        "SIN"
                    ],
                    "duration": 716
                }
            ]
        },
        {
            "price": 74252,
            "carrier": "SU",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T00:02:00.000Z",
                    "stops": [
                        "SIN",
                        "DXB"
                    ],
                    "duration": 934
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-06T09:30:00.000Z",
                    "stops": [],
                    "duration": 1660
                }
            ]
        },
        {
            "price": 55863,
            "carrier": "MH",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T01:35:00.000Z",
                    "stops": [
                        "SHA",
                        "BKK",
                        "IST"
                    ],
                    "duration": 1728
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-05T21:13:00.000Z",
                    "stops": [
                        "BKK",
                        "DXB"
                    ],
                    "duration": 1242
                }
            ]
        },
        {
            "price": 15255,
            "carrier": "FV",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T04:47:00.000Z",
                    "stops": [
                        "DXB"
                    ],
                    "duration": 798
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-06T11:24:00.000Z",
                    "stops": [
                        "KUL",
                        "SIN"
                    ],
                    "duration": 716
                }
            ]
        },
        {
            "price": 74252,
            "carrier": "SU",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T00:02:00.000Z",
                    "stops": [
                        "SIN",
                        "DXB"
                    ],
                    "duration": 934
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-06T09:30:00.000Z",
                    "stops": [],
                    "duration": 1660
                }
            ]
        },
        {
            "price": 55863,
            "carrier": "MH",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T01:35:00.000Z",
                    "stops": [
                        "SHA",
                        "BKK",
                        "IST"
                    ],
                    "duration": 1728
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-05T21:13:00.000Z",
                    "stops": [
                        "BKK",
                        "DXB"
                    ],
                    "duration": 1242
                }
            ]
        },
        {
            "price": 15255,
            "carrier": "FV",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T04:47:00.000Z",
                    "stops": [
                        "DXB"
                    ],
                    "duration": 798
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-06T11:24:00.000Z",
                    "stops": [
                        "KUL",
                        "SIN"
                    ],
                    "duration": 716
                }
            ]
        },
        {
            "price": 74252,
            "carrier": "SU",
            "segments": [
                {
                    "origin": "MOW",
                    "destination": "HKT",
                    "date": "2022-02-14T00:02:00.000Z",
                    "stops": [
                        "SIN",
                        "DXB"
                    ],
                    "duration": 934
                },
                {
                    "origin": "HKT",
                    "destination": "MOW",
                    "date": "2022-03-06T09:30:00.000Z",
                    "stops": [],
                    "duration": 1660
                }
            ]
        }
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
        case 'ADD_TICKETS':
            return {
                ...state,
                lengthOfList: state.lengthOfList + 5
            }
        default:
            return state;
    }
}
