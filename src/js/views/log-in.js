import React, { Component } from "react";

export class Login extends Component {
	state = {};
	render() {
		return (
			<div className="contanier-fluid containerlogin">
				<div className="row col-sm-10">
					<div className="offset-md-4 col-md-4">
						<h2>LOGIN</h2>

						<form action="">
							<div className="form-group">
								<label htmlFor="">Username</label>
								<input type="text" className="form-control" />
							</div>

							<div className="form-group">
								<label htmlFor="">Password</label>
								<input type="password" className="form-control" />
							</div>
							<button type="button" className="btn btn-outline-primary">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
