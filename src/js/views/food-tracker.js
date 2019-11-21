import React from "react";
import { Context } from "../store/appContext";
import moment from "moment";
import Datetime from "react-datetime";

export class Tracker extends React.Component {
	constructor() {
		super();
		this.state = {
			meal: "",
			chain: "",
			food: "",
			date: ""
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div className="jumbotron jumbotron-fluid jumbotronfoodtracker mx-auto">
								<div className="container">
									<h1>
										Start tracking how much calories you eat is the first step to a healthy life!!!
									</h1>
									<p className="lead">
										Here you can track how many calories you ate in previus days, and take control
										about your nutrition.
									</p>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-4">
										<h2>Date</h2>
										{store.foods.map((meal, index) => {
											return (
												<p key={index}>
													<Datetime dateFormat={"MM-DD-YYYY"} value={meal.date} />
												</p>
											);
										})}
									</div>
									<div className="col-4">
										<h2>Food</h2>
										{store.foods.map((meal, index) => {
											return <p key={index}>{meal.food_name}</p>;
										})}
									</div>
									<div className="col-4">
										<h2>Calories</h2>
										{store.foods.map((meal, index) => {
											return <p key={index}>{meal.total}</p>;
										})}
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
