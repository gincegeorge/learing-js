let written = parseInt(prompt("Enter the marks for the written exam"));
let lab = parseInt(prompt("Enter the marks for the written exam"));
let assignment = parseInt(prompt("Enter the marks for the written exam"));

let grade = ((written*70)/100) + ((lab*20)/100) + ((assignment*10)/100);

document.write(grade);