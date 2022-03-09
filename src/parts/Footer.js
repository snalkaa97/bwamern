import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-auto" style={{ width: 350 }}>
						<IconText />
						<p className="brand-tagline">Pokemon Information.</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-center copyrights">
						Copyright 2021 • Syaifudin Alkatiri • PokemonApp
					</div>
				</div>
			</div>
		</footer>
	);
}
