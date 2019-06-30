// import agent from '../../shared/utils/agent';

const moduleName = 'LAYOUT';

/**
 * Constants
 * */

export const TOGGLE_OVERLAY = `${moduleName}//TOGGLE_OVERLAY`;

/**
 * Reducer
 * */

const initialState = {
  hasOverlay: false
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_OVERLAY:
      return {
        hasOverlay: !state.hasOverlay
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 * */

export const toggleOverlay = () => ({
  type: TOGGLE_OVERLAY
});

/**
 * Selectors
 * */

export const selectOverlay = state => state.layout && state.layout.hasOverlay;
