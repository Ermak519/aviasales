const initialState = {
  ticketSort: 'cheap',
};

export const sortReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHEAP':
      return {
        ...state,
        ticketSort: 'cheap',
      };
    case 'FAST':
      return {
        ...state,
        ticketSort: 'fast',
      };
    default:
      return state;
  }
};
