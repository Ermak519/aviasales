import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import { ticketListReducer } from './ticketListReducer';

export const rootReducer = () => ({
  filterReducer,
  sortReducer,
  ticketListReducer,
});
