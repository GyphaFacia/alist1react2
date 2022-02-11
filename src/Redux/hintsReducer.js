const defaultState = {
    hints: [],
}

const hintDefaultType = 'default'
const hintDefaultLife = 2000


// export const setVal = (payload)=>({type: 'setVal', payload})
export const addHint = (msg, lifetime = hintDefaultLife, type = hintDefaultType) => async (dispatch) =>{
    const hint = {
        msg, type, lifetime,
        id: Date.now()+Math.random(),
    }
    dispatch({type: 'intAddHint', payload: hint})
    setTimeout(()=>{
        dispatch({type: 'intRemoveHint', payload: hint.id})
    }, hint.lifetime)
    // do something with data
    // dispatch({type: 'setPageData', payload: data})
    // dispatch({type: 'setSomethingElse', payload: data.key})
}

export const intAddHint = (payload)=>({type: 'intAddHint', payload})
export const intRemoveHint = (payload)=>({type: 'intRemoveHint', payload})

export const hintsReducer = (state = defaultState, action)=>{
  const {payload, type} = action
  
  console.log(type)
  console.groupCollapsed('show')
  console.dir(payload);
  console.groupEnd()
  
  switch (type) {
      // case 'setVal': return {...state, val: payload}
      case 'intAddHint': return {
          ...state,
          hints: [
              ...state.hints,
              payload,
          ]
      }
      case 'intRemoveHint': return {
          ...state,
          hints: state.hints.filter(
              hint => hint.id != payload
          ),
      }
      
      default:
          return state
  }
}














