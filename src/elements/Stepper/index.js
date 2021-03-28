import React, { useState } from "react";
import propTypes from "prop-types";
export default function Stepper(props) {
	const { steps, initialStep } = props;
	const stepKeys = Object.keys(steps);

	const [CurrentStep, SetCurrentStep] = useState(
		stepKeys.indexOf(initialStep) > 1 ? initialStep : stepKeys[0]
	);
	const totalStep = stepKeys.length;
	const indexStep = stepKeys.indexOf(CurrentStep);

	function prevStep() {
		if (+initialStep > 0) SetCurrentStep(stepKeys[indexStep - 1]);
	}
	function nextStep() {
		if (+initialStep < totalStep) SetCurrentStep(stepKeys[indexStep + 1]);
	}
	return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
	data: propTypes.object,
	initialStep: propTypes.string,
};
