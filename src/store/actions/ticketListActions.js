export const addTickets = () => ({ type: 'ADD_SHOW_TICKETS' });

export const setSearchID = (value) => ({ type: 'SET_SEARCH_ID', placeholder: value });

export const addTicketsData = (value) => ({ type: 'ADD_TICKETS_DATA', placeholder: value });

export const uploadTickets = (value) => ({ type: 'UPLOAD_TICKETS', placeholder: value });

export const uploadProgress = () => ({ type: 'UPLOAD_PROGRESS' });

export const clearLoadProgress = () => ({ type: 'CLEAR_PROGRESS' });

export const setListStatus = (status) => ({ type: 'LIST_STATUS', placeholder: status });

export const allTicketsLoaded = (value) => ({ type: 'ALL_TICKETS_LOADED', placeholder: value });
