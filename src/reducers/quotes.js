import uuid from 'uuid';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_QUOTE':
            return [...state, {...action.quote, id: uuid(), votes: 0 }]

        case 'REMOVE_QUOTE':
            return state.filter(quote => quote.id !== action.quote.id)

        case 'UP_VOTE_QUOTE':
            return state.map(quote => {
                if (quote.id !== action.quote.id){
                   return quote 
                } 
                return { ...quote, votes: quote.votes + 1 }
            })

        case 'DOWN_VOTE_QUOTE':
            let newVotes = action.quote.votes === 0 ? 0 : action.quote.votes - 1
            return state.map(quote => {
                if (quote.id !== action.quote.id){
                    return quote 
                 } 
                return {...quote, votes: newVotes }
            })
            
        default:
            return state;
    }
}
