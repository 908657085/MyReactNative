'use strict';

export default function actionCreator(type,res=null){
    return {
        type:type,
        data:res,
    }
}