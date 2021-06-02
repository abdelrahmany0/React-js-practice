import {Component} from "react";
import joi from "joi-browser";

class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: {},
    }

    schema = {
        username: joi.string().required(),
        password: joi.string().required(),
    }

    submit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        if(errors) return;
        console.log("submit")
    }

    validate = () => {
        const errors = {}
        const state = this.state
        delete state.errors;
        const result = joi.validate(state, this.schema, {abortEarly: false})
        if(result.error === null) {
            this.setState({errors: {}})
            return null;
        }
        for (const error of result.error.details){
            errors[error.path] = error.message
        }
        this.setState({errors})
        return errors;
    }

    onChange= (e)=> {
        let state = this.state
        state[e.currentTarget.name] = e.currentTarget.value
        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                <h2>Login: </h2>
                <form onSubmit={this.submit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Email address</label>
                        <input onChange={this.onChange} name="username" type="text" className="form-control" id="username"/>
                        {
                            Object.keys(this.state.errors).length === 0 ?
                                null :
                                <div className="alert alert-danger my-1">
                                    <span>{this.state.errors.username}</span>
                                </div>
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={this.onChange} name="password" type="password" className="form-control" id="password"/>
                        {
                            Object.keys(this.state.errors).length === 0 ?
                                null :
                                <div className="alert alert-danger my-1">
                                    <span>{this.state.errors.username}</span>
                                </div>

                        }
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;