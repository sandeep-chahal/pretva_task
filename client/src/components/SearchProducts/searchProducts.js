import React, { useState } from "react";
import "./styles.scss";
import Product from "../Product";
import SearchInput from "../SearchInput";
import { searchProducts } from "../../utility/fetch";

const SearchProducts = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState(null);

	const handleSearch = async (search) => {
		setLoading(true);
		setProducts(null);
		setError(null);
		const products = await searchProducts(search);
		if (products instanceof Error) setError(products);
		else {
			setProducts(products);
		}
		setLoading(false);
	};

	return (
		<div className="search-products">
			<SearchInput onClick={handleSearch} />
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
export default SearchProducts;
