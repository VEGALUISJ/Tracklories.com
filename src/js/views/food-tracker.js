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
							Here you can track how many calorie you ete in previus days, and take control about your
							nutrition.
						</p>
					</div>
				</div>
				<div className="container">
					<div className="col">
						<div className="container1 col-2">test 1</div>
						<div className="container2 col-8">test 2</div>
						<div className="container3 col-2">test 3</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col">
								<p>insertar barra de progreso</p>
							</div>
							<div className="col">
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
						</div>
					</div>
				</div>
			</div>
		);
	}
}