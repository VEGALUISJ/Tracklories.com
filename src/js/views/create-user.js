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
			<div className="container containercreateuser text-center">
				<div className="row">
					<div className="col-sm-12">
						<div className="word-container text-center">
							<h1 className="text-white bg-dark">Create your account</h1>

							<div className="register-container">
								<form action="" method="POST">
									<div className="name">
										<label>
											<input type="text" placeholder="First Name" name="fname" />
											<i className="fas fa-user" />
										</label>

										<label>
											<input type="text" placeholder="Last Name" name="lname" />
											<i className="fas fa-user" />
										</label>
									</div>

									<label>
										<input type="text" placeholder="Username" name="userid" />
										<i className="fas fa-user" />
									</label>

									<label>
										<input type="password" placeholder="Password" name="pwd" />
										<i className="fas fa-key" />
									</label>

									<label>
										<input type="email" placeholder="Email Address" name="email" />
										<i className="fas fa-at" />
									</label>
									<label>
										<input type="address" placeholder="Street, House, Apt" name="address" />
										<i className="fas fa-home" />
									</label>
									<label>
										<input type="city" placeholder="City" name="city" />
										<i className="fas fa-building" />
									</label>
									<label>
										<input type="zip" placeholder="ZIP" name="zip" />
									</label>

									<button type="submit">Create Account</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
