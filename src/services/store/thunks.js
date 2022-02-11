import { setLoadingStatus, setSearchID, addTicketsData, setLoadedStatus, allTicketsLoaded, serverError } from './actions'
import { getSearchID, getTickets } from '../api/kataAviasales';



export const getTicketsData = () => (dispatch) => {
    dispatch(setLoadingStatus())
    getSearchID().then(({ searchId }) => {
        dispatch(setSearchID(searchId));
        return searchId
    }).then((id) => {
        getTickets(id).then(({ tickets, stop }) => {
            dispatch(addTicketsData(tickets))
            dispatch(setLoadedStatus());
            dispatch(allTicketsLoaded(stop))
        }).catch(() => {
            dispatch(serverError())
        })
    })
}