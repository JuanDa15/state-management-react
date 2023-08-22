import { useEffect, useState } from "react";
import './UseState.css';

const VALID_CODE = '123456';

function UseState({ name }) {
  const [state, setState] = useState({
    error: false,
    loading: false,
    code: '',
    deleted: false,
    confirmed: false
  })

  useEffect(() => {
    if(state.loading) {
      setTimeout(() => {
        if (state.code !== VALID_CODE) {
          onInvalidCode();
          return;
        } 
        onValidCode();
      }, 1000)
    }
  }, [state.loading])
  
  const onWrite = (e) => {
    setState((prev) => ({...prev, code: e.target.value}))
  }

  const onCheck = () => {
    setState((prev) => ({ ...prev, loading: true }))
  }

  const onValidCode = () => {
    setState((prev) => ({...prev, error: false, loading: false, confirmed: true}))
  }

  const onInvalidCode = () => {
    setState((prev) => ({...prev, error: true, loading: false}))
  }

  const onDelete = () => {
    setState((prev) => ({...prev, deleted: true}))
  }

  const onReset = () => {
    setState((prev) => ({
      ...prev, 
      confirmed: false, 
      deleted: false,
      code: ''
    }))
  }

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
          onChange={onWrite} 
        />
        <button onClick={onCheck}>Check</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <div className="content-wrapper">
        <h2>Delete {name}</h2>
        <p>Are you sure?</p>
        <button onClick={ onDelete }>Yes</button>
        <button onClick={ onReset }>Go back</button>
      </div>
    );
  } else if (state.confirmed && state.deleted) {
    return (
      <div className="content-wrapper">
        <h2>Delete {name}</h2>
        <p>Deleted!</p>
        <button onClick={onReset}>Reset</button>
      </div>
    )
  }
}


export { UseState }