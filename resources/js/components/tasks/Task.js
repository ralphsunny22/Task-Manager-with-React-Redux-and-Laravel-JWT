import React from "react";
import { useDispatch } from "react-redux";
import { markTaskAsCompleted } from "../../actions/projectActions";

const Task = ({ task }) => {
    const dispatch = useDispatch();

    //slug from onClick event below
    const markTaskAsCompletedHandle = slug => {
        dispatch(markTaskAsCompleted(slug));
    };

    return (
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {task.title}
                <button
                    className="btn btn-primary btn-sm"
                    onClick={markTaskAsCompletedHandle.bind(null, task.slug)}
                >
                    Mark as completed
                </button>
            </li>
        </div>
    );
};

export default Task;
