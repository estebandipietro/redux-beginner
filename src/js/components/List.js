import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.article.articles };
};

const ConnectedList = ({ articles }) => (
    <ul>
        {articles && articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;