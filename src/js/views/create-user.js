import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class Create extends Component {
	constructor() {
		super();
		this.state = {
			index: "",
			password: "",
			email: "",
			username: ""
		};
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
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Create Password</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
										onChange={e => this.setState({ password: e.target.value })}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Confirm Password</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Confirm Password"
									/>
								</div>

								<button
									onClick={() =>
										actions.register(this.state.username, this.state.email, this.state.password)
									}
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
