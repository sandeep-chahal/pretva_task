import React, { useState, useRef } from "react";
import { formatNumber } from "../../utility";
import "./styles.scss";

const f = [
	{ name: "Quantity", slug: "quantity" },
	{ name: "Price", slug: "price_rs" },
	{ name: "Weight", slug: "weight_gsm" },
	{ name: "Lead Time", slug: "lead_time" },
];

const Filter = ({ applyFilters, filter, setFilter }) => {
	const [open, setOpen] = useState(null); //dropdown

	const openDropDown = (name) => {
		setOpen((last_opened) => (last_opened === name ? null : name));
	};

	return (
		<div className="filter">
			<div className="header">Search Filters</div>
			<div className="items">
				{f.map((f) => (
					<div className="item" key={f.slug}>
						<div className="wrapper" onClick={() => openDropDown(f.name)}>
							<div>{f.name}</div>
							<img src={require("../../Assets/drop-down-arrow.svg")} />
						</div>
						{open === f.name ? (
							<div className="dropdown">
								<div className="dropdown-item">
									<div
										onClick={(e) => {
											const nf = { ...filter };
											nf[f.slug].$lt.on = !nf[f.slug].$lt.on;
											setFilter(nf);
										}}
										className="type"
									>
										<div
											className={`check ${
												filter[f.slug].$lt.on ? "active" : ""
											}`}
										></div>
										<div>Less then</div>
									</div>
									<input
										type="number"
										value={filter[f.slug]["$lt"].value}
										onChange={(e) => {
											const nf = { ...filter };
											nf[f.slug].$lt.value = e.target.value;
											setFilter(nf);
										}}
									/>
								</div>

								<div className="dropdown-item">
									<div
										onClick={(e) => {
											const nf = { ...filter };
											nf[f.slug].$gt.on = !nf[f.slug].$gt.on;
											setFilter(nf);
										}}
										className="type"
									>
										<div
											className={`check ${
												filter[f.slug].$gt.on ? "active" : ""
											}`}
										></div>
										<div>Greater then</div>
									</div>
									<input
										type="number"
										value={filter[f.slug]["$gt"].value}
										onChange={(e) => {
											const nf = { ...filter };
											nf[f.slug].$gt.value = e.target.value;
											setFilter(nf);
										}}
									/>
								</div>
								<div className="dropdown-item">
									<div
										onClick={(e) => {
											const nf = { ...filter };
											nf[f.slug].$eq.on = !nf[f.slug].$eq.on;
											setFilter(nf);
										}}
										className="type"
									>
										<div
											className={`check ${
												filter[f.slug].$eq.on ? "active" : ""
											}`}
										></div>
										<div>Equals to</div>
									</div>
									<input
										type="number"
										value={filter[f.slug]["$eq"].value}
										onChange={(e) => {
											const nf = { ...filter };
											nf[f.slug].$eq.value = e.target.value;
											setFilter(nf);
										}}
									/>
								</div>
							</div>
						) : null}
					</div>
				))}
				<div
					className="apply-btn"
					onClick={() => {
						applyFilters();
						setOpen(null);
					}}
				>
					Apply
				</div>
			</div>
		</div>
	);
};

export default Filter;
