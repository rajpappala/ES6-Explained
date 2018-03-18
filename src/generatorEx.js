function *gen(){
  console.log('Started');
  yield 'yield one';
  console.log('waiting for next yield');
  yield 'yield two';
  console.log('End');
  return 'hello';
}

var g=gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


for(let val of g){

  console.log("#####"+val);
}
