import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="contanier-fluid containerlogin">
							<div className="row mx-auto col-sm-10">
								<div className="offset-md-4 col-md-4">
									<h2>LOGIN</h2>

									<form action="">
										<div className="form-group">
											<label htmlFor="">Username</label>
											<input
												onChange={e => this.setState({ username: e.target.value })}
												type="text"
												className="form-control"
											/>
										</div>

										<div className="form-group">
											<label htmlFor="">Password</label>
											<input
												onChange={e => this.setState({ password: e.target.value })}
												type="password"
												className="form-control"
											/>
										</div>
										<button
											type="button"
											className="btn btn-outline-primary"
											onClick={() => actions.login(this.state.username, this.state.password)}>
											Login
										</button>
									</form>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
