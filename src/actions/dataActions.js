export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const READ_DATA_FROM_FILE = 'READ_DATA_FROM_FILE';

// Action creator to fetch data from API
export const fetchDataFromApi = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });

  fetch('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0') // Replace with your actual API endpoint
    .then((response) => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.error('API error:', error);
      // If API request fails, dispatch action to read data from file
      dispatch({ type: READ_DATA_FROM_FILE });
    });
};

// Action creator to read data from a text file
export const readDataFromFile = () => (dispatch) => {
  fetch('Shipments.txt') // Replace with the actual path to your text file
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split('\n');
      const parsedData = lines.map((line) => {
        try {
          return JSON.parse(line);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          return null;
        }
      }).filter((item) => item !== null);

      dispatch({ type: FETCH_DATA_SUCCESS, payload: parsedData });
    })
    .catch((error) => {
      console.error('Error fetching data from text file:', error);
      // If reading from the text file also fails, you can handle it here.
    });
};