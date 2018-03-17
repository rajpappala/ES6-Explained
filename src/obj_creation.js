class Demo{
  constructor(fname,lname){
    this.fname=fname;
    this.lname=lname;

  }
 logData(){
    console.log(this.fname+" "+this.lname);
  }
}

let d=new Demo("Naga", "Raju");
d.logData();


function Demo2(){
  this.fname="NNNN";
  this.lname="RRR";
  this.logData=function(){
     console.log(this);
     console.log(this.fname+" "+this.lname);
   }
}

let d2=new Demo2();
d2.logData();


let obj=Object.create(Demo.prototype);
obj.logData();
