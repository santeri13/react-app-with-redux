import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../reducers/dataReducer'; // Import your action creators

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());

    // Make your API request here
    const response = await fetch('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
    const data = await response.json();

    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};