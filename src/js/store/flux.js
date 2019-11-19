import moment from "moment";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chains: ["Choose one option", "Mcdonald", "KFC", "Burguer King", "Taco Bell", "Wendys"],
			selected: "",
			foods: [],
			branded: [],
			common: [],
			calories: [],
			mealInformation: [],
			date: ""
		},

		actions: {
			saveFoods: (date, calories) => {
				let store = getStore();
				store.mealInformation.concat([
					{
						time: date,
						totalCalories: calories
					}
				]);

				console.log(store.mealInformation);
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
