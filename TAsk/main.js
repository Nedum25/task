//this code show the descending order

const list = [20, 30, 33, 12, 12, 10, 5, 8, 9, 8, 20, 30, 16, 18, 10, 20];


const sortList = list.sort((a,b) => (b -a)) // this show element in descending order when ran in the consol

console.log(sortList);

const duplicates = list.filter((item, index) => index !== list.indexOf(item)); //function that returns duplicate elements

console.log('these are the duplicates:', duplicates);




const rev= list.reverse(); //function that reverse the array

console.log('this is reversed :', rev);


