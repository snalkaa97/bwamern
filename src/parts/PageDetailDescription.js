import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
	return (
		<main>
			<h4>About The Place</h4>
			{ReactHtmlParser(data.description)}
			<div className="row" style={{ marginTop: 30 }}>
				{data.features.map((feature, index) => {
					return (
						<div
							className="col-3"
							key={`feature-${index}`}
							style={{ marginBottom: 20 }}
						>
							<img
								className="d-block mb-2"
								src={feature.imageUrl}
								alt={feature.name}
								width="38"
							/>{" "}
							<span>{feature.qty}</span>{" "}
							<span className="text-gray-500 font-weight-light">
								{feature.name}
							</span>
						</div>
					);
				})}
			</div>
		</main>
	);
}
