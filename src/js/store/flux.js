import moment from "moment";
import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chains: ["Choose one option", "Mcdonald", "KFC", "Burguer King", "Taco Bell", "Wendys"],
			test: ["Add New Item"],
			selected: "",
			foods: [],
			branded: [],
			common: [],
			calories: [],
			mealInformation: [],
			date: "",
			foodtrackerCalories: [],
			token: null,
			errorMessage: null,
			currentUser: null
		},

		actions: {
			register: (username, email, password) => {
				console.log("Estoy aqui ahoras");
				const options = {
					method: "POST",
					url: "http://localhost:3000/register",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						"Access-Control-Allow-Origin": "http://localhost:8081/"
					},
					data: JSON.stringify({
						username: username,
						password: password,
						email: email
					})
				};
				console.log(options);
				axios
					.post("http://localhost:3000/register", {
						username: username,
						password: password,
						email: email
					})
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					});
			},
			logout: () => {
				//setStore({ token: null });
				console.log("logout");
			},
			login: (user, pw) => {
				fetch("http://localhost:3000/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: user,
						password: pw
					})
				})
					.then(response => response.json())
					.then(token => {
						setStore({ token: token.customToken });
						console.log(getStore());
					});
			},

			saveFoods: (date, calories) => {
				let store = getStore();
				store.mealInformation.concat([
					{
						time: date,
						totalCalories: calories
					}
				]);
			},
			addedItem: meal => {
				let store = getStore();
				let obj = store.branded.filter(e => e.food_name == meal);
				obj.quantity = 1;
				console.log(obj);
				setStore({ foods: store.foods.concat(obj) });
				console.log(store);
			},
			addNewItem: (meal, calorie) => {
				let store = getStore();
				let obj = {
					food_name: meal,
					nf_calories: calorie,
					quantity: 1,
					serving_qty: 1,
					total: calorie,
					date: new Date()
				};
				setStore({ foods: [...store.foods, obj] });
			},
			updateItem: (meal, updateData) => {
				let store = getStore();
				console.log("estoy en flux" + "" + JSON.stringify(updateData, null, 2));
				setStore({
					foods: store.foods.map(b => {
						console.log(b.nf_calories);
						console.log(b.serving_qty);
						console.log(updateData.qty);
						if (b.food_name === meal)
							return {
								...b,
								quantity: updateData.qty,
								total: b.nf_calories * b.serving_qty * updateData.qty,
								date: updateData.date
							};

						return b;
					})
				});
				console.log(store.foods);
			},
			selectChain: chain => {
				const store = getStore();

				fetch("https://trackapi.nutritionix.com/v2/search/instant?query=" + chain, {
					headers: {
						"x-app-key": "5ce330bbd69d0205d738fe50ee9d31e7",
						"x-remote-usar-id": "0",
						"x-app-id": "d204071e"
					}
				})
					.then(response => response.json())

					.then(data => {
						setStore({
							branded: data.branded.map(b => {
								return { ...b, quantity: 1, total: b.nf_calories * b.serving_qty, date: moment() };
							})
						});
						setStore({ common: data.common });
					});
			}
		}
	};
};

export default getState;
