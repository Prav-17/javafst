/* charAt(index)
concat(str1,str)
indexOf()
replace()
slice()
split()
tolowercase()
touppercase()
*/
let str1="Hello world";
let str2="Welcome";
console.log("Str1 :",str1);
console.log("charAt:",str1.charAt(1));
console.log("cancat:",str1.concat(str2));
console.log("indexOf: ",str1.indexOf("o"));
console.log("replace:",str1.replace("world","students"));
console.log("slice: ",str1.slice(0,4));
console.log("split: ",str1.split("o"));
console.log("tolowercase ",str1.toLowerCase());
console.log("touppercase: ",str1.toUpperCase());

/*
Arrays
Tostring()
At()
push()
pop()
shift()
unshift()
concat()
indexof()
splice()
slice()*/

let arr1=["apple","orange","mango", "banana", "200", "400", "500"];
let arr2=["tomato", "potato","onion","brinjal","cabbage","100","150"];
console.log("Tostring:",arr1.toString()); //native code
console.log("At(): ",arr1[0]); //at
arr1.push("grapes","200");
console.log("push: ",arr1);
arr1.pop();
console.log("pop: ",arr1);
arr1.shift();
console.log("shift: ",arr1);
arr1.unshift("apple");
console.log("unshift: ",arr1);
let arr3=arr1.concat(arr2);
console.log("concat: ",arr3);
console.log("Indexof: ",arr1.indexOf("mango"));
console.log("splice: ",arr1.splice(3,2));
console.log("slice: ",arr1.slice(1,3));
