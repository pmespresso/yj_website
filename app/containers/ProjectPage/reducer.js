/*
 * ProjectsReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  projects: []
});

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_QUERY:
      // Delete prefixed '@' from the github username
      return state
        .set('query', action.query.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default projectsReducer;
