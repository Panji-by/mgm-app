import { GET_JSON_BEGIN, GET_JSON_SUCCESS, GET_JSON_FAIL } from "./types";
import axios from "axios";

export const getProductList = (currentPage) => async (dispatch) => {
  dispatch({
    type: GET_JSON_BEGIN,
    loading: true,
    error: null
  });
  try {
    const res = await axios.get(`https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`);
    console.log("res dari action",res);
    dispatch({
      type: GET_JSON_SUCCESS,
      loading: false,
      payload: res.data.value,
      error:null
    });
  } catch (error) {
    dispatch({
      type: GET_JSON_FAIL,
      error: error.response,
    });
    console.log(error);
  }
};
