import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../images/logo.png";

export class Navbar extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav className="navbar containernavbar navbar-expand-lg navbar-dark bg-dark">
							<div className="container w-80%">
								<div className="mx-auto">
									<div className="text-center">
										<div className="navbar-brand mx-auto">
											<img src={Logo} width="150" height="150" alt="logo" />
										</div>
									</div>
									<button
										className="navbar-toggler col"
										type="button"
										data-toggle="collapse"
										data-target="#navbarResponsive"
										aria-controls="navbarResponsive"
										aria-expanded="false"
										aria-label="Toggle navigation">
										<span className="navbar-toggler-icon" />
									</button>
									<div className="collapse navbar-collapse" id="navbarResponsive">
										<ul className="navbar-nav ml-auto">
											<li className="nav-item active">
												<Link to="/">
													<a className="nav-link text-dark" href="#">
														Home
														<span className="sr-only">(current)</span>
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link to="/food-tracker">
													<a className="nav-link text-dark" href="#">
														Food Tracker
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link to="/contact">
													<a className="nav-link text-dark" href="#">
														Contact
													</a>
												</Link>
											</li>
											<div
												className="btn-group"
												role="group"
												aria-label="Button group with nested dropdown">
												<button type="button" className="btn btn-primary">
													<Link to="/log-in">
														<a className="dropdown-item text-light" href="#">
															Log In
														</a>
													</Link>
												</button>
												<div className="btn-group" role="group">
													<button
														id="btnGroupDrop1"
														type="button"
														className="btn btn-primary dropdown-toggle"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"></button>
													<div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
														<Link to="/create-user">
															<a className="dropdown-item text-dark" href="#">
																Sign In
															</a>
														</Link>
														<Link to="/edit-info">
															<a className="dropdown-item text-dark" href="#">
																Edit Info
															</a>
														</Link>
														<Link to="/">
															<a
																className="dropdown-item text-dark"
																href="#"
																onClick={actions.logout()}>
																Log Out
															</a>
														</Link>
													</div>
												</div>
											</div>
										</ul>
									</div>
								</div>
							</div>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
