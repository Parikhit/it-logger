import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

/*
export const getLogs = () => {
    return async (dispatch) => {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data,
        });
    };
}; */

//Refactoring above pice of code to

//Get Logs from server

export const getLogs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data,
        });
    }
};

//Add New Log

export const addLog = (log) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data,
        });
    }
};

//Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};