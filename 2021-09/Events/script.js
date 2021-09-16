//using addEventListener
let button = document.querySelector('button')
button.addEventListener('click', handler)

function handler(){
    let main = document.getElementById('main')
    let p = document.createElement('p')
    p.textContent='Hello World'
    main.appendChild(p)
}
//using onclick
button.onclick = function(){
    console.log(Date.now())
}