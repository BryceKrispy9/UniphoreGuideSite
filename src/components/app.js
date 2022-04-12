import React, { Component } from "react";

import GuideContainer from "./guides/guides-container";
import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<NavigationContainer />
				<h1>Uniphore Guide Home</h1>
				<div>
					<GuideContainer />
				</div>
			</div>
		);
	}
}
