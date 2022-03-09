import React from "react";
import Fade from "react-reveal";
import Button from "elements/Button";

export default function Pokemons({ data }) {
	// return data.map((pokemon, index1) => {});
	return (
		<div className="container">
			<Fade bottom>
				<h4 className="mb-3">Pokemons List</h4>
				<div className="container-grid">
					{data.map((pokemon, index) => {
						return (
							<div
								key={`mostpicked-${index}`}
								className={`item column-6 ${index === 0 ? " row-1" : " row-1"}`}
							>
								<Fade bottom delay={500 * index}>
									<div className="card card-featured">
										<div className="tag">
											<span className="font-weight-light">{pokemon.name}</span>
										</div>
										<figure className="image-wrapper">
											<img
												src={pokemon.image}
												alt={pokemon.name}
												className="img-cover"
											/>
										</figure>
										<div className="meta-wrapper">
											<Button
												type="link"
												className="text-gray-900 stretched-link d-block"
												href={`/pokemon/${pokemon.id}`}
											>
												<h5>{pokemon.name}</h5>
											</Button>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</Fade>
		</div>
	);
}
