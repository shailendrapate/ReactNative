import { GET_USER_DETAILS} from './actions';

//reducer 
//initial state for the sample redux
//technologies & interviewer state is used to store the response data in state
const initialState = {
 
  userdetails: [],
};



//reducer sample to store the value from example
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {...state, userdetails: action.payload};
    default:
      return state;
  }
};