import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";
export class Create extends Component {
	constructor() {
		super();
		this.state = {
			index: "",
			password: "",
			passwordConfirm: "",
			email: "",
			username: ""
		};
	}

	handleSubmit(e, actions) {
		e.preventDefault();
		if (this.state.username === "") {
			swal("Error", "Username field is required", "error");
		} else if (this.state.email === "") {
			swal("Error", "Email field is required", "error");
		} else if (this.state.password === "") {
			swal("Error", "Password field is required", "error");
		} else if (this.state.password.length < 6) {
			swal("Error", "Password Should be at least 6 Characters", "error");
		} else if (this.state.passwordConfirm === "") {
			swal("Error", "Confirm Password field is required", "error");
		} else if (this.state.password != this.state.passwordConfirm) {
			swal("Error", "Password do not match, Try again", "error");
		} else {
			actions.register(this.state.username, this.state.email, this.state.password);
		}
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<h1 className="text-center mt-4">Sign Up</h1>
							<div className="container containercreateuser mt-1 pt-2 col-lg-6 col-8">
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Username</label>
									<input
										type="username"
										className="form-control"
										id="exampleInputusername1"
										aria-describedby="usernameHelp"
										placeholder="Create Username"
										onChange={e => this.setState({ username: e.target.value })}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Email address</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
										onChange={e => this.setState({ email: e.target.value })}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword">Create Password</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword"
										placeholder="Password"
										min="6"
										onChange={e => this.setState({ password: e.target.value })}
										required
									/>
								</div>
								{this.state.password.length < 6 && this.state.password != "" ? (
									<strong className="text-danger">Password should be at least 6 characters</strong>
								) : null}
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Confirm Password</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Confirm Password"
										min="6"
										onChange={e => this.setState({ passwordConfirm: e.target.value })}
										required
									/>
									{this.state.password != this.state.passwordConfirm ? (
										<strong className="text-danger">Password is not validated</strong>
									) : null}
								</div>
								<button
									onClick={e => this.handleSubmit(e, actions)}
									type="button"
									className="btn btn-success mx-auto mb-4">
									Create user
								</button>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
