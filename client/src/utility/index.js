export const formatNumber = (num) => {
	let n = String(num);
	if (n.length === 4) n = n.substr(0, 1) + "," + n.substr(1);
	else if (n.length === 5) n = n.substr(0, 2) + "," + n.substr(2);
	else if (n.length === 6) n = n.substr(0, 3) + "," + n.substr(3);
	return n;
};
