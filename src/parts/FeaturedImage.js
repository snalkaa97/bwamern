import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImage(props) {
	return (
		<section className="container">
			<div className="container-grid sm">
				<div className={`item column-12 row-1`}>
					<center>
						<Fade bottom delay={300 * 2}>
							<div className="card">
								<figure className="image-wrapper">
									<img
										src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`}
										alt={""}
										width="500px"
									/>
								</figure>
							</div>
						</Fade>
					</center>
				</div>
			</div>
		</section>
	);
}
