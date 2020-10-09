import React from "react";
import NavButtons from "./components/NavButtons";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchProducts from "./components/SearchProducts";
import FilterProducts from "./components/FilterProducts";

function App() {
	return (
		<div className="App">
			<NavButtons />
			<Switch>
				<Route path="/search-supplier-products" component={SearchProducts} />
				<Route path="/search-buyer-requirements" component={FilterProducts} />
				<Redirect to="/search-supplier-products" />
			</Switch>
		</div>
	);
}

export default App;
