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

	login(e, actions) {
		e.preventDefault();
		actions.login(this.state.username, this.state.password);
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

									<form>
										<div className="form-group">
											<label htmlFor="">Email</label>
											<input
												onChange={e => this.setState({ username: e.target.value })}
												type="email"
												className="form-control"
												required
											/>
										</div>

										<div className="form-group">
											<label htmlFor="">Password</label>
											<input
												onChange={e => this.setState({ password: e.target.value })}
												type="password"
												className="form-control"
												required
											/>
										</div>
										<button
											type="submit"
											className="btn btn-outline-primary"
											onClick={e => this.login(e, actions)}>
											Login
										</button>
									</form>
									<div className="mt-3">
										{store.errorMessage !== null ? (
											<div className="alert alert-dismissible alert-danger">
												<strong>Oh snap!, {store.errorMessage}</strong>
											</div>
										) : null}
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
