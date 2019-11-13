const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chains: ["Choose one option", "Mcdonald", "KFC", "Burguer King", "Taco Bell", "Wendys"],
			selected: "0",
			foods: [],
			addedItem: [],
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
				},
				{
					food_name: "grilled ham and cheese",
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
					food_name: "grilled cheese on wheat",
					serving_unit: "sandwich",
					tag_name: "grilled cheese on wheat bread",
					serving_qty: 1,
					common_type: null,
					tag_id: "13810",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				},
				{
					food_name: "grilled cheese sandwich",
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
					food_name: "grilled cheese hamburger",
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
					food_name: "deep fried grilled cheese",
					serving_unit: "piece (1/4 sandwich)",
					tag_name: "cheese frenchee",
					serving_qty: 1,
					common_type: null,
					tag_id: "13923",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				},
				{
					food_name: "grilled cheese sandwiches",
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
					food_name: "grilled cheese burger melt",
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
					food_name: "grilled cheese cheeseburger",
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
					food_name: "veg grilled cheese sandwich",
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
					food_name: "grilled corn cheese sandwich",
					serving_unit: "sandwich",
					tag_name: "grilled corn and cheese sandwich",
					serving_qty: 1,
					common_type: null,
					tag_id: "13571",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				},
				{
					food_name: "grilled ham and cheese sandwich",
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
					food_name: "grilled cheese cheeseburger melt",
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
					food_name: "grilled cheese on whole wheat bread",
					serving_unit: "sandwich",
					tag_name: "grilled cheese on wheat bread",
					serving_qty: 1,
					common_type: null,
					tag_id: "13810",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				},
				{
					food_name: "ryans grill buffet bakery grilled ham and cheese sandwich",
					serving_unit: "sandwich",
					tag_name: "ryans grill buffet bakery grilled ham and cheese sandwich",
					serving_qty: 0.5,
					common_type: 2,
					tag_id: "11549",
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					locale: "en_US"
				}
			],
			branded: [
				{
					food_name: "Kids' Grilled Cheese Sandwich",
					serving_unit: "order",
					nix_brand_id: "5965006831a80a7338b667ae",
					brand_name_item_name: "Cheesecake Factory Kids' Grilled Cheese Sandwich",
					serving_qty: 1,
					nf_calories: 700,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Cheesecake Factory",
					region: 1,
					brand_type: 1,
					nix_item_id: "c6402168dac5aec3955a8a1a",
					locale: "en_US"
				},
				{
					food_name: "Grilled Cheese",
					serving_unit: "oz",
					nix_brand_id: "513fbc1283aa2dc80c000064",
					brand_name_item_name: "Cosi Grilled Cheese",
					serving_qty: 6.199999809265137,
					nf_calories: 540,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Cosi",
					region: 1,
					brand_type: 1,
					nix_item_id: "ddee6761b822f88ad6e1861f",
					locale: "en_US"
				},
				{
					food_name: "Char Grilled Cheeseburger without Cheese",
					serving_unit: "order",
					nix_brand_id: "51db37dc176fe9790a89a08f",
					brand_name_item_name: "Famous Dave's Char Grilled Cheeseburger without Cheese",
					serving_qty: 1,
					nf_calories: 770,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Famous Dave's",
					region: 1,
					brand_type: 1,
					nix_item_id: "52cdd14b051cb9eb3201535d",
					locale: "en_US"
				},
				{
					food_name: "Kids' Grilled Cheese Sandwich (Queens)",
					serving_unit: "order",
					nix_brand_id: "5965006831a80a7338b667ae",
					brand_name_item_name: "Cheesecake Factory Kids' Grilled Cheese Sandwich (Queens)",
					serving_qty: 1,
					nf_calories: 460,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Cheesecake Factory",
					region: 1,
					brand_type: 1,
					nix_item_id: "69249803a69a7972f6b6c82b",
					locale: "en_US"
				},
				{
					food_name: "Grilled Cheese (With Swiss Cheese)",
					serving_unit: "Sandwich",
					nix_brand_id: "513fbc1283aa2dc80c0000be",
					brand_name_item_name: "Elevation Burger Grilled Cheese (With Swiss Cheese)",
					serving_qty: 1,
					nf_calories: 360,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Elevation Burger",
					region: 1,
					brand_type: 1,
					nix_item_id: "23cb91827346fe8d1b27015c",
					locale: "en_US"
				},
				{
					food_name: "Grilled Cheese (With Cheddar Cheese)",
					serving_unit: "Sandwich",
					nix_brand_id: "513fbc1283aa2dc80c0000be",
					brand_name_item_name: "Elevation Burger Grilled Cheese (With Cheddar Cheese)",
					serving_qty: 1,
					nf_calories: 360,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Elevation Burger",
					region: 1,
					brand_type: 1,
					nix_item_id: "513fc99b927da70408006d9f",
					locale: "en_US"
				},
				{
					food_name: "Grilled Cheese, BIGS",
					serving_unit: "Sandwich",
					nix_brand_id: "692438410e5212648d17de6e",
					brand_name_item_name: "Potbelly Grilled Cheese, BIGS",
					serving_qty: 1,
					nf_calories: 700,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Potbelly",
					region: 1,
					brand_type: 1,
					nix_item_id: "69243850777049f182dcbcd2",
					locale: "en_US"
				},
				{
					food_name: "Kid's Grilled Cheese",
					serving_unit: "serving",
					nix_brand_id: "521b95494a56d006cae2a612",
					brand_name_item_name: "Larkburger Kid's Grilled Cheese",
					serving_qty: 1,
					nf_calories: 500,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Larkburger",
					region: 1,
					brand_type: 1,
					nix_item_id: "529e80ceea63d4933500fc87",
					locale: "en_US"
				},
				{
					food_name: "Kids Grilled Cheese",
					serving_unit: "sandwich",
					nix_brand_id: "513fbc1283aa2dc80c00002f",
					brand_name_item_name: "Whataburger Kids Grilled Cheese",
					serving_qty: 1,
					nf_calories: 510,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Whataburger",
					region: 1,
					brand_type: 1,
					nix_item_id: "521b95ca4a56d006d578b7b8",
					locale: "en_US"
				},
				{
					food_name: "Puffs, Grilled Cheese",
					serving_unit: "bag",
					nix_brand_id: "51db37ba176fe9790a898cca",
					brand_name_item_name: "Snikiddy Puffs, Grilled Cheese",
					serving_qty: 1,
					nf_calories: 90,
					photo: {
						thumb: "https://d1r9wva3zcpswd.cloudfront.net/54f91fe8fc4a4b531b10a7d3.jpeg"
					},
					brand_name: "Snikiddy",
					region: 1,
					brand_type: 2,
					nix_item_id: "54f8e60ea57fd19057029daf",
					locale: "en_US"
				},
				{
					food_name: "Combination Grilled Portobello and Grilled Chicken Salad with Parmesan Cheese",
					serving_unit: "salad",
					nix_brand_id: "513fbc1283aa2dc80c000342",
					brand_name_item_name:
						"Cheeburger Cheeburger Combination Grilled Portobello and Grilled Chicken Salad with Parmesan Cheese",
					serving_qty: 1,
					nf_calories: 550,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Cheeburger Cheeburger",
					region: 1,
					brand_type: 1,
					nix_item_id: "ddee846966e3468913d550ec",
					locale: "en_US"
				},
				{
					food_name: "55+ Grilled Cheese",
					serving_unit: "Serving",
					nix_brand_id: "513fbc1283aa2dc80c000018",
					brand_name_item_name: "IHOP 55+ Grilled Cheese",
					serving_qty: 1,
					nf_calories: 680,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "IHOP",
					region: 1,
					brand_type: 1,
					nix_item_id: "152181260a20033005d1b918",
					locale: "en_US"
				},
				{
					food_name: "Crackers, Grilled Cheese",
					serving_unit: "package",
					nix_brand_id: "51db37b9176fe9790a898c66",
					brand_name_item_name: "Lance Crackers, Grilled Cheese",
					serving_qty: 1,
					nf_calories: 200,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Lance",
					region: 1,
					brand_type: 2,
					nix_item_id: "51c3bf3097c3e6d8d3b4851a",
					locale: "en_US"
				},
				{
					food_name: "Grilled Cheese Sandwich",
					serving_unit: "sandwich",
					nix_brand_id: "521b95474a56d006cae2a12c",
					brand_name_item_name: "Burgermaster Grilled Cheese Sandwich",
					serving_qty: 1,
					nf_calories: 510,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Burgermaster",
					region: 1,
					brand_type: 1,
					nix_item_id: "53444fb57ba4ca15456f606b",
					locale: "en_US"
				},
				{
					food_name: "Grilled Cheese Panini Sandwich with Cheese Roll",
					serving_unit: "sandwich",
					nix_brand_id: "513fbc1283aa2dc80c000045",
					brand_name_item_name: "Cinnabon Grilled Cheese Panini Sandwich with Cheese Roll",
					serving_qty: 1,
					nf_calories: 520,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Cinnabon",
					region: 1,
					brand_type: 1,
					nix_item_id: "23cb4360fe99bc1bf1a0d59f",
					locale: "en_US"
				},
				{
					food_name: "Cheeseburger, Flame-Grilled",
					serving_unit: "chips",
					nix_brand_id: "51db37d0176fe9790a899de4",
					brand_name_item_name: "Ruffles Cheeseburger, Flame-Grilled",
					serving_qty: 11,
					nf_calories: 150,
					photo: {
						thumb: "https://d1r9wva3zcpswd.cloudfront.net/57d37e4099deb07e4a52b1f4.jpeg"
					},
					brand_name: "Ruffles",
					region: 1,
					brand_type: 2,
					nix_item_id: "57d37e0ab304f3da2010f17e",
					locale: "en_US"
				},
				{
					food_name: "Kid Grilled Cheese",
					serving_unit: "serving",
					nix_brand_id: "513fbc1283aa2dc80c0005a5",
					brand_name_item_name: "T.MAC Kid Grilled Cheese",
					serving_qty: 1,
					nf_calories: 530,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "T.MAC",
					region: 1,
					brand_type: 1,
					nix_item_id: "53444e93bbe3351445980688",
					locale: "en_US"
				},
				{
					food_name: "Gooey Grilled Cheese",
					serving_unit: "serving",
					nix_brand_id: "5823414531ac76747841c28e",
					brand_name_item_name: "Smitty's Gooey Grilled Cheese",
					serving_qty: 1,
					nf_calories: 360,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Smitty's",
					region: 1,
					brand_type: 1,
					nix_item_id: "c640779599bde6e28ea75f86",
					locale: "en_US"
				},
				{
					food_name: "Halloumi, Grilled Cheese",
					serving_unit: "g",
					nix_brand_id: "51db380b176fe9790a89b0c0",
					brand_name_item_name: "Olympus Halloumi, Grilled Cheese",
					serving_qty: 1,
					nf_calories: 317.8999938964844,
					photo: {
						thumb: "https://d1r9wva3zcpswd.cloudfront.net/5d3feced39bb583615752405.jpeg"
					},
					brand_name: "Olympus",
					region: 2,
					brand_type: 2,
					nix_item_id: "5d3fece8608d4a6531b57117",
					locale: "en_US"
				},
				{
					food_name: "Grilled Vegetable Salad with Grilled Crostini with Goat Cheese",
					serving_unit: "serving",
					nix_brand_id: "513fbc1283aa2dc80c00088c",
					brand_name_item_name:
						"Gordon Biersch Brewery Grilled Vegetable Salad with Grilled Crostini with Goat Cheese",
					serving_qty: 1,
					nf_calories: 290,
					photo: {
						thumb: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
						highres: null,
						is_user_uploaded: false
					},
					brand_name: "Gordon Biersch Brewery",
					region: 1,
					brand_type: 1,
					nix_item_id: "23cb881691f41642d04cacef",
					locale: "en_US"
				}
			]
		}
	};
};

export default getState;
