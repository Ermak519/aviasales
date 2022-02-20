import {
  uploadTickets,
  addTicketsData,
  setSearchID,
  uploadProgress,
  setListStatus,
  allTicketsLoaded,
} from '../actions/ticketListActions';
import { getTickets, getSearchID } from '../../api';

export const getTicketsData = () => async (dispatch) => {
  dispatch(setListStatus('loading'));
  const { searchId } = await getSearchID();
  dispatch(setSearchID(searchId));
  let ticketsAll, stopStatus;
  try {
    const { tickets, stop } = await getTickets(searchId);
    ticketsAll = tickets;
    stopStatus = stop;
  } catch {
    const { tickets, stop } = await getTickets(searchId);
    ticketsAll = tickets;
    stopStatus = stop;
  }
  dispatch(addTicketsData(ticketsAll));
  dispatch(setListStatus('loaded'));
  dispatch(allTicketsLoaded(stopStatus));
};

export const uploadNewTickets = (searchId) => async (dispatch) => {
  let ticketsAll, stopStatus;
  try {
    const { tickets, stop } = await getTickets(searchId);
    ticketsAll = tickets;
    stopStatus = stop;
  } catch {
    const { tickets, stop } = await getTickets(searchId);
    ticketsAll = tickets;
    stopStatus = stop;
  }
  dispatch(uploadTickets(ticketsAll));
  dispatch(uploadProgress());
  dispatch(allTicketsLoaded(stopStatus));
};
