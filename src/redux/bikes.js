
import * as ActionTypes from './ActionTypes';


export const Bikes = (state = { isLoading: true,
    errMess: null,
    bikes:[]}, action) => {
    switch (action.type) {
      case  ActionTypes.ADD_BIKES:
          return{...state, isLoading:false, errMess:null, bikes:action.payload};

          case  ActionTypes.BIKES_LOADING:
              return{...state, isLoading:true, errMess:null, bikes:[]};

              case  ActionTypes.BIKES_FAILED:
                  return{...state, isLoading:false, errMess:action.payload};
        default:
          return state;
      }
};
