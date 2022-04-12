import React, { Component } from "react";

import GuidesItem from "./guides-item";

export default class GuideContainer extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle:
				"This provides the many Uniphore support options available to you.",
			isLoading: false,
			data: [
				{ title: "MongoDB", category: "Databases" },
				{ title: "Postgres", category: "Databases" },
				{
					title: "Common Installation Issues",
					category: "Implementation",
				},
				{ title: "API Testing", category: "APIs" },
			],
		};

		this.handleFilter = this.handleFilter.bind(this);
	}

	handleFilter(filter) {
		this.setState({
			data: this.state.data.filter((item) => {
				return item.category === filter;
			}),
		});
	}

	guideItems() {
		return this.state.data.map((item) => {
			return <GuidesItem title={item.title} url={"google.com"} />;
		});
	}

	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h2>{this.state.pageTitle}</h2>

				<button onClick={() => this.handleFilter("Databases")}>
					Databases
				</button>
				<button onClick={() => this.handleFilter("Implementation")}>
					Implementation
				</button>
				<button onClick={() => this.handleFilter("APIs")}>APIs</button>

				{this.guideItems()}
			</div>
		);
	}
}
