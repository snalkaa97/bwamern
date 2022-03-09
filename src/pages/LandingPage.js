import React, { Component } from "react";
// import modulename from "elements/Button";
import Header from "parts/Header";
import Pokemons from "parts/Pokemons";
import Footer from "parts/Footer";
export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
		this.state = {
			data: [],
		};
	}
	componentDidMount() {
		window.title = "Staycation | Home";
		window.scrollTo(0, 0);
		const getPokemonItem = `${"https://pokeapi.co/api/v2/pokemon/"}`;
		fetch(getPokemonItem, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					data: json.results.map((result, index) => ({
						...result,
						id: index + 1,
						image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							index + 1
						}.png`,
					})),
				});
			});
	}
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				<Pokemons data={this.state.data} />
				<Footer />
			</>
		);
	}
}
