/* eslint-disable import/no-anonymous-default-export */
import * as types from '../constants'

const DEFAULT_STATE = {
    listNewFilm: {},
    isFetching: true,
    error:false,
    errorMessage: null
}

export default function(state = DEFAULT_STATE,action){
    switch(action.type){
        case types.GET_NEW_FILM_REQUEST:
            return {
                ...state
            }
        case types.GET_NEW_FILM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listNewFilm: action.payload
            }
        case types.GET_NEW_FILM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default :
            return state
    }
}