import { createAsyncThunk } from "@reduxjs/toolkit";

const getArticles = createAsyncThunk("articles/getArticles", () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(json => json);
});

export { getArticles }