import React, { Component } from "react";

export default class NavigationComponent extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<button>Home</button>
				<button>Uniphore Company Website</button>
				<button>Contact Support</button>
				{false ? <button>Add Guide</button> : null}
			</div>
		);
	}
}
