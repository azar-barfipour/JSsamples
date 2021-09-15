//inline styles
let ul=document.querySelector('ul')
ul.style.color='blue'
ul.style.background='yellow'

//add style from tag style
ul.classList.add('border')
ul.classList.add('margin')
ul.classList.add('center')

//show styles
let styles=getComputedStyle(ul)
let border=styles.getPropertyValue('border')
let margin=styles.getPropertyValue('margin')
console.log(border)
console.log(margin)


