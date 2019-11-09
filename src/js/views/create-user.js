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
			<div className="container containercreateuser mt-4">
				<h1 className="text-center">Sign Up</h1>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Username</label>
					<input
						type="username"
						className="form-control"
						id="exampleInputusername1"
						aria-describedby="usernameHelp"
						placeholder="Enter Username"
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
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
			</div>
		);
	}
}
