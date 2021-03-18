import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "./Actions/userAction";
import "./Form.css"

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            data: {}
        };
    }

    onChange = (name, e) => {
        let data = this.state.data;
        data[name] = e.target.value;
        this.setState({
            data: data,
        });
    };

    handleSubmit(e) {
        e.preventDefault()
        let user = this.state.data
        this.setState({
            fname: "",
            lname: "",
            email: "",
            notes: "",
        });
        this.props.createUser(user);
    }

    render() {
        const { data } = this.state;
        return (
            <div className="wrapper">

                <div className="form-wrapper">
                    <h1>Redux Form</h1>
                    <div>
                        <form onSubmit={this.handleSubmit}>

                            <div className="firstName">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="FirstName"
                                    onChange={(e) => this.onChange("fname", e)}
                                    className="form-control"
                                    value={data.fname}
                                />
                            </div>
                            <br></br>

                            <div className="lastName">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lname"
                                    placeholder="LastName"
                                    onChange={(e) => this.onChange("lname", e)}
                                    className="form-control"
                                    value={data.lname}
                                />
                            </div>
                            <br></br>

                            <div className="email">
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) => this.onChange("email", e)}
                                    className="form-control"
                                    value={data.email}
                                />
                            </div>
                            <br></br>

                            <div className="notes">
                                <label>Notes</label>
                                <input
                                    type="text"
                                    name="notes"
                                    placeholder="Notes"
                                    onChange={(e) => this.onChange("notes", e)}
                                    className="form-control"
                                    value={data.notes}
                                />
                            </div>
                            <br />

                            <div className="createAccount">
                                <button type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(userAction.createUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
