function add() {
	var ia = document.getElementById("in_a");
	var na = ia.value;
	var ib = document.getElementById("in_b");
	var nb = ib.value;
	var destination = document.getElementById("answer");
	destination.innerHTML = "sum: " + (parseFloat(na)+parseFloat(nb));
}

function sub() {
	var ia = document.getElementById("in_a");
	var na = ia.value;
	var ib = document.getElementById("in_b");
	var nb = ib.value;
	var destination = document.getElementById("answer");
	destination.innerHTML = "difference: " + (parseFloat(na)-parseFloat(nb));
}

function mul() {
	var ia = document.getElementById("in_a");
	var na = ia.value;
	var ib = document.getElementById("in_b");
	var nb = ib.value;
	var destination = document.getElementById("answer");
	destination.innerHTML = "product: " + (parseFloat(na)*parseFloat(nb));
}

function div() {
	var ia = document.getElementById("in_a");
	var na = ia.value;
	var ib = document.getElementById("in_b");
	var nb = ib.value;
	var destination = document.getElementById("answer");
	destination.innerHTML = "ratio: " + (parseFloat(na)/parseFloat(nb));
}
