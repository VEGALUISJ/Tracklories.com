import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Contact } from "./views/contact";
import { Login } from "./views/log-in";
import { Edit } from "./views/edit-info";
import { Create } from "./views/create-user";
import { Tracker } from "./views/food-tracker";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const isLogin = login => {
		console.log("Estoy aqui", login);
		if (login == true) {
			console.log("Estoy dentro de if", login);
			return <Redirect from="/log-in" to="/" />;
		}
	};

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/contact" component={Contact} />
						<Route path="/log-in" render={() => <Login isLogin={isLogin} />} />
						<Route path="/edit-info" component={Edit} />
						<Route path="/create-user" component={Create} />
						<Route path="/food-tracker" component={Tracker} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
