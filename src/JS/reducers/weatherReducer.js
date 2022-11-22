import { GET_WEATHER_FAIL, GET_WEATHER_lOADING, GET_WEATHER_SUCCESS } from "../constants/actiontypes"

const intitialState={
    weather:{},
    error:null,
    loading:true,
}

export const weatherReducer =(state=intitialState, {type, payload})=>{
    switch (type) {
        case GET_WEATHER_lOADING: return {...state, loading:true}
        case GET_WEATHER_SUCCESS: return {...state, weather:payload, loading: false}
        case GET_WEATHER_FAIL: return {...state, error: payload, loading: false}    
        default: return state

    }

}