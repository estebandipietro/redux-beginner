import { createSlice } from "@reduxjs/toolkit";
import { getArticles } from "../actions/index";

// ARTICLE STATE
const articleState = {
    articles: [],
    remoteArticles: []
};

const articleSlice = createSlice({
    name: "article",
    initialState: articleState,
    reducers: {
        addArticle: (state, action) => {
            state.articles.push(action.payload);
        },
    },
    extraReducers: {
        [getArticles.pending]: state => {
            state.loading = true;
        },
        [getArticles.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getArticles.fulfilled]: (state, action) => {
            state.loading = false;
            state.remoteArticles = action.payload;
        }
    },
});

const { addArticle } = articleSlice.actions;
const articleReducer = articleSlice.reducer;

export { articleReducer, addArticle }