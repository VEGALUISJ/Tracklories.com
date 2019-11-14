const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chains: ["Mcdonald", "KFC", "Burguer King", "Taco Bell", "Wendys"],
			selected: "",
			foods: [],
			branded: [],
			common: [],
			calories: []
		},

		actions: {
			addedItem: meal => {
				let store = getStore();
				let obj = store.branded.filter(e => e.food_name == meal);
				setStore({ foods: store.foods.concat(obj) });
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
						setStore({ branded: data.branded });
						setStore({ common: data.common });
					});
			}
		}
	};
};

export default getState;
