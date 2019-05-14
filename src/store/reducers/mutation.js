import constants from '../constants';

const initialState = {
    id: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.MUTATION_BEGIN:
        return {
            ...state,
            loading: true,
            error: null,
            id: null,
        };

    case constants.MUTATION_SUCCESS:
        return {
            ...state,
            loading: false,
            id: action.id,
        };

    case constants.MUTATION_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error,
            id: null,
        };

    default:
        return state;
    }
};
