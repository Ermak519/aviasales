/*eslint-disable */
export const allTrans = () => ({ type: 'ALL' });

export const checkGroup = (items) => ({ type: 'GROUP', list: items })

// top filter

export const cheeper = () => ({ type: 'CHEEP' });

export const faster = () => ({ type: 'FAST' });

export const optimal = () => ({ type: 'OPTIMAL' });

export const addTickets = () => ({ type: 'ADD_TICKETS' });

export const setSearchID = (value) => ({ type: 'SET_SEARCH_ID', placeholder: value });

export const addTicketsData = (value) => ({ type: 'ADD_TICKETS_DATA', placeholder: value });

export const serverError = () => ({ type: 'SERVER_ERROR' });

export const setLoadingStatus = () => ({ type: 'LIST_STATUS_LOADING' });
export const setLoadedStatus = () => ({ type: 'LIST_STATUS_LOADED' });

export const allTicketsLoaded = (value) => ({ type: 'ALL_TICKETS_LOADED', placeholder: value });
export const uploadTickets = (value) => ({ type: 'UPLOAD_TICKETS', placeholder: value })




