let arr=[2,4,5,1,8,9];

let val=arr.forEach(function(x){
  console.log("forEach"+x);
  return x;
})
console.log(val);

arr=arr.map(function(x){
 return x+2;
})

console.log(arr);


let strArr=['test 21','hello 51','t20','dddddd21'];
console.log(strArr);
let longStr=strArr.filter(function(x){
  return x.length>4
})

console.log(longStr);
