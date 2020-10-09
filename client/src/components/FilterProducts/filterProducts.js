import React, { useState } from "react";
import "./styles.scss";
import { defaultFilter, parseFilter } from "../../utility";
import { getFilteredProducts } from "../../utility/fetch";

import Filter from "../Filter";
import SearchInput from "../SearchInput";
import Product from "../Product";
import AppliedFilters from "../AppliedFilters";

const FilterProducts = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState(null);
	const [filter, setFilter] = useState(defaultFilter);
	const [appliedFilter, setAppliedFilter] = useState(defaultFilter);
	const [searchQuery, setSearchQuery] = useState([]);

	const handleSearchQuery = (value) => {
		if (searchQuery.some((v) => v === value)) {
			handleSearch();
		} else if (value) {
			const newSearchQuery = [...searchQuery, value];
			setSearchQuery(newSearchQuery);
			handleSearch(newSearchQuery);
		}
	};

	const handleSearch = (value = searchQuery, afilter = filter) => {
		setError(null);
		setLoading(true);
		setProducts(null);
		getFilteredProducts(value, parseFilter(afilter)).then((products) => {
			if (products instanceof Error) {
				setError(products);
				setLoading(false);
			} else {
				setProducts(products);
				setLoading(false);
			}
			setAppliedFilter({ ...afilter });
		});
	};

	const handleRemoveQuery = (i) => {
		const newSearchQuery = searchQuery.filter((_, _i) => _i !== i);
		setSearchQuery(newSearchQuery);
		handleSearch(newSearchQuery);
	};

	const clearAll = () => {
		setAppliedFilter(defaultFilter);
		setFilter(defaultFilter);
		setSearchQuery([]);
		setError(null);
		setLoading(false);
		setProducts(null);
	};

	return (
		<div className="filter-products">
			<Filter
				filter={filter}
				setFilter={setFilter}
				applyFilters={handleSearch}
			/>
			<SearchInput onClick={handleSearchQuery} />
			<AppliedFilters
				filter={appliedFilter}
				setFilter={setFilter}
				handleSearch={handleSearch}
				searchQuery={searchQuery}
				handleRemoveQuery={handleRemoveQuery}
				clearAll={clearAll}
			/>
			<main>
				{loading && <div className="loading">Loading...</div>}
				{!loading && error && <div className="error">{error.message}</div>}
				{!loading && !error && products && (
					<div className="products">
						{products.map((product) => (
							<Product type="req" product={product} key={product._id} />
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
