/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
}

const store = createStore(counterReducer);


// subscribe method is called whenever we dispatch an action
store.subscribe(() => {
    const stateNow = store.getState();
    console.log(stateNow);
})

store.dispatch({type:'INCR'});
store.dispatch({type:'INCR'});
store.dispatch({type:'DECR'});
store.dispatch({type:'INCR'});
store.dispatch({type:'INCR'});


console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
<App />)
