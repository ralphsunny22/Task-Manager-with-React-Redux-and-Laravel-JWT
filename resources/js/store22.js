import { createStore, applyMiddleware, compose } from "redux";

//to cache our store
import { persistStore } from "redux-persist";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export const persistor = persistStore(store);

//export default { store, persistor };

// import { createStore, applyMiddleware, compose } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import reducers from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducers)
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(persistedReducer,
//   compose(applyMiddleware(sagaMiddleware), window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )
// export const persistor = persistStore(store)
