import { combineReducers } from 'redux';


import waitinglist from './waitinglist';
import loading from './loading';


export default combineReducers({
    waitinglist,
    loading
});