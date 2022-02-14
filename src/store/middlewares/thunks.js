import { uploadTickets, addTicketsData, setSearchID, uploadProgress, setListStatus, allTicketsLoaded } from '../actions/ticketListActions';
import { getTickets, getSearchID } from '../../api/kataAviasales';


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
        const { tickets, stop } = await getTickets(searchId);
        dispatch(addTicketsData(tickets));
        dispatch(setListStatus('loaded'));
        dispatch(allTicketsLoaded(stop));
    }
}

export const uploadNewTickets = (searchId) => {
    const id = searchId;

    return async (dispatch) => {
        try {
            const { tickets, stop } = await getTickets(id);
            dispatch(uploadTickets(tickets));
            dispatch(allTicketsLoaded(stop));
            dispatch(uploadProgress());
        } catch (error) {
            const { tickets, stop } = await getTickets(searchId);
            dispatch(uploadTickets(tickets));
            dispatch(uploadProgress());
            dispatch(allTicketsLoaded(stop));
        }

    }
}