import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import { storage } from "redux-persist/lib/storage";

import projectReducer from "./projectReducer";
import errorReducer from "./errorReducer";
// import authReducer from './authReducer';

const persistConfig = {
    key: "root",
    storage
    //whitelist: ["project"]
};

const rootReducer = combineReducers({
    project: projectReducer,
    error: errorReducer
    // auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
