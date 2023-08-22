import { useEffect, useReducer } from 'react'
import { actionTypes, initialValue, reducer } from '../../reducers/useReducer';
const VALID_CODE = '123456';

export default function UseReducer({ name }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

useEffect(() => {
    if(state.loading) {
      setTimeout(() => {
        if (state.code !== VALID_CODE) {
          dispatch({type: actionTypes.INVALID});
          return;
        } 
        dispatch({type: actionTypes.VALID})
      }, 1000)
    }
  }, [state.loading])
  

  if (!state.confirmed && !state.deleted) {
    return (
      <div className="content-wrapper">
        <h2>Delete {name}</h2>
        <p>Please, write the security code</p>
  
        { (state.error && !state.loading)  && (
          <p className="error"><b>Code is invalid</b></p>
        )}
  
        { state.loading && (
          <p><b>Loading...</b></p>
        )}
  
        <input 
          placeholder="Security code" 
          type="text" 
          value={state.code} 
          onChange={ (e) => dispatch({type: actionTypes.WRITE, payload: e.target.value})} 
        />
        <button onClick={() => dispatch({type: actionTypes.CHECK})}>Check</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <div className="content-wrapper">
        <h2>Delete {name}</h2>
        <p>Are you sure?</p>
        <button onClick={ () => dispatch({type: actionTypes.DELETE}) }>Yes</button>
        <button onClick={ () => dispatch({type: actionTypes.RESET}) }>Go back</button>
      </div>
    );
  } else if (state.confirmed && state.deleted) {
    return (
      <div className="content-wrapper">
        <h2>Delete {name}</h2>
        <p>Deleted!</p>
        <button onClick={() => dispatch({type: actionTypes.RESET})}>Reset</button>
      </div>
    )
  }
}