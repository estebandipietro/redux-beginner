import { articleReducer } from "../slices/articles";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const middleware = [
    /*YOUR CUSTOM MIDDLEWARES HERE*/
    forbiddenWordsMiddleware,
    thunk
];

const store = configureStore({
    reducer: {
        article: articleReducer,
    },
    middleware,
}); //receives reducers, and can have initial state for server side rendering

export default store;