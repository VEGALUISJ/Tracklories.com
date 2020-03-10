import moment from "moment";

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
			currentUser: null
		},

		actions: {
			register: (username, email, password) => {
				fetch("https://3000-fb7489c6-be13-4c7b-9b8e-4f0d6667d31e.ws-us02.gitpod.io/adduser", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						password: password,
						email: email
					})
				});
			},
			logout: () => {
				//setStore({ token: null });
				console.log("logout");
			},
			login: (user, pw) => {
				fetch("https://3000-fb7489c6-be13-4c7b-9b8e-4f0d6667d31e.ws-us02.gitpod.io/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: user,
						password: pw
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt, currentUser: token.id });
							// history.push("/dashboard");
						}
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
				setStore({ foods: store.foods.concat(obj) });
			},
			updateItem: (meal, updateData) => {
				let store = getStore();
				console.log(updateData.date);
				console.log(meal);
				setStore({
					foods: store.foods.map(b => {
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
