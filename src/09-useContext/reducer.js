

export const initialState = {
    id: 123456,
    name: 'Lucia Meyer',
    email: 'luo@google.com'
}

export const maxiReducer = (state = initialState, action) => {

    if(action.type === "CAMBIAR_EMAIL") {
        return {...state, email:action.payload}
    }

    return state
}

