import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<IconText />
					<p className="brand-tagline">
						Lorem ipsum dolor sit amet consectetur
					</p>
				</div>
				<div className="col-2 mr-5">
					<h6 className="mt-2">For Beginners</h6>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button type="link" href={`/register`}>
								New Account
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href={`/register`}>
								Start Booking Room
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href={`/properties`}>
								Use Payment
							</Button>
						</li>
					</ul>
				</div>
				<div className="col-2 mr-5">
					<h6 className="mt-2">Explore Us</h6>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button type="link" href={`/career`}>
								Our Careers
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href={`/privacy`}>
								Privacy
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href={`/terms`}>
								Terms & conditions
							</Button>
						</li>
					</ul>
				</div>
				<div className="col-4">
					<h6 className="mt-2">Connect Us</h6>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button
								isExternal
								type="link"
								href="mailto:support@staycation.com"
							>
								support@staycation.com
							</Button>
						</li>
						<li className="list-group-item">
							<Button isExternal type="link" href="tel:+62211111">
								021 - 1111 -11
							</Button>
						</li>
						<li className="list-group-item">
							<span>Staycation, Jawa Barat</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col text-center copyrights">Copyright 2021 - Alka</div>
			</div>
		</div>
	);
}
