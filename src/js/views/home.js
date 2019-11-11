import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			chains: ["Choose one option", "Mcdonald", "KFC", "Burguer King", "Taco Bell", "Wendys"],
			foods: [],
			selected: "0",
			addedItem: []
		};
	}

	UNSAFE_componentWillMount() {
		const item = [
			{ name: "Hamburger", calories: "365" },
			{ name: "Nachos", calories: "260" },
			{ name: "Fries", calories: "120" },
			{ name: "Coke", calories: "80" },
			{ name: "Fried Chicken", calories: "245" }
		];
		item.unshift({ name: "Choose one option" });
		this.setState({ ...this.state, foods: item });
	}

	selectedFood(e) {
		this.setState({ ...this.state, selected: e.target.value });
	}

	saveFood(e) {
		e.preventDefault();
		if (e.target.value != "Choose one option") {
			const selected = this.state.selected;
			const itemSelected = this.state.foods.filter(food => {
				if (selected === food.name) return food;
			});
			const newItem = this.state.addedItem;
			if (this.state.addedItem.length > 0) {
				newItem.push(itemSelected[0]);
				this.setState({ ...this.state, addedItem: newItem });
			} else {
				this.setState({ ...this.state, addedItem: itemSelected });
			}
		}
	}

	render() {
		console.log(this.state.addedItem);
		return (
			<div>
				<div className="jumbotron jumbotron-home mx-auto">
					<h1>Tracklories everywhere</h1>
					<h2 className="lead">
						Start to take a look how many calories brings your food and track how much calories you eat at
						the end of the day in each meal!!!
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
						{this.state.chains.map((chain, inx) => (
							<option key={inx} value={inx}>
								{chain}
							</option>
						))}
					</select>
					{/*lista desplegable de las cadenas de comida*/}
				</div>
				<div className="form-group-home2 text-center mx-auto mt-4 mb-4 row">
					<select className="form-control col" id="exampleSelect1" onChange={e => this.selectedFood(e)}>
						{this.state.foods.map((food, inx) => (
							<option key={inx} value={food.name}>
								{food.name}
							</option>
						))}
					</select>
					{/*lista desplegable de los tipos de comida*/}
					<button type="button col" className="btn btn-outline-success" onClick={e => this.saveFood(e)}>
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
						{this.state.addedItem.map((food, id) => (
							<tr key={id}>
								<td>{food.name}</td>

								<td>1</td>

								<td>{food.calories}</td>

								<td>365</td>
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
	}
}
