import  { _getUsers } from "../_DATA";
import  { _getQuestions } from "../_DATA";
import { receiveUsers } from './users';
import { receiveQuestions } from './questions'; 
import { setAuthedUser } from './authedUser';

const AUTHED_ID = "tylermcginnis";

export function handleUsersData() {
  return (dispatch) => {
    return _getUsers().then(({...users}) => {
      dispatch(receiveUsers({...users}));
      dispatch(setAuthedUser(AUTHED_ID));
    }).catch((error) => console.log(error))
  }
}

export function handleQuestionsData() {
  return (dispatch) => {
    return _getQuestions().then(({...questions}) => {
      dispatch(receiveQuestions({...questions}));
    }).catch((error) => console.log(error))
  }
}
