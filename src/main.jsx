/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { combineReducers, createStore } from 'redux';
import noteReducer from './Reducers/noteReducer.jsx';
import filterReducer from './Reducers/filterReducer.jsx';
import { Provider } from 'react-redux';

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer,
})
const store =createStore(reducer);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
