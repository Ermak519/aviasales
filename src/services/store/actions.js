/*eslint-disable */

import { getSearchID, getTickets } from "../api/kataAviasales";

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


export const getTicketsData = () => (dispatch) => {
    dispatch(setLoadingStatus())
    getSearchID().then(({ searchId }) => {
        dispatch(setSearchID(searchId));
        return searchId
    }).then((id) => {
        getTickets(id).then((data) => {
            dispatch(addTicketsData(data))
            dispatch(setLoadedStatus())
        }).catch(() => {
            dispatch(serverError())
        })
    })
}

