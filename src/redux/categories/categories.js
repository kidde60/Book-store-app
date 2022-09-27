const CHECK_STATUS = 'BOOK-STORE-APP/components/categories/CHECK_STATUS';

// REDUCER
const statusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default: return state;
  }
};

// ACTION CREATOR
const statusAction = () => ({
  type: CHECK_STATUS,
});

export default { statusReducer, statusAction };
