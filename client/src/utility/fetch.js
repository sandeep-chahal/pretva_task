export const searchProducts = async (value) => {
	try {
		const req = await fetch(`/api/products/${value}`);
		const products = await req.json();
		if (Array.isArray(products))
			if (!products.length) throw new Error("No Product Found!");
			else return products;
		throw new Error("Something Went Wrong");
	} catch (err) {
		console.log(err);
		return err;
	}
};
export const getFilteredProducts = async (value, filter) => {
	try {
		let filters = {
			...filter,
		};
		if (value)
			filters["$or"] = [
				{
					product_name: value,
				},
				{
					buyer_name: value,
				},
			];

		const req = await fetch(`/api/filter-products`, {
			method: "POST",
			body: JSON.stringify({ filters }),
			headers: {
				"Content-type": "application/json",
			},
		});
		const products = await req.json();
		console.log(products);
		if (Array.isArray(products))
			if (!products.length) throw new Error("No Product Found!");
			else return products;
		throw new Error("Something Went Wrong");
	} catch (err) {
		console.log(err);
		return err;
	}
};
