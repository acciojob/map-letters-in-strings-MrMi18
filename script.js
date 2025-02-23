const str = prompt("enter str");


const myMap = new Map();

for(let i = 0 ; i<str.length;i++){
if(myMap.has(str[i])){
	myMap.set(str[i], [...(myMap.get(str[i])),i]);
 }else{
	myMap.set(str[i], [i]);
 }
}
const obj = Object.fromEntries(myMap);
console.log(obj);

