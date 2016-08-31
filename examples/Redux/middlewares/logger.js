'use strict';

const logger= store =>next =>action =>{
    if(typeof action === 'function'){
        console.log('dispatching a function');
    }else{
        console.log('dispatching',action);
    }
    let result=next(action);
    console.log('next state',result);
    return result;
}

export default logger;