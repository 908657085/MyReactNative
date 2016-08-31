'use strict';

import ActionTypes from '../constants/ActionType';

const initState={
    loading:false,
    data:null,
};


export default function handleFetchAction(state=initState, action){
    switch (action.type){
        case ActionTypes.ACTION_TYPE_FETCH.LOADING:
            return {
                ...state,
                loading:true,
            }
            break;
        case ActionTypes.ACTION_TYPE_FETCH.SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.data,
            }
            break;
        case ActionTypes.ACTION_TYPE_FETCH.ERROR:
            return {
                ...state,
                loading:false,
                data:"加载失败了!!!",
            }
            break;
        default:
            return state;
        break;
    }

};