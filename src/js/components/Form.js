import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../slices/articles";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const ConnectedForm = (props) => {

    const [title, setTitle] = useState("");

    function handleChange(event) {
        setTitle(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addArticle({ title });
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
    );
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;