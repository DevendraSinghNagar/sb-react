import { useEffect, useReducer } from "react";

const actions = {
    API_CALL: 'GET CALL',
    API_SUCCESS: 'SUCCESS',
    API_ERROR: 'ERROR',
}

const initialState = {
    loading: false,
    error: null,
    data: null
};

const reducerFx = (state, action) => {
    switch (action.type) {
        case actions.API_CALL:
            return { ...state, loading: true };
        case actions.API_ERROR:
            return { ...state, loading: false, error: action.payload, data: null };
        case actions.API_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        default:
            return state;
    }
}

const useFetchWithReducer = (url) => {
    const [state, dispatch] = useReducer(reducerFx, initialState);

    const fetchData = async (url) => {
        await fetch(url)
            .then((data) => {
                if (data.status >= 400) {
                    throw new Error('Server responds with error!');
                }
                return data.json()
            }).then((success) => {
                dispatch({ type: actions.API_SUCCESS, payload: success });
            }).catch((error) => {
                dispatch({ type: actions.API_ERROR, payload: error })
            });
    }

    useEffect(() => {
        dispatch({ type: actions.API_CALL });
        fetchData(url);
        // useFetch(url) // React Hook "useFetch" cannot be called inside a callback.
    }, [url])

    return state;
}

export default useFetchWithReducer;