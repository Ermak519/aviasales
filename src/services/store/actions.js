/*eslint-disable */

//filter

export const allTrans = () => ({ type: 'ALL' });

export const checkGroup = (items) => ({ type: 'GROUP', list: items })

// sort

export const cheeper = () => ({ type: 'CHEEP' });

export const faster = () => ({ type: 'FAST' });

// tickets data 

export const addTickets = () => ({ type: 'ADD_SHOW_TICKETS' });

export const setSearchID = (value) => ({ type: 'SET_SEARCH_ID', placeholder: value });

export const addTicketsData = (value) => ({ type: 'ADD_TICKETS_DATA', placeholder: value });

export const serverError = () => ({ type: 'SERVER_ERROR' });

export const setListStatus = (status) => ({ type: 'LIST_STATUS', placeholder: status });

export const allTicketsLoaded = (value) => ({ type: 'ALL_TICKETS_LOADED', placeholder: value });

export const uploadTickets = (value) => ({ type: 'UPLOAD_TICKETS', placeholder: value });
