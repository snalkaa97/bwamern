import React, { Component } from "react";
import { InputDate } from "elements/Form";
import { InputNumber } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
	componentDidMount() {
		window.title = "Example Page";
		window.scrollTo(0, 0);
	}
	state = {
		data: {
			duration: 1,
			date: {
				startDate: new Date(),
				endDate: new Date(),
				key: "selection",
			},
		},
	};
	updateData = (e) => {
		this.setState({
			...this.state,
			data: {
				...this.state.data,
				[e.target.name]: e.target.value,
			},
		});
	};
	render() {
		const breadcrumbList = [
			{ pageTitle: "Home", pageHref: "/" },
			{ pageTitle: "House Details", pageHref: "/agents" },
		];
		const { data } = this.state;
		return (
			<div className="container">
				<div
					className="row align-item-center justify-content-center"
					style={{ height: "100vh" }}
				>
					<div className="col-auto">
						<Breadcrumb data={breadcrumbList} />
						<InputNumber
							max={30}
							isSuffixPlural
							suffix={` night`}
							onChange={this.updateData}
							name="duration"
							value={data.duration}
						/>
						<InputDate
							onChange={this.updateData}
							name="date"
							value={data.date}
						/>
					</div>
				</div>
			</div>
		);
	}
}
