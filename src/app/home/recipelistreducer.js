import actionConstants from '../actions'

const initialState = {
    recipeList: [],
    recipeDetails: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionConstants.SET_RECIPE_LIST:
            return {
                ...state,
                recipeList: action.payload
            };
        case actionConstants.SET_RECIPE_DETAILS:
            return {
                ...state,
                recipeDetails: action.payload
            };
        default:
            return state;
    }
};