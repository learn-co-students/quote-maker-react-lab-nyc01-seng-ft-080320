import uuid from 'uuid';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_QUOTE':
            return [...state, {...action.quote, id: uuid(), votes: 0 }]

        case 'REMOVE_QUOTE':
            return [...state]

        case 'UP_VOTE_QUOTE':
            return [...state]

        case 'DOWN_VOTE_QUOTE':
            return [...state]
            
        default:
            return state;
    }
}
