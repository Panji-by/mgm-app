import {
    GET_JSON_BEGIN,
    GET_JSON_SUCCESS,
    GET_JSON_FAIL,
  } from "../action/types";
  
  const intialState = {
    dataJson: [],
    loading: false,
    error: null,
  };
  
  const getJson = (state = intialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case GET_JSON_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case GET_JSON_SUCCESS:
        return {
          dataJson: payload,
          loading: false,
        };
      case GET_JSON_FAIL:
        return {
          dataJson: {},
          loading: false,
          error: error,
        };
    }
  };
  
  export default getJson;