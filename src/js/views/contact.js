import React, { Component } from "react";

export class Contact extends Component {
	constructor() {
		super();
		this.state = {
			index: ""
		};
	}

	render() {
		return (
			<div className="card-deck carddeckcontact">
				<div className="card">
					<img
						className="card-img-top"
						src="https://icmi.or.id/assets/img/profile/profile.png"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Marcel Venegas</h5>
						<p className="card-text">E-mail:</p>
						<p className="card-text">Career:</p>
						<p className="card-text">Linkedin Profile:</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="https://icmi.or.id/assets/img/profile/profile.png"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Jose Vegas</h5>
						<p className="card-text">E-mail:</p>
						<p className="card-text">Career:</p>
						<p className="card-text">Linkedin Profile:</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="https://icmi.or.id/assets/img/profile/profile.png"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Nizar Yarbouh</h5>
						<p className="card-text">E-mail:</p>
						<p className="card-text">Career:</p>
						<p className="card-text">Linkedin Profile:</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
