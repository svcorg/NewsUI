import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function NewsApp(props) {
    return <div>{props.title}</div>
}

NewsApp.propTypes = {
    title: PropTypes.string.isRequired,
};

ReactDOM.render(<NewsApp title="News App" />, document.getElementById('news-app'));