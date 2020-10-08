import React from "react";
import "./styles.scss";
import { defaultFilter } from "../../utility";

const AppliedFilters = ({ filter, setFilter, handleSearch }) => {
	const handleFilterChange = (newFilter) => {
		if (newFilter) setFilter(newFilter);
		else setFilter(defaultFilter());

		handleSearch();
	};
	return (
		<div className="applied-filters">
			<span>Applied Filters:</span>
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
			<div onClick={() => handleFilterChange()}>Clear All</div>
		</div>
	);
};

export default AppliedFilters;
