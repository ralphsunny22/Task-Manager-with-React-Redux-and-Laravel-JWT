import {
    PROJECTS_LOADING,
    GET_PROJECTS,
    ADD_PROJECT,
    ADD_PROJECT_FAIL,
    SINGLE_PROJECT,
    ADD_TASK,
    ADD_TASK_FAIL,
    MARK_TASK_AS_COMPLETED
} from "../actions/types";

const initialState = {
    projects: [],
    isLoadingProjects: false,
    project: {},
    projectSuccessMsg: "",
    tasks: [],
    task: {}
};

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case PROJECTS_LOADING:
            return {
                ...state,
                isLoadingProjects: true
            };

        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload.data,
                isLoadingProjects: false
            };

        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload.data, ...state.projects],
                projectSuccessMsg: action.payload.message
            };

        // this.setState(prevState => ({
        //     tasks: prevState.tasks.concat(response.data)
        //   }))
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload.data, ...state.tasks]
            };

        case ADD_TASK_FAIL:
            return {
                ...state,
                task: {}
            };

        case MARK_TASK_AS_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.slug !== action.payload)
            };

        case SINGLE_PROJECT:
            //var arr = $.map(o, function(el) { return el; })
            return {
                ...state,
                project: action.payload.data,
                tasks: action.payload.tasks
            };

        case ADD_PROJECT_FAIL:
            return {
                ...state,
                project: {}
            };

        default:
            return state;
    }
}
