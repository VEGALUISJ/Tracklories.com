import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container w-80%">
					<div className="mx-auto">
						<div className="text-center">
							<h2 className="navbar-brand">Tracklories</h2>
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
										<a className="nav-link" href="#">
											Home
											<span className="sr-only">(current)</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/food-tracker">
										<a className="nav-link" href="#">
											Food Tracker
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact">
										<a className="nav-link" href="#">
											Contact
										</a>
									</Link>
								</li>
								<li className="btn-group">
									<button
										type="button"
										className="drop-button btn btn-secondary dropdown-toggle"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Log in
									</button>
									<div className="dropdown-menu dropdown-menu ">
										<Link to="/log-in">
											<a className="dropdown-item" href="#">
												Log In
											</a>
										</Link>
										<Link to="/create-user">
											<a className="dropdown-item" href="#">
												Sign In
											</a>
										</Link>
										<Link to="/edit-info">
											<a className="dropdown-item" href="#">
												Edit Info
											</a>
										</Link>
										<div className="dropdown-divider" />
										<Link to="/">
											<a className="dropdown-item" href="#">
												Log Out
											</a>
										</Link>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
