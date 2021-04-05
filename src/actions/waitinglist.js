import {  toast } from 'react-toastify';


import { LOADING, SUBSCRIBE_TO_WAITING_LIST } from "../types";
import { apiRequest } from "../config/api";

export const newWaitingListEntry = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      loading: true,
    });

    const newEntryPayload = await apiRequest("waiting-list/subscribe", "post", payload);

    if (newEntryPayload.data.status === 201) {
      dispatch({
        type: SUBSCRIBE_TO_WAITING_LIST,
        payload: newEntryPayload.data.data,
      });
    } else {
      toast.error(newEntryPayload.data.message || "Something went wrong")
    }

    dispatch({
      type: LOADING,
      loading: false,
    });
    return newEntryPayload.data.status
  } catch (error) {
    toast.error("Something went wrong");
  }
};
