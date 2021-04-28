import { ADD_TASK, ADD_TASK_FAIL } from "../actions/types";

const initialState = {
    tasks: [],
    task: {}
};

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.data]
            };

        case ADD_TASK_FAIL:
            return {
                ...state,
                task: {}
            };

        default:
            return state;
    }
}
