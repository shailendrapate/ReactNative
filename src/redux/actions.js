
//actions
export const GET_USER_DETAILS = 'GET_USER_DETAILS';

//base url for the sample method
const API_URL = '';
const API_KEY = '<your-api-key>';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;


//initializing axios
const axios = require("axios").default;


const loginConfig = {
  headers: {
  'Content-Type': 'application/json'
  }
};
//get the login authentication token & details
export const getUserDetails = () => {

  
  try {
    return async dispatch => {
      const res = await axios.post(
        BASE_URL+'auth/login',
        {username:'yuyu'},
        loginConfig,
      );
      if (res.data) {
        // console.log('====================================');
        // console.log(res.data);
        // console.log('====================================');
        dispatch({
          type: GET_USER_DETAILS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };

  } catch (error) {
    // Add custom logic to handle errors
  }
};

 


