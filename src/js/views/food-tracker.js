import React, { Component } from "react";

export class Tracker extends Component {
	state = {};
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid jumbotronfoodtracker mx-auto">
					<div className="container">
						<h1>Start tracking how much calories you eat is the first step to a healthy life!!!</h1>
						<p className="lead">
							Here you can track how many calories you ate in previus days, and take control about your
							nutrition.
						</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-3">
							<div>
								<p>Insertar fecha</p>
							</div>
							<div>
								<p>Insertar fecha</p>
							</div>
							<div>
								<p>Insertar fecha</p>
							</div>
							<div>
								<p>Insertar fecha</p>
							</div>
							<div>
								<p>Insertar fecha</p>
							</div>
						</div>
						<div className="col-9">
							<div className="progress mb-4">
								<div
									className="progress-bar bg-info progressfood"
									role="progressbar"
									aria-valuenow="50"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
							<div className="progress mb-4">
								<div
									className="progress-bar bg-info progressfood"
									role="progressbar"
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
							<div className="progress mb-4">
								<div
									className="progress-bar bg-info progressfood"
									role="progressbar"
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
							<div className="progress mb-4">
								<div
									className="progress-bar bg-info progressfood"
									role="progressbar"
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
							<div className="progress mb-4">
								<div
									className="progress-bar bg-info progressfood"
									role="progressbar"
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<p>Calories Meter</p>
						</div>
						<div className="row col-9 text-right">
							<div className="col-3 text-left">0</div>
							<div className="col-3 text-right">2000</div>
							<div className="col-3 text-right" />
							<div className="col-3 text-right">4000</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
