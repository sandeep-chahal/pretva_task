import React from "react";
import "./styles.scss";
import { defaultFilter, isFilterOn } from "../../utility";

const AppliedFilters = ({
	filter,
	setFilter,
	handleSearch,
	searchQuery,
	handleRemoveQuery,
	clearAll,
}) => {
	const handleFilterChange = (newFilter) => {
		if (newFilter) setFilter(newFilter);
		else setFilter(defaultFilter());

		handleSearch();
	};
	return (
		<div className="applied-filters">
			<span>Applied Filters:</span>
			{searchQuery.map((query, i) => (
				<div onClick={() => handleRemoveQuery(i)} className={query + i}>
					{query}
				</div>
			))}
			{Object.keys(filter).map((fk) => {
				return Object.keys(filter[fk]).map((tk) =>
					filter[fk][tk].on ? (
						<div
							onClick={() => {
								const newFilter = { ...filter };
								newFilter[fk][tk].on = false;
								handleFilterChange(newFilter);
							}}
						>
							{fk} {tk === "$lt" ? " < " : null} {tk === "$gt" ? " > " : null}
							{tk === "$eq" ? " = " : null} {filter[fk][tk].value}
						</div>
					) : null
				);
			})}
			{searchQuery.length || isFilterOn(filter) ? (
				<div onClick={clearAll}>Clear All</div>
			) : null}
		</div>
	);
};

export default AppliedFilters;
