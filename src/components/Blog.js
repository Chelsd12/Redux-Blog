import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, complete, dispatch }) => (
    <div onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })} 
         style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
    >
        { name }
    </div>

);//end of const Blog

export default connect()(Blog);