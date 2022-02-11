const defaultState = {
    hints: [],
}

const hintDefaultType = 'default'
const hintDefaultLife = 5000

export const addHint = (msg, lifetime = hintDefaultLife, type = hintDefaultType) => async (dispatch) =>{
    lifetime = lifetime ? lifetime : hintDefaultLife
    type = type ? type : hintDefaultType
    const hint = {
        msg, type, lifetime,
        id: Date.now()+Math.random(),
        birth: Date.now(),
    }
    dispatch({type: 'intAddHint', payload: hint})
    setTimeout(()=>{
        dispatch({type: 'intRemoveHint', payload: hint.id})
    }, hint.lifetime)
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














