import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GuideContainer from "./guides/guides-container";
import NavigationContainer from "./navigation/navigation-container";
import UProductSuite from "./pages/u-product-suite";
import QForSales from "./pages/q-for-sales";
import InteractProductSuite from "./pages/interact-product-suite";
import Home from "./pages/home";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Router>
					<div>
						<NavigationContainer />

						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								path="/u-product-suite"
								component={UProductSuite}
							/>
							<Route path="/q-for-sales" component={QForSales} />
							<Route
								path="/interact-product-suite"
								component={InteractProductSuite}
							/>
						</Switch>
					</div>
				</Router>

				<h1>Uniphore Guide Home</h1>
				<div>
					<GuideContainer />
				</div>
			</div>
		);
	}
}
