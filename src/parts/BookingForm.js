import React, { Component } from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import ReactHtmlParser from "react-html-parser";

export default class BookingForm extends Component {
	render() {
		// const { data } = this.state;
		const { data } = this.props;
		return (
			<div className="card bordered mb-5" style={{ padding: "60px 80px" }}>
				<main>
					<h4 className="text-center">{data.pokemon.name}</h4>
					{ReactHtmlParser(data.description.flavor_text)}
				</main>
				<center>
					<figure className="image-wrapper">
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokemon.id}.png`}
							alt={""}
							width="200px"
						/>
						<p>
							Height: {data.pokemon.height} | Weight:
							{data.pokemon.weight} | Type: {data.types}
						</p>
					</figure>
				</center>

				<Button
					className="btn"
					hasShadow
					isPrimary
					isBlock
					onClick={this.startBooking}
				>
					Add To List
				</Button>
			</div>
		);
	}
}
BookingForm.propTypes = {
	itemDetails: propTypes.object,
	startBooking: propTypes.func,
};
