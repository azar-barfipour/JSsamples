//using addEventListener
let button = document.querySelector('button')
let message = document.getElementById('message')
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

//mouse events
// button.addEventListener('dblclick', () => message.innerHTML += `<p>HELLO WORLD</p>`)
// button.addEventListener('mousedown', () => message.innerHTML += `<p>HELLO WORLD</p>`)
button.addEventListener('mouseup', () => message.innerHTML += `<p>HELLO WORLD</p>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     