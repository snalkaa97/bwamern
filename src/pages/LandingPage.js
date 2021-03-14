import React, { Component } from "react";
// import modulename from "elements/Button";
import Hero from "parts/Hero";
import LandingPageJson from "json/landingPage.json";
import Header from "parts/Header";
import MostPicked from "parts/MostPicked";
export default class LandingPage extends Component {
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				<Hero data={LandingPageJson.hero} />
				<MostPicked data={LandingPage.mostPicked} />
			</>
		);
	}
}
