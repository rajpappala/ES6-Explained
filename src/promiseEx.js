//XMLHttpRequest

function getData(url){
console.log("in fun");
  return new Promise(function(resolve,reject){
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload=function(){
      if(this.status==200){
        resolve(xhr.response);
      }else{
        reject(this.status);
      }
    };

    xhr.send();
  });
}


getData("https://jsonplaceholder.typicode.com/posts").then(function(data){
//  console.log("Success"+data);
let jsonData=JSON.parse(data);
var op=``;
  for(let row of jsonData){
    op=op+`<li>Val : ${row.title} </li>`;
  }
    
    document.getElementById('a').innerHTML=op;
}).catch(function(data){
  console.log("fail"+data);
});;
