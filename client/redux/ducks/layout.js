// import agent from '../../shared/utils/agent';

const moduleName = 'LAYOUT';

/**
 * Constants
 * */

export const TOGGLE_OVERLAY = `${moduleName}//TOGGLE_OVERLAY`;
export const CATCH_PREV_ROUTE = `${moduleName}//CATCH_PREV_ROUTE`;

/**
 * Reducer
 * */

const initialState = {
  hasOverlay: false,
  prevRoute: '/'
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_OVERLAY:
      return {
        hasOverlay: !state.hasOverlay
      };
    case CATCH_PREV_ROUTE:
      return {
        ...state,
        prevRoute: payload
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 * */

export const catchPrevRoute = payload => ({
  type: TOGGLE_OVERLAY,
  payload
});

export const toggleOverlay = () => ({
  type: TOGGLE_OVERLAY
});

/**
 * Selectors
 * */

export const selectOverlay = state => state.layout && state.layout.hasOverlay;
