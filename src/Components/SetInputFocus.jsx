/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function SetInputFocus({reference}) {

    useEffect(() => {
        reference.current.focus();
    })
  return (
    <></>
  )
}

export default SetInputFocus;