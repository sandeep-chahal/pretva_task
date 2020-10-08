export const formatNumber = (num) => {
	let n = String(num);
	if (n.length === 4) n = n.substr(0, 1) + "," + n.substr(1);
	else if (n.length === 5) n = n.substr(0, 2) + "," + n.substr(2);
	else if (n.length === 6) n = n.substr(0, 3) + "," + n.substr(3);
	return n;
};

export const parseFilter = (filters) => {
	const parsedFilter = {};
	for (let filter_name in filters) {
		let filter = filters[filter_name];
		let isOn = false;
		const t = {};
		if (filter.$lt.on) {
			isOn = true;
			t["$lt"] = Number(filter.$lt.value);
		}
		if (filter.$gt.on) {
			isOn = true;
			t["$gt"] = Number(filter.$gt.value);
		}
		if (filter.$eq.on) {
			isOn = true;
			t["$eq"] = Number(filter.$eq.value);
		}
		if (isOn) {
			parsedFilter[filter_name] = t;
		}
	}
	return parsedFilter;
};

export const defaultFilter = {
	quantity: {
		$lt: {
			on: false,
			value: 10,
		},
		$gt: {
			on: false,
			value: 10,
		},
		$eq: {
			on: false,
			value: 10,
		},
	},
	price_rs: {
		$lt: {
			on: false,
			value: 10,
		},
		$gt: {
			on: false,
			value: 10,
		},
		$eq: {
			on: false,
			value: 10,
		},
	},
	weight_gsm: {
		$lt: {
			on: false,
			value: 10,
		},
		$gt: {
			on: false,
			value: 10,
		},
		$eq: {
			on: false,
			value: 10,
		},
	},
	lead_time: {
		$lt: {
			on: false,
			value: 10,
		},
		$gt: {
			on: false,
			value: 10,
		},
		$eq: {
			on: false,
			value: 10,
		},
	},
};
