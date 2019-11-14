import React, { Component } from "react";

export class Edit extends Component {
	state = {};
	render() {
		return (
			<div className="container containereditinfo">
				<div className="row my-2">
					<div className="col-lg-8 order-lg-2">
						<div className="tab-content py-4">
							<div className="tab-pane active" id="profile">
								<h5 className="mb-3">Edit User Profile</h5>
								<div className="row">
									<div className="col-md-6 mb-2">
										<h6>About</h6>
										<input
											type="text"
											className="form-control mb-3"
											id="exampleInputusername1"
											aria-describedby="aboutHelp"
											placeholder="Exmaple: Web Designer, UI/UX Engineer"
										/>
										<h6>Hobbies</h6>
										<input
											type="text"
											className="form-control mb-3"
											id="exampleInputusername1"
											aria-describedby="aboutHelp"
											placeholder="Exmaple: Indie music, skiing and hiking. I love the great outdoors."
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Change Username</label>
							<input
								type="username"
								className="form-control"
								id="exampleInputusername1"
								aria-describedby="usernameHelp"
								placeholder="Edit Username"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Change Password</label>
							<input
								type="username"
								className="form-control"
								id="exampleInputusername1"
								aria-describedby="usernameHelp"
								placeholder="Edit Password"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Confirm New Password</label>
							<input
								type="username"
								className="form-control"
								id="exampleInputusername1"
								aria-describedby="usernameHelp"
								placeholder="Confirm Password"
							/>
						</div>
						<div className="form-group row">
							<label className="col-lg-3 col-form-label form-control-label" />
							<div className="col-lg-9">
								<input type="reset" className="btn btn-secondary" value="Cancel" />
								<button type="button" className="btn btn-success">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
