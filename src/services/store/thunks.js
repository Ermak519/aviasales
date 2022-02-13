import { useSelector } from "react-redux";

import { setSearchID, addTicketsData, uploadTickets, setListStatus, allTicketsLoaded } from './actions';
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
        console.log(error);
    }
}

export const uploadNewTickets = () => async (dispatch) => {
    const searchId = useSelector(state => state.searchID);

    try {
        const { tickets, stop } = await getTickets(searchId);
        dispatch(uploadTickets(tickets));
        dispatch(allTicketsLoaded(stop));
    } catch (error) {
        console.log(error);
    }

}