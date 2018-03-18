console.dir(document);
console.log(document);

console.log(document.documentURI);

document.onmousemove=function(data){
  //console.log(data);
  let op=`screenX :${data.screenX}
          screenY: ${data.screenY}`;
          document.getElementById('a').innerHTML=op;
}


document.onpointerover=function(data){
  console.log(data);
}
