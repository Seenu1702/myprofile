import React from 'react';
import { filterChange } from '../Reducers/filterReducer';
import { useDispatch } from 'react-redux';

function VisibilityFilter() {

    const dispatch = useDispatch();

    const filterSelected =(value)=>{
        dispatch(filterChange(value));
    }

  return (
    <div>
        <div>
        <label>
          <input 
            type="radio"
            name='filter'
            onClick={() => filterSelected('all')}
             />
          All
        </label>
        <label>
          <input 
            type="radio"
            name='filter'
            onClick={() => filterSelected('imp')}
             />
          Important
        </label>
        <label>
          <input 
            type="radio"
            name='filter'
            onClick={() => filterSelected('nonimp')}
             />
          Non-Important
        </label>
      </div>
    </div>
  )
}

export default VisibilityFilter;