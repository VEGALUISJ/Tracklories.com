import React, { Component } from "react";

export const Footer = () => (
	<footer className="page-footer font-small special-dark bg-dark">
		<div className="container">
			<div className="row">
				<div className="col-md-6 mb-4" />
				<form className="form-inline" />
				<input
					className="form-control form-control-sm mr-3 w-75"
					type="text"
					placeholder="Search"
					aria-label="Search"
				/>

				<i className="fas fa-search" aria-hidden="true" />
				<div className="col-md-6 mb-4" />
				<form className="input-group" />
				<input
					className="form-control form-control-sm"
					type="text"
					placeholder="Your email"
					aria-label="Your email"
					aria-describedby="basic-addon2"
				/>
				<div className="input-group-append">
					<button className="btn btn-sm btn-outline-white my-0" type="button">
						Sign up
					</button>
				</div>
			</div>
		</div>
		<p className="mx-auto text-white text-center">
			Find us in <br />
			<i className="fab fa-facebook mr-2" />
			<i className="fab fa-instagram mr-2" />
			<i className="fab fa-twitter mr-2" />
			<i className="fab fa-youtube mr-2" />
			by <br />
			<a className="text-white" href="http://www.4geeksacademy.com">
				In all social
			</a>
		</p>
		<div className="footer-copyright text-center py-3">
			© 2019 Copyright:
			<a href="https://mdbootstrap.com/education/bootstrap/">tracklories.com</a>
		</div>
	</footer>
);
