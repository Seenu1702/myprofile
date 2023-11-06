/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
// import { MessageContext } from "../App";
import { childMessageContext } from "./ChildComponent";

function GrandChildComponent() {

    // const message = useContext(MessageContext);
    const childMessage = useContext(childMessageContext);
  return (
    <div>
        <h2>GrandChildComponent</h2>
        <p>Message from Parent Component: <b>{childMessage}</b></p>
    </div>
  )
}

export default GrandChildComponent;