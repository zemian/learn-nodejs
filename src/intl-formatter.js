// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

let values = [0, 0.00, 0.99, 59.11, 2000, 500000000, -15000];
let fmtList = [
	new Intl.NumberFormat("en-US", {style: 'currency', currency: 'USD'}),
	new Intl.NumberFormat("en-US", {style: 'currency', currency: 'JPY'}),
	new Intl.NumberFormat("en-US")
];

fmtList.forEach(fmt => {
	console.log("== test format", fmt);
	values.forEach(n => {
		console.log(fmt.format(n));
	});
});
