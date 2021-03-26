import React, { useState } from "react";
import "./index.scss";
import propTypes from "prop-types";

export default function Number(props) {
	const {
		value,
		placeholder,
		name,
		min,
		max,
		prefix,
		suffix,
		isSuffixPlural,
	} = props;

	// console.log(props);
	const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

	const onChange2 = (e) => {
		let value = String(e.target.value);
		if (prefix) value = value.replace(prefix);
		if (suffix) value = value.replace(suffix);

		const patternNumeric = new RegExp("[0-9]*");
		const isNumeric = patternNumeric.test(value);

		if (isNumeric && +value <= max && +value >= min) {
			//+value atau Number(value)
			props.onChange({
				target: {
					name: name,
					value: +value,
				},
			});
			setInputValue(
				`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
			);
		}
	};

	const minus = () => {
		if (value > min) {
			onChange2({
				target: {
					name: name,
					value: +value - 1,
				},
			});
		}
	};
	const plus = () => {
		if (value < max) {
			onChange2({
				target: {
					name: name,
					value: +value + 1,
				},
			});
		}
	};

	return (
		<div className={["input-number mb-3", props.outerClassName].join(" ")}>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text minus" onClick={minus}>
						-
					</span>
				</div>
				<input
					min={min}
					max={max}
					name={name}
					pattern="[0-9]*"
					className="form-control"
					placeholder={placeholder ? placeholder : "0"}
					value={String(InputValue)}
					onChange={onChange2}
				/>
				<div className="input-group-prepend">
					<span className="input-group-text plus" onClick={plus}>
						+
					</span>
				</div>
			</div>
		</div>
	);
}

Number.defaultProps = {
	min: 1,
	max: 1,
	prefix: "",
	suffix: "",
};

Number.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	onChange: propTypes.func,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
	isSuffixPlural: propTypes.bool,
};
