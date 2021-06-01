import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticles } from "../actions/index";

function mapStateToProps(state) {
    return {
        articles: state.article.remoteArticles.slice(0, 10)
    };
}

const Post = ({ articles, getArticles }) => {

    useEffect(() => {
        getArticles();
    }, [getArticles])

    return (
        <ul>
            {articles && articles.map(el => (
                <li key={el.id}>{el.title}</li>
            ))}
        </ul>
    );
}

export default connect(
    mapStateToProps,
    { getArticles }
)(Post);