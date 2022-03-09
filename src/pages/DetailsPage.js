import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import BookingForm from "parts/BookingForm";
import Footer from "parts/Footer";
export default class DetailsPage extends Component {
	constructor() {
		super();
		this.state = {
			pokemon: [],
			description: "",
			types: "",
		};
	}
	componentDidMount() {
		window.title = "Details Page";
		window.scrollTo(0, 0);
		const getPokemonItem = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`;
		fetch(getPokemonItem, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					pokemon: json,
					types: json.types.map((item) => item.type.name).join(" "),
				});
			});
		const description = `https://pokeapi.co/api/v2/pokemon-species/${this.props.match.params.id}/`;
		fetch(description, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					description: json.flavor_text_entries[0],
				});
			});
	}
	render() {
		const breadcrumb = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "Pokemon Detail", pageHref: "" },
		];
		console.log(this.state);
		return (
			<>
				<Header {...this.props}></Header>
				<PageDetailTitle
					breadcrumb={breadcrumb}
					data={this.state.pokemon}
				></PageDetailTitle>
				<div class="d-flex justify-content-center">
					<BookingForm data={this.state} />
				</div>
				<Footer />
			</>
		);
	}
}
