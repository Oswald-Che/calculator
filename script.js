function add(...arg){
    const array = Array.from(arg)
    const sum = array.reduce((total , item) =>{
        return total + item
    }, 0)
    return sum
}
function sub(text , firstNum){
    const result =  text - firstNum
    return result
}
function multiply(...arg){
    const array = Array.from(arg)
    const result =  array.reduce((total , item) =>{
        return total * item
    }, 1)
    return result
}
function division (text, firstNum){
   const result = text / firstNum
   return result
}
function operate(operator , num1 , num2){
    if (operator == "addition") return add(num1 , num2) 
    else if (operator == "subtraction") return sub(num1 , num2)
    else if (operator == "multiplication") return multiply(num1 , num2)
    else if (operator == "division") return division(num1 , num2)
}
function operators(e){
    if (e.target.textContent == "+") return 'addition'
    else if (e.target.textContent == "-") return 'subtraction'
    else if (e.target.textContent == "x") return 'multiplication'
    else if (e.target.textContent == "/") return 'division'
}

let text = '', firstNum, secondNum , sign, result , d , count
 
const screen  = document.querySelector('#screen')
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click' , (e)=>{
    if(e.target.id == 'operate'){
       result = operate(sign ,d ,firstNum);
       console.log(result)
       screen.textContent = result
       return
     }
    let y = e.target.textContent
    if(!isNaN(y)){
         if(count){
           screen.textContent = ''
            count = undefined
        }
    screen.textContent = screen.textContent + y 
    text = `${text}${y}`
    firstNum = parseInt(text)
    // console.log(firstNum)
    }
    else if(y == 'x' || y == '/' || y == '+' || y =='-' ){
        secondNum = firstNum
        // if (result) secondNum = result
         console.log(secondNum)
        text = ''
        firstNum = 0
        console.log(sign)
        if (secondNum && d) {
            result = operate(sign ,d ,secondNum );
            console.log(result)
            count = 1
            screen.textContent = result
            d = result 
            sign = operators(e)
            return
        }
         d = secondNum
        screen.textContent = ''
        sign = operators(e)

        
    }
}))
const clear = document.querySelector('.clear')
clear.addEventListener('click' , (e)=>{
    screen.textContent = ''
    text = ''
    firstNum = 0
    secondNum = 0
    sign = ''
    d = undefined
})