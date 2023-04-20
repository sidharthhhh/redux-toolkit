export const incrementAction = (state, action) =>{
    state.value += 1;
};


export const decrementAction = (state, action) =>{
    state.value -= 1;
}

export const changeByParamsAction = (state , action) =>{
    state.value = state.value + action.playload;
}