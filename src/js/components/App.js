import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";

const App = () => (
    <>
        <div>
            <h2>Articles</h2>
            <List />
        </div>
        <div>
            <h2>Posts</h2>
            <Post />
        </div>
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
    </>
);

export default App;