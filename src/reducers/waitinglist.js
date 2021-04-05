import { SUBSCRIBE_TO_WAITING_LIST } from '../types'

const initialState = {
    payload: [],
}

const waitingListReducer = (state = initialState, { type, payload }) => {
 switch (type){
     case SUBSCRIBE_TO_WAITING_LIST:
         return {
             ...state,
             payload,
         }
    default:
        return state
 }
}

export default waitingListReducer;

