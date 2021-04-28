import { ADD_TASK, ADD_TASK_FAIL } from "./types";
import axios from "axios";
import { returnErrors } from "./errorActions";

//ADD TASK
export const addTask = newTask => async dispatch => {
    await axios
        .post("http://127.0.0.1:8000/api/tasks", newTask)
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
