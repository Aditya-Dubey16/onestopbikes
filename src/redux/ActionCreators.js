import * as ActionTypes from './ActionTypes';
import  {BIKES} from '../shared/bikes';
import {  Url } from '../shared/Url';

export const addComment  = (comments) => ({
  type:ActionTypes.ADD_COMMENT,
  payload: comments
});
export const postComment = (bikeId, author, comment) => (dispatch) =>{

  const newComment= {
        bikeId: bikeId,
        author: author,
        comment: comment
    }
    newComment.date=  new Date().toISOString();

    return fetch(Url +  'comments', {
      method:'Post',
      body: JSON.stringify(newComment),
      headers: {
        'Content-Type' : 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });

};

export const fetchBikes = () => (dispatch) => {

    dispatch(bikesLoading(true));
    return fetch(Url + 'bikes')
    .then(response => {
      if (response.ok) {
        return response;
      }else {
        var error  = new Error ('Error' + response.status  + ':' + response.statusText);
        error.response =response;
        throw error ;
      }
    },
    error => {
      throw error;
    })
    .then(respose =>  respose.json())
    .then(bikes => dispatch(addBikes(bikes)));

}

export const bikesLoading = () => ({
    type: ActionTypes.BIKES_LOADING
});

export const bikesFailed = (errmess) => ({
    type: ActionTypes.BIKES_FAILED,
    payload: errmess
});

export const addBikes = (bikes) => ({
    type: ActionTypes.ADD_BIKES,
    payload: bikes
});

export const fetchComments = () => (dispatch) => {
    return fetch(Url + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
