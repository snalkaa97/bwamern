import React from "react";
import Fade from "react-reveal/Fade";
import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle(props) {
	const { data, breadcrumb } = props;
	return (
		<section className="container spacing-sm">
			<Fade bottom>
				<div className="row align-items-center">
					<div className="col-lg-4 col-sm-12">
						<Breadcrumb data={breadcrumb} />
					</div>
				</div>
			</Fade>
		</section>
	);
}
