//whyy arrow

function User(name){

    this.name=name;

}
//we cant access this directly in this dynamic function
User.prototype.getFullname=function(){
  let that=this;
  return function(){
    console.log("XX"+that.name);
  }
}

let u=new User("nagaraj");
u.getFullname()();


// Arrow functions will make things easy
User.prototype.prefixFullname=function(arr){

  return arr.map(
    (x)=>{
      console.log("Fullname:"+x+" "+this.name);
    }
  );
}


let u1=new User("nagaraj");
u1.prefixFullname(['Pappala','raj']);


//Sample arrow functions
function add(a,b)
{
  console.log(a+b);
}
add(10,90);

let arrowAdd= (a,b)=>{console.log(a+b);}
arrowAdd(20,40);
