import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const BlogList = ({ blogs }) => (
    <ul>
        { blogs.map( (b) => {
            return (
                <Blog key={b.id} {...b} /> )
        }
        )}
    </ul>
);//end of const BlogList

const mapStateToProps = (state) => {
    return { blogs: state.blogs };
};//end of const mapState

export default connect(mapStateToProps)(BlogList);