export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const customize = (number) => {
    return {
        type: 'CUSTOMIZE_INCREMENT',
        payload: number
    }
}
