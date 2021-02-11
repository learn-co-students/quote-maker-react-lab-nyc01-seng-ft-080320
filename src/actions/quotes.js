// TODO: Create action creators as defined in tests

export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote
    }
}

export const removeQuote = quote => {
    return {
        type: 'REMOVE_QUOTE',
        quote
    }
}

export const upvoteQuote = quote => {
    return {
        type: 'UP_VOTE_QUOTE',
        quote
    }
}

export const downvoteQuote = quote => {
    return {
        type: 'DOWN_VOTE_QUOTE',
        quote
    }
}




