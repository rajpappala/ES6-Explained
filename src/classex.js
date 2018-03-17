class User{
constructor(username, email, password){
  this.username=username;
  this.email=email;
  this.password=password;
}

static countUsr(){
console.log('XXXXXXXXXXX');
}
registerUsr(){
  console.log(this.username+" registered");
}
}


let myusr=new User('NagaraJ','gg@gg.mm','ggggggg');

console.log(myusr.username);
console.log(myusr.password);
User.countUsr();
myusr.registerUsr();


class Mem extends User{
  constructor(username, email, password,role){
    super(username, email, password);
    this.role=role;
  }
  getRole(){
    console.log(this.role);
  }
}

let m=new Mem('raj','test@gm','SSSSS','Admin');
m.getRole();
