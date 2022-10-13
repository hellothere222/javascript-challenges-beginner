/*
 Challenge 2: Print a table containing multiplication tables
    
   Let's start with the tables that many of us had to memorize in school. Can
	you print a table that contains all the answers to the multiplication
	tables from 1 through 10?

   Like Challenge #1, can you create an efficient solution that you could
	easily expand should you need the 12 times table?
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

function tableCreate(row, col) {
	let body = document.body;
	let tbl = document.createElement("table");
	tbl.style.width = "200px";
	tbl.style.border = "1px solid black";

	for (let i = 0; i < row; i ++) {
		let tr = tbl.insertRow();
		for (let j = 0; j < col; j++) {
			let td = tr.insertCell();
			td.appendChild(document.createTextNode(`${i},${j}`));
			td.style.border = "1px solid black";
		}
	}
	body.appendChild(tbl);
}

tableCreate(4, 4);

console.log(result);

//@ts-check
// your code starts after this line
