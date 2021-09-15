//old approch
let p1=document.createElement('p');
let text= document.createTextNode('Hello World');
p1.appendChild(text);

let main=document.getElementById('main')
main.appendChild(p1);

//new approch
let p2=document.createElement('p');
p2.textContent='Hello World';
main.appendChild(p2);

//function approch
function createElement(tag,text){
    let element=document.createElement(tag);
    element.textContent=text;
    return element;
}
let header=createElement('h1','Hello World');
main.appendChild(header);
