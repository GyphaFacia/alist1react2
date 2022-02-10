const defaultState = {
    closeAllModals: false,
}

export const setCloseAllModals = (payload)=>({type: 'setCloseAllModals', payload})

export const modalsReducer = (state = defaultState, action)=>{
    const {payload, type} = action
    console.log(type)
    console.groupCollapsed('show')
    console.dir(payload)
    console.groupEnd()
    switch (type) {
        case 'setCloseAllModals': return {...state, closeAllModals: payload}
        default:
            return state
    }
}




















