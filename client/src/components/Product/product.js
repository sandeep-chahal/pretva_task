import React from "react";
import "./styles.scss";
import { formatNumber } from "../../utility";

/*
	type:
		pro = product
		req = requirement
*/

const Product = ({ product, type = "pro" }) => {
	return (
		<div className="product">
			<h3>{type === "pro" ? product.product_name : product.buyer_name}</h3>
			<div className="underline" />
			<h4>
				<span className="label">{type === "pro" ? "Buyer:" : "Fabric:"}</span>
				<span className="value">
					{type === "req" ? product.product_name : product.buyer_name}
				</span>
			</h4>
			<h4>
				<span className="label">Price:</span>
				<span className="value">INR {formatNumber(product.price_rs)}</span>
			</h4>
			<h4>
				<span className="label">Quantity:</span>
				<span className="value">{product.quantity}</span>
			</h4>
			<h4>
				<span className="label">Weight:</span>
				<span className="value">{product.weight_gsm} gsm</span>
			</h4>
			<h4>
				<span className="label">Lead Time:</span>
				<span className="value">{product.lead_time} month</span>
			</h4>
		</div>
	);
};

export default Product;
