import { PROJECTS_LOADING, GET_PROJECTS, ADD_PROJECT, ADD_PROJECT_FAIL } from '../actions/types';

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

        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload.data, ...state.projects ],
                projectSuccessMsg: action.payload.message

            }

        case ADD_PROJECT_FAIL:
            return {
                ...state,
                post: {}
            }
    
        default:
            return state;
    }

}