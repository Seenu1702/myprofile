/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const notes = [
    {
        id: 1,
        content: "Working with List",
        important: true
    },
    {
        id: 2,
        content: "Usage of Keys",
        important: false
    },
    {
        id: 3,
        content: "Conditional Rendering",
        important: true
    },
    {
        id: 4,
        content: "Handling Events",
        important: true
    },
    {
        id: 5,
        content: "Prop vs State",
        important: false
    }
];

//create a variable called counter and initialize value to 1.

let counter = 1;



// ReactDOM.createRoot(document.getElementById('root')).render(<App counter = {counter}/>)

let refresh = () =>{
    ReactDOM.createRoot(document.getElementById('root')).render(<App counter = {counter}/>)
};

// refresh();
// counter+=1;
// refresh()
// counter+=1;
// refresh()

// setInterval(()=>{
//     refresh();
//     counter += 1;
// },1000)