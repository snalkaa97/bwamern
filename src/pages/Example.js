import React, { Component } from "react";
import InputNumber from "elements/Form/InputNumber";

export default class Example extends Component {
	state = {
		value: "1",
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		return (
			<div className="container">
				<div
					className="row align-item-center justify-content-center"
					style={{ height: "100vh" }}
				>
					<div className="col-auto">
						<InputNumber
							max={30}
							isSuffixPlural
							suffix={` night`}
							onChange={this.handleChange}
							name="value"
							value={this.state.value}
						/>
					</div>
				</div>
			</div>
		);
	}
}
