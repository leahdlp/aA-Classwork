import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            // done: false,
            id: this.uniqueId()
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        // this.updateDone = this.updateDone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    updateBody(e) {
        this.setState({ body: e.currentTarget.value });
    }
    
    // updateDone(e) {
    //     this.setState({ done: e.currentTarget.value });
    // }

    uniqueId() {
        return new Date().getTime();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state); // dispatching the action
        this.setState({
            title: '',
            body: '',
            // done: false,
            id: this.uniqueId()
        });
    }

    render() {

        return (
            <div>
                <h1>ADD A TODO</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    </label>
                    <label>Body:
                        <input type="text" value={this.state.body} onChange={this.updateBody} />
                    </label>

                    <input type="submit" value='Add Todo' />
                </form>
            </div>
        )
    }
}

export default TodoForm;