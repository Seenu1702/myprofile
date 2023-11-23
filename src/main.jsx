/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';


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

ReactDOM.createRoot(document.getElementById('root')).render(<App notes= {notes}/>)
