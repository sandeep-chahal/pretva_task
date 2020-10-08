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
