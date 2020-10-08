import React, { useRef } from "react";
import "./styles.scss";

const SearchInput = ({ onClick }) => {
	const input = useRef("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const search = input.current.trim();
		if (!search) alert("Enter something to search");
		else onClick(search);
		console.log(search);
	};
	return (
		<form className="search-input" onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<div className="green-block" />
				<input
					placeholder="Search"
					type="text"
					onChange={(e) => (input.current = e.target.value)}
				/>
			</div>
			<button type="submit">Search</button>
		</form>
	);
};
export default SearchInput;
