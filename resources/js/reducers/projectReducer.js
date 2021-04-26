import { PROJECTS_LOADING, GET_PROJECTS } from '../actions/types';

const initialState = {
    projects: [],
    isLoadingProjects: false,
    project: {},
    projectSuccessMsg: ''
};

export default function postReducer(state = initialState, action){

    switch (action.type) {
        case PROJECTS_LOADING:
            return {
                ...state,
                isLoadingProjects: true
            }

        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload.data,
                isLoadingProjects: false
            }
    
        default:
            return state;
    }

}