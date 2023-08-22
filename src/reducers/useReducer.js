export const initialValue = {
  error: false,
  loading: false,
  code: '',
  deleted: false,
  confirmed: false
}

export const actionTypes = {
  ERROR: 'ERROR',
  WRITE: 'WRITE',
  CHECK: 'CHECK',
  VALID: 'VALID',
  INVALID: 'INVALID',
  DELETE: 'DELETE',
  RESET: 'RESET'
}

// const reducerObj = {
//   'ERROR': (state, payload) => ({
//     ...state,
//     error: true,
//     loading: false,
//   }),
//   'WRITE': (state, payload) => ({
//     ...state, code: payload
//   }),
//   'CHECK': (state, payload) => ({ 
//     ...state, 
//     loading: true 
//   }),
//   'VALID': (state, payload) => ({
//     ...state, 
//     error: false, 
//     loading: false, 
//     confirmed: true
//   }),
//   'INVALID': (state, payload) => ({
//     ...state, 
//     error: true, 
//     loading: false
//   }),
//   'DELETE': (state, payload) => ({
//     ...state,  
//     deleted: true,
//   }),
//   'RESET': (state, payload) => ({
//     ...state, 
//     deleted: false,
//     confirmed: false,
//     code: ''
//   })
// }

const reducerObj = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.WRITE]: {
    ...state, code: payload
  },
  [actionTypes.CHECK]: { 
    ...state, 
    loading: true 
  },
  [actionTypes.VALID]: {
    ...state, 
    error: false, 
    loading: false, 
    confirmed: true
  },
  [actionTypes.INVALID]: {
    ...state, 
    error: true, 
    loading: false
  },
  [actionTypes.DELETE]: {
    ...state,  
    deleted: true,
  },
  [actionTypes.RESET]: {
    ...state, 
    deleted: false,
    confirmed: false,
    code: ''
  }
})

// export const reducer = (state, action) => {
//   if (action.type in reducerObj) {
//     return reducerObj[action.type](state, action.payload)
//   } else {
//     return state
//   }
// }

export const reducer = (state, action) => {
  if (action.type in reducerObj(state)) {
    return reducerObj(state, action.payload)[action.type]
  } else {
    return state
  }
}