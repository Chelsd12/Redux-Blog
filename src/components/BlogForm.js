import React from 'react';
import { connect } from 'react-redux';

class BlogForm extends React.Component {
    state = { name: ""};

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, id } = this.props;
        const { name } = this.state;
        const blog = { name, id, complete: false }
        dispatch({ type: 'ADD_BLOG', blog });
        dispatch({ type: 'INC_ID' })
        this.setState({ name: "" });
    };//end of handleSubmit

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    };//end of handleChange

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>Add a Blog</h1>
                <form onSubmit={this.handleSubmit}>
                <input name="name" value={name} onChange={this.handleChange} />
                </form>
            </div>
        )//end of return
    };//end of render
};//end of class BlogForm

const mapStateToProps = (state) => {
    return { id: state.nextId }
};//end of const mapState

export default connect(mapStateToProps)(BlogForm);