import React, { Component } from "react";
// import modulename from "elements/Button";
import Hero from "parts/Hero";
import LandingPageJson from "json/landingPage.json";
import Header from "parts/Header";
export default class LandingPage extends Component {
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				<Hero data={LandingPageJson.hero} />
			</>
		);
	}
}
