const CHECK_STATUS = 'BOOK-STORE-APP/category/CHECK_STATUS';

// Reducer Function
const StatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkStatus;
export { StatusReducer };
