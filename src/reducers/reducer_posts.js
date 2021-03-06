import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POSTS: 
      return _.omit(state, action.payload);

    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state,  };
      // newState[post.id] = post;
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data };
      // the [] is not creating a new array, it is key interpolation
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}