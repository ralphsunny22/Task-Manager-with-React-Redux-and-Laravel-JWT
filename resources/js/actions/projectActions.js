import {
    PROJECTS_LOADING,
    GET_PROJECTS,
    ADD_PROJECT,
    ADD_PROJECT_FAIL,
    SINGLE_PROJECT,
    ADD_TASK,
    ADD_TASK_FAIL,
    MARK_TASK_AS_COMPLETED
} from "./types";
import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig, setHeaders } from "./authActions";

export const getProjects = () => dispatch => {
    dispatch({
        type: PROJECTS_LOADING
    });

    axios.get("http://127.0.0.1:8000/api/projects").then(res =>
        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        })
    );
    //.catch(err => {err.response.data, err.response.status})
};

//ADD PROJECT
export const addProject = newProject => (dispatch, getState) => {
    axios
        .post("http://127.0.0.1:8000/api/project", newProject, setHeaders())
        .then(res =>
            dispatch({
                type: ADD_PROJECT,
                payload: res.data
            })
        )
        .catch(err => {
            if (err.response) {
                dispatch(
                    returnErrors(
                        err.response.data,
                        err.response.status,
                        "ADD_PROJECT_FAIL"
                    )
                );
                dispatch({
                    type: ADD_PROJECT_FAIL
                });
            }
        });
};

//singlePost
export const singleProject = slug => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/project/${slug}`).then(res =>
        dispatch({
            type: SINGLE_PROJECT,
            payload: res.data
        })
    );
    //.catch(err => {err.response.data, err.response.status})
};

//ADD TASK
export const addTask = newTask => async (dispatch, getState) => {
    await axios
        .post("http://127.0.0.1:8000/api/tasks", newTask, setHeaders())
        .then(res =>
            dispatch({
                type: ADD_TASK,
                payload: res.data
            })
        )
        .catch(err => {
            if (err.response) {
                dispatch(
                    returnErrors(
                        err.response.data,
                        err.response.status,
                        "ADD_TASK_FAIL"
                    )
                );
                dispatch({
                    type: ADD_TASK_FAIL
                });
            }
        });
};

//markTaskAsCompleted
export const markTaskAsCompleted = slug => (dispatch, getState) => {
    axios.post(`http://127.0.0.1:8000/api/tasks/${slug}`).then(res =>
        dispatch({
            type: MARK_TASK_AS_COMPLETED,
            payload: slug
        })
    );
    //.catch(err => {err.response.data, err.response.status})
};
