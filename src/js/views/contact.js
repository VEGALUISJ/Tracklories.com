import React, { Component } from "react";
import imgJose from "../images/imgJose.jpg";

export class Contact extends Component {
	constructor() {
		super();
		this.state = {
			index: ""
		};
	}

	render() {
		return (
			<div className="container-fluid mt-5">
				<div className="card-deck d-flex justify-content-center">
					<div className="col-xl-4 col-sm-8">
						<div className="card d-flex">
							<div className="card mt-3">
								<img className="card-img-top" src={imgJose} alt="Coach image" />
								<div className="card-body">
									<h5 className="card-title">Jose Vega</h5>
									<p className="card-text">E-mail: Luisvega.jlvv@gmail.com</p>
									<p className="card-text">Career: Web Developer Stack MERN</p>
									<p className="card-text">
										Linkedin Profile:{" "}
										<a href="https://www.linkedin.com/in/jose-luis-vega-vargas-831571106/">
											Jose Luis Vega Vargas
										</a>
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
