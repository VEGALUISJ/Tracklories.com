import React from "react";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	selectedFood(e) {
		this.setStore({ ...this.store, selected: e.target.value });
	}

	addFood(e) {
		e.preventDefault();
		if (e.target.value != "Choose one option") {
			const selected = this.state.selected;
			const itemSelected = this.state.foods.filter(food => {
				if (selected === food.name) return food;
			});
			const newItem = this.state.addedItem;

			newItem.push({ ...itemSelected[0], quantity: 1, total: 360 });
			this.setState({ ...this.state, addedItem: newItem });
		}
	}

	render() {
		console.log(this.state.addedItem);
		return (
			<Context.Consumer>
				{({ store, actiopns }) => {
					return (
						<div>
							<div className="jumbotron jumbotron-home mx-auto">
								<h1>Tracklories everywhere</h1>
								<h2 className="lead">
									Start to take a look how many calories brings your food and track how much calories
									you eat at the end of the day in each meal!!!
								</h2>
								<hr className="my-4" />
								<p>Sign in to start a new healthy life</p>
								<p className="lead">
									<a className="btn btn-primary btn-lg" role="button">
										Join in
									</a>
								</p>
							</div>
							{/*Jumbotron con texto inicial*/}
							<div>
								<h3 className="text-center">
									Start here to check how many calories you are next to eat in fast food
								</h3>
								<hr className="my-4" />
								<h3 className="text-center">Pick a Fast Food Chain:</h3>
							</div>
							<div className="form-group-home text-center mx-auto">
								<label htmlFor="exampleSelect1">Choose one</label>
								<select className="form-control" id="exampleSelect1">
									{store.chains.map((chain, inx) => (
										<option key={inx} value={inx}>
											{chain}
										</option>
									))}
								</select>
								{/*lista desplegable de las cadenas de comida*/}
							</div>
							<div className="form-group-home2 text-center mx-auto mt-4 mb-4 row">
								<select
									className="form-control col"
									id="exampleSelect1"
									onChange={e => this.selectedFood(e)}>
									{store.dummy.map((food, inx) => (
										<option key={inx} value={food.food_name}>
											{food.food_name}
										</option>
									))}
								</select>
								{/*lista desplegable de los tipos de comida*/}
								<button
									type="button col"
									className="btn btn-outline-success"
									onClick={e => this.addFood(e)}>
									Add Food item
								</button>
							</div>
							<table className="table col-sm-12">
								<thead>
									<tr className="table-active">
										<th scope="col">Food Item</th>
										<th scope="col">QTY</th>
										<th scope="col">Calories</th>
										<th scope="col">Total</th>
									</tr>
								</thead>
								<tbody>
									{store.addedItem.map((food, id) => (
										<tr key={id}>
											<td>{food.name}</td>

											<td>{food.quantity}</td>

											<td>{food.calories}</td>

											<td>{food.total}</td>
										</tr>
									))}
								</tbody>
							</table>
							{/*tabla para reflejar las comidas y las calorias*/}
							<div className="container-fluid mt-3 mb-3">
								<div className="row w-100 align-items-center">
									<div className="col text-center">
										<button type="button" className="btn btn-success">
											Save Meal
										</button>
									</div>
								</div>
							</div>
							{/*Boton de guardar meal*/}
							<div className="alert alert-dismissible alert-warning">
								<button type="button" className="close" data-dismiss="alert">
									&times;
								</button>
								<h4 className="alert-heading">Warning!</h4>
								<p className="mb-0">
									Join now to save your meal in your tracker profile up 5 days,
									<br />
									<a className="alert-link">
										Sign In <br />
									</a>
									Or if you are already member <br />
								</p>

								<a className="alert-link">Log In</a>
							</div>
							{/*Warning advice text*/}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
