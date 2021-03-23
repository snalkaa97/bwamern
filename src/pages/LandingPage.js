import React, { Component } from "react";
// import modulename from "elements/Button";
import Hero from "parts/Hero";
import LandingPageJson from "json/landingPage.json";
import Header from "parts/Header";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				<Hero refMostPicked={this.refMostPicked} data={LandingPageJson.hero} />
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={LandingPageJson.mostPicked}
				/>
				<Categories data={LandingPageJson.categories} />
			</>
		);
	}
}
