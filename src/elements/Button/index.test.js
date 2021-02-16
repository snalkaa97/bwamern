import Button from "./index";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
	const { container } = render(<Button isDisabled></Button>);
	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Is Loading", () => {
	const { container, getByText } = render(<Button isLoading></Button>);
	expect(getByText(/loading/i)).toBeInTheDocument();
	expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
	const { container } = render(<Button type="link" isExternal></Button>);
	expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> tag", () => {
	const { container } = render(
		<Router>
			<Button href="" type="link"></Button>
		</Router>
	);
	expect(container.querySelector("a")).toBeInTheDocument();
});
