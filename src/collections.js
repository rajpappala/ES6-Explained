let myArray=[11,22,33,44,55,33];
let mySet=new Set(myArray);
mySet.add('helloo');

console.log(mySet);


mySet.add({a:1,b:2});

console.log(mySet);

//mySet.clear();
//console.log(mySet);


mySet.delete(22)
console.log(mySet);


let myMapArray=[['key1','Val1'],['key2','Val2'],['key3','Val3'],['key3','Val33']];
let myMap=new Map(myMapArray);
console.log(myMap);

myMap.set('key4','val4');
console.log(myMap);

myMap.delete('key4','val4');
console.log(myMap);



let wset =new WeakSet();
let car1={name:'Honda', cc:'220'};
let car2={name:'Apache', cc:'330'};
let car3={name:'RTR', cc:'370'};
let test={hello:'nag',hio:'lab'};
wset.add(car1);
wset.add(car2);
wset.add(car3);
wset.add(test);
console.log(wset);

let wmap=new WeakMap();
let key1={k:'k1'}
let key2={k:'k2'}
let key3={k:'k3'}
let key4={k:'k4'}
wmap.set(key1,car1);
wmap.set(key2,car2);
wmap.set(key3,car3);
wmap.set(key4,test);
console.log(wmap);
