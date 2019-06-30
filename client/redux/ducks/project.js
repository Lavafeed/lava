// import agent from '../../shared/utils/agent';

const moduleName = 'PROJECT';

/**
 * Constants
 * */

export const LOAD_REQUEST = `${moduleName}//LOAD_REQUEST`;
export const LOAD_SUCCESS = `${moduleName}//LOAD_SUCCESS`;
export const LOAD_FAIL = `${moduleName}//LOAD_FAIL`;

/**
 * Reducer
 * */

const initialState = {
  loading: false,
  loaded: false,
  errors: null,
  data: []
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: null
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        errors: null,
        data: payload.result
      };

    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        errors: payload.errors
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 * */

export const loadRequest = data => ({
  type: LOAD_REQUEST,
  payload: {
    data
  }
});

export const loadSuccess = result => ({
  type: LOAD_SUCCESS,
  payload: {
    result
  }
});

export const loadFail = errors => ({
  type: LOAD_FAIL,
  payload: {
    errors
  }
});
