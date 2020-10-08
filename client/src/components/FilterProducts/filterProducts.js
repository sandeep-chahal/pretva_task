import React, { useState } from "react";
import "./styles.scss";
import { defaultFilter, parseFilter } from "../../utility";
import { getFilteredProducts } from "../../utility/fetch";

import Filter from "../Filter";
import SearchInput from "../SearchInput";
import Product from "../Product";

const FilterProducts = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState(null);
	const [filter, setFilter] = useState(defaultFilter);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchQuery = (value) => {
		setSearchQuery(value);
		handleSearch(value);
	};

	const handleSearch = (value = searchQuery) => {
		setError(null);
		setLoading(true);
		setProducts(null);
		getFilteredProducts(value, parseFilter(filter)).then((products) => {
			if (products instanceof Error) {
				setError(products);
				setLoading(false);
			} else {
				setProducts(products);
				setLoading(false);
			}
		});
	};

	return (
		<div className="filter-products">
			<Filter
				filter={filter}
				setFilter={setFilter}
				applyFilters={handleSearch}
			/>
			<SearchInput onClick={handleSearchQuery} />
			<main>
				{loading && <div className="loading">Loading...</div>}
				{!loading && error && <div className="error">{error.message}</div>}
				{!loading && !error && products && (
					<div className="products">
						{products.map((product) => (
							<Product product={product} key={product._id} />
						))}
					</div>
				)}
				{!loading && !error && !products && (
					<div className="ideal">Search Something</div>
				)}
			</main>
		</div>
	);
};

export default FilterProducts;
