import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<NavLink exact to="/" activeClassName="nav-link-active">
					Home
				</NavLink>

				<NavLink
					to="/u-product-suite"
					activeClassName="nav-link-active"
				>
					U Product Suite
				</NavLink>

				<NavLink to="/q-for-sales" activeClassName="nav-link-active">
					Q For Sales
				</NavLink>

				<NavLink
					to="/interact-product-suite"
					activeClassName="nav-link-active"
				>
					Interact Product Suite
				</NavLink>

				{false ? <button>Add Guide</button> : null}

				<NavLink
					to={{ pathname: "https://uniphore.com" }}
					target="_blank"
				>
					Uniphore Company Website
				</NavLink>

				<NavLink
					to={{ pathname: "https://uniphore.com/support" }}
					target="_blank"
				>
					Contact Support
				</NavLink>
			</div>
		);
	}
}
