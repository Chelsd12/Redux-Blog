import React from 'react';
import { connect } from 'react-redux';
import { Form, Container } from 'semantic-ui-react';

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
            <Container>
                <div>
                    <h1>Add a Blog</h1>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                    name="name" 
                    placeholder="Title"
                    required
                    value={name} 
                    onChange={this.handleChange} 
                    />
                    <Form.Input 
                    name="body"
                    placeholder="Body"
                    required 
                    value={body} 
                    onChange={this.handleChange} 
                    />
                    <Form.Button color="green">Submit</Form.Button>
                    </Form>
                </div>
            </Container>
        )//end of return
    };//end of render
};//end of class BlogForm

const mapStateToProps = (state) => {
    return { id: state.nextId }
};//end of const mapState

export default connect(mapStateToProps)(BlogForm);