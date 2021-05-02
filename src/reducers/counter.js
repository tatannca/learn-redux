const initialState = {
    countNumber: 0
}

export const counterReducuer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                countNumber: state.countNumber + 1
            }
        case 'CUSTOMIZE_INCREMENT':
            return {
                ...state,
                countNumber: state.countNumber + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                countNumber: state.countNumber - 1
            }
        default:
            return state
    }
}
