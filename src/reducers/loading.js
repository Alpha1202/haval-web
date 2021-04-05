import { LOADING,  } from '../types'

const initialState = {
    loading: false,

}

const loadingReducer = (state = initialState, { type, loading }) => {
 switch (type){
     case LOADING:
         return {
             ...state,
             loading
         }
    default:
        return state
 }
}

export default loadingReducer;

