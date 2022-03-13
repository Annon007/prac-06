import { useReducer, useCallback } from "react";
const httpReducer = (state, action) => {
    if (action.type === 'SEND') {
        return {
            data: null,
            error: null,
            status: 'pending',
        };
    }

    if (action.type === 'SUCCESS') {
        return {
            data: action.responseData,
            error: null,
            status: 'completed',
        };
    }

    if (action.type === 'ERROR') {
        return {
            data: null,
            error: action.errorMessage,
            status: 'completed',
        };
    }


    return state;
}
const useHttp = (requestFunction, requestPending = false) => {
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: requestPending ? "pending" : null,
        data: null,
        error: null,
    });

    const sendReq = useCallback(async (requesData) => {
        dispatch({ type: "SEND" });
        try {
            const data = await requestFunction(requesData)
            dispatch({ type: "SUCCESS", responseData: data })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                errorMessage: err.message || 'Something went wrong!',
            });
        }
    }, [requestFunction]);

    return {
        sendReq,
        ...httpState
    }
}
export default useHttp;