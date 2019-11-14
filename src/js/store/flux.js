const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chains: ["Choose one option", "Mcdonald", "KFC", "Burguer King", "Taco Bell", "Wendys"],
			selected: "",
			foods: [],
			dummy: [
				{
					food_name: "Choose one option",
					serving_unit: null,
					tag_name: null,
					serving_qty: 1,
					common_type: null,
					tag_id: null,
					photo: {
						thumb: null
					},
					locale: null
				},
				{
					food_name: "grilled cheese",
					serving_unit: "sandwich",
					tag_name: "grilled cheese",
					serving_qty: 1,
					common_type: null,
					tag_id: "1763",
					photo: {
						thumb: "https://d2xdmhkmkbyw75.cloudfront.net/1763_thumb.jpg"
					},
					locale: "en_US"
				},
				{
					food_name: "grilled cheeses",
					serving_unit: "sandwich",
					tag_name: "grilled cheese",
					serving_qty: 1,
					common_type: null,
					tag_id: "1763",
					photo: {
						thumb: "https://d2xdmhkmkbyw75.cloudfront.net/1763_thumb.jpg"
					},
					locale: "en_US"
				},
				{
					food_name: "grilled cheese ham",
					serving_unit: "sandwich",
					tag_name: "grilled ham and cheese sandwich",
					serving_qty: 1,
					common_type: null,
					tag_id: "3267",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				},
				{
					food_name: "veg grilled cheese",
					serving_unit: "sandwich",
					tag_name: "veg cheese sandwich",
					serving_qty: 1,
					common_type: null,
					tag_id: "13770",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				},
				{
					food_name: "grilled cheese burger",
					serving_unit: "burger",
					tag_name: "grilled cheese burger",
					serving_qty: 1,
					common_type: null,
					tag_id: "5901",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				},
				{
					food_name: "lobster grilled cheese",
					serving_unit: "sandwich",
					tag_name: "lobster grilled cheese",
					serving_qty: 1,
					common_type: null,
					tag_id: "13926",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				}
			]
		},

		actions: {
			addedItem: food => {
				const store = getStore();
				setStore({ foods: store.foods.concat([food]) });
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
					.then(data => console.log(data));
			}
		}
	};
};

export default getState;
