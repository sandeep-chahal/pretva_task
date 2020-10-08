import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./styles.scss";

const NavButtons = () => {
	const history = useHistory();
	return (
		<div className="nav-btns">
			<NavLink className="left-btn" to="/search-supplier-products">
				Search Supplier Products
			</NavLink>
			<NavLink to="/search-buyer-requirements" className="right-btn">
				Search Buyer Requirements
			</NavLink>
		</div>
	);
};

export default NavButtons;
