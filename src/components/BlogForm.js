import React from 'react';
import { connect } from 'react-redux';

class BlogForm extends React.Component {
    state = { name: "", body: ""};

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, id } = this.props;
        const { name, body } = this.state;
        const blog = { name, id, body, complete: false }
        dispatch({ type: 'ADD_BLOG', blog: {name, body}});
        dispatch({ type: 'INC_ID' })
        this.setState({ name: "", body: "" });
    };//end of handleSubmit

    handleChange = ({target: { name, value}}) => {
        this.setState({ [name]: value })
    };//end of handleChange

    render() {
        const { name, body } = this.state;
        return (
            <div>
                <h1>Add a Blog</h1>
                <form onSubmit={this.handleSubmit}>
                <input name="name" value={name} onChange={this.handleChange} />
                </form>
                <form onSubmit={this.handleSubmit}>
                <input name="body" value={body} onChange={this.handleChange} />
                </form>
            </div>
        )//end of return
    };//end of render
};//end of class BlogForm

const mapStateToProps = (state) => {
    return { id: state.nextId }
};//end of const mapState

export default connect(mapStateToProps)(BlogForm);