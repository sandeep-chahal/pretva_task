import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const NavButtons = () => {
	const history = useHistory();
	return (
		<div className="nav-btns">
			<button
				className="left-btn"
				onClick={() => history.push("/search-supplier-products")}
			>
				Search Supplier Products
			</button>
			<button
				onClick={() => history.push("/search-buyer-requirements")}
				className="right-btn"
			>
				Search Buyer Requirements
			</button>
		</div>
	);
};

export default NavButtons;
