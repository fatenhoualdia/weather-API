import axios from "axios";
import {
  GET_WEATHER_FAIL,
  GET_WEATHER_lOADING,
  GET_WEATHER_SUCCESS,
} from "../constants/actiontypes";

export const getAllWeather = (query) => async (dispatch) => {
  dispatch({ type: GET_WEATHER_lOADING });
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=d2a566024b2847e5ad9213829221306&q=${query}&days=7&aqi=no&alerts=no`
    );
    dispatch({ type: GET_WEATHER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_FAIL, payload: error });
  }
};
