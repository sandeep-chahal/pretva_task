import React from "react";
import NavButtons from "./components/NavButtons";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchProducts from "./components/SearchProducts";

function App() {
	return (
		<div className="App">
			<NavButtons />
			<Switch>
				<Route path="/search-supplier-products" component={SearchProducts} />
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
