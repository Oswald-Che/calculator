function add(...arg){
    const array = Array.from(arg)
    const sum = array.reduce((total , item) =>{
        return total + item
    }, 0)
    return sum
}
function sub(a , b){
    const result =  a - b
    return result
}
function multiply(...arg){
    const array = Array.from(arg)
    const result =  array.reduce((total , item) =>{
        return total * item
    }, 1)
    return result
}
function division (a, b){
   const result = a / b
   return result
}
function operate(operator , num1 , num2){
    if (operator == "addition") return add(num1 , num2) 
    else if (operator == "subtraction") return sub(num1 , num2)
    else if (operator == "multiplication") return multiply(num1 , num2)
    else if (operator == "division") return division(num1 , num2)
}
let a = ''
const screen  = document.querySelector('#screen')
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click' , (e)=>{
    let y = Number(e.target.textContent)
    if(!isNaN(y)){
    screen.textContent = screen.textContent + y 
    a = `${a}${y}`
    }
    b = parseInt(a)
    console.log(typeof b)
}))