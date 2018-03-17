console.log('hellooo');


let i=10;
var j=20;
const k=30;
console.log(i);
console.log(j);
console.log(k);
i=20;
j=30;
//k=50;
console.log(i);
console.log(j);
console.log(k);
//in global scope var and let similar

function testVar(){
var data=300;
if(true){
  var data=500;
}
  console.log("testVar"+data);
}
testVar();

function testLet(){
  let data=300;
  if(true){
    let data=500;
  }
    console.log("testLet"+data);
}
testLet();


for(var a=0;a<10;a++){
  console.log(a);
}
console.log(a);


for(let b=0;b<10;b++){
  console.log(b);
}
console.log(b);
