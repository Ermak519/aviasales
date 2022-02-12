import { setSearchID, addTicketsData, setListStatus, allTicketsLoaded, serverError } from './actions'
import { getSearchID, getTickets } from '../api/kataAviasales';


export const getTicketsData = () => async (dispatch) => {
    dispatch(setListStatus('loading'));
    const { searchId } = await getSearchID();
    dispatch(setSearchID(searchId));
    try {
        const { tickets, stop } = await getTickets(searchId);
        dispatch(addTicketsData(tickets));
        dispatch(setListStatus('loaded'));
        dispatch(allTicketsLoaded(stop));
    } catch (error) {
        console.log(error)
        dispatch(serverError());
    }
}