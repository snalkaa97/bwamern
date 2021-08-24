import React from "react";
import Fade from "react-reveal";
import Button from "elements/Button";
export default function Header(props) {
	return (
		<Fade>
			<header className="spacing-sm">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light">
						<Button className="brand-text-icon mx-auto" href="" type="link">
							POK<span className="text-gray-900">eMON</span>
						</Button>
					</nav>
				</div>
			</header>
		</Fade>
	);
}
