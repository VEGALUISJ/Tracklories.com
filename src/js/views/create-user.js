import React, { Component } from "react";

export class Create extends Component {
	constructor() {
		super();
		this.state = {
			index: ""
		};
	}

	render() {
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
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Create Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
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
					<button type="button" className="btn btn-success mx-auto mb-4">
						Create user
					</button>
				</div>
			</div>
		);
	}
}
