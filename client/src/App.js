import React from "react";
import NavButtons from "./components/NavButtons";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<NavButtons />
			<Switch>
				<Route
					path="/search-supplier-products"
					component={() => <div>Search Supplier Products</div>}
				/>
				<Route
					path="/search-buyer-requirements"
					component={() => <div>Search Buyer Requirements</div>}
				/>
				<Redirect to="/search-supplier-products" />
			</Switch>
		</div>
	);
}

export default App;
