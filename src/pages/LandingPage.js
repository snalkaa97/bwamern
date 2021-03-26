import React, { Component } from "react";
// import modulename from "elements/Button";
import Hero from "parts/Hero";
import LandingPageJson from "json/landingPage.json";
import Header from "parts/Header";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";
export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}
	componentDidMount() {
		window.title = "Staycation | Home";
		window.scrollTo(0, 0);
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
				<Testimoni data={LandingPageJson.testimonial} />
				<Footer />
			</>
		);
	}
}
