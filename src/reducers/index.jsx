import SearchService from '../services/SearchService';

export default SearchReducer = (state = {
    type: 'search', params: []
}, action) => {
    const params = state.params
    switch (action.type) {
        case 'search':
            return {
                            
            }
        default: return state;
    }
}