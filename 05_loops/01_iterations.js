// for-loop

for(let index=0;index<=10;index++){
    console.log(index);
}

let x = 2;
for (; x <= 4; x++) {
	console.log("Value of x:" + x);
}

const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
	gfg += subjects[i + ''];
	//can be increased inside loop
	i++;
}
console.log(gfg)

function GFG() {
	let Platform = { fname: "geeks", Mname: "for", lname: "geeks", };

	let text = "";
	let x;
	for (x in Platform) {
		text += Platform[x] + " ";
	}
	console.log(text);
}
GFG()

