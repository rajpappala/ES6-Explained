const name='nagaraj'
let template='<h1>Im Header</h1><p>this is a paragraph ${name}</p>'
let template2=`<h1>Im Header</h1><p>this is a paragraph ${name} ${getdata()}</p>`

function getdata(){
  return 'NaGARAAAAAA';
}
document.getElementById("t").innerHTML=template2;
