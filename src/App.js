import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import Checkout from "pages/Checkout";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/properties/:id" component={DetailsPage} />
				<Route exact path="/example" component={Example} />
				<Route exact path="/checkout" component={Checkout} />
				{/* <Route path="/stories" component={Example}/> */}
			</Router>
		</div>
	);
}

export default App;
