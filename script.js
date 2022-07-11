// function to check if screen is overflowing
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }
  // function to add numbers
function add(...arg){
    const array = Array.from(arg)
    const sum = array.reduce((total , item) =>{
        return total + item
    }, 0)
    return sum
}
//function to subtract numbers
function sub(text , firstNum){
    const result =  text - firstNum
    return result
}
//function for multiplication
function multiply(...arg){
    const array = Array.from(arg)
    const result =  array.reduce((total , item) =>{
        return total * item
    }, 1)
    return result
}
// function for division
function division (text, firstNum){
    if (firstNum == 0) {
        screen.textContent = 'ERROR!!!'
        return screen.textContent
    }
   const result = text / firstNum
   return result
}
// to operate to numbers
function operate(operator , num1 , num2){
    if (operator == "addition") return add(num1 , num2) 
    else if (operator == "subtraction") return sub(num1 , num2)
    else if (operator == "multiplication") return multiply(num1 , num2)
    else if (operator == "division") return division(num1 , num2)
}
//return the sign selected
function operators(e){
    if (e.target.textContent == "+") return 'addition'
    else if (e.target.textContent == "-") return 'subtraction'
    else if (e.target.textContent == "x") return 'multiplication'
    else if (e.target.textContent == "/") return 'division'
}

let text = '', firstNum, secondNum , sign, result , carry , count, div , b
 
const screen  = document.querySelector('#screen')
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click' , (e)=>{
    // Evaluate when = pressed
    if(e.target.id == 'operate'){
        if (!sign || !carry || firstNum == undefined) return
       result = operate(sign ,carry ,firstNum);
       screen.textContent = result
       if(isOverflown(screen)){
        screen.textContent = Number(screen.textContent).toExponential(1)
       }
       return
     }
    let y = e.target.textContent
    //selector for buttons
    if(!isNaN(y) || y == '.'){
        //disable sign highlight
         if(count){
           screen.textContent = ''
            count = undefined
            div.classList.remove('transparent')
        }
        if(y == '.' && text.includes('.')) return //disable '.' button
       if(isOverflown(screen)){    //check for overflow
        let f = Number(screen.textContent)
        screen.textContent = f.toExponential(1) 
       }
       else if(!isOverflown(screen)){
        if(screen.textContent.includes('+')){
            b = `${Number(screen.textContent)}` + `${y}`
            b = Number(b) 
            screen.textContent = b.toExponential(1)
        }
        else{
    screen.textContent = screen.textContent + y}}
    text = `${text}${y}`
    firstNum = Number(text)
    }
    else if(y == '+/-'){    // Adds positive or negative sign
        if (firstNum > 0) {
            text = `-${text}`
            screen.textContent = text
            if(isOverflown(screen)){
                screen.textContent = Number(screen.textContent).toExponential(1)
               }
            firstNum = -firstNum

            }
        else if(firstNum < 0){
            text = text.slice(1)
            screen.textContent = text
            if(isOverflown(screen)){
                screen.textContent = Number(screen.textContent).toExponential(1)
               }
            firstNum = -firstNum
        }
    }
    else if( y == 'C'){ // removes last entry
        text = text.slice(0 , (text.length -1) )
        screen.textContent = text
        if(isOverflown(screen)){
            screen.textContent = Number(screen.textContent).toExponential(1)
           }
        firstNum = Number(text)
    }
    else if( y == '%'){ 
        firstNum = (firstNum / 100)
        text = String(firstNum)
        screen.textContent = text
        if(isOverflown(screen)){
            screen.textContent = Number(screen.textContent).toExponential(1)
           }
        d = firstNum
    }
    else if(y == 'x' || y == '/' || y == '+' || y =='-' ){
        if (firstNum == undefined){ // disable signs
            div.classList.remove('transparent')
           sign = operators(e)
            return
        } secondNum = firstNum
        text = ''
        firstNum = undefined
        if (secondNum && carry) { // allow continuos calculation
            result = operate(sign ,carry ,secondNum );      
            screen.textContent = result
            if(isOverflown(screen)){
                screen.textContent = Number(screen.textContent).toExponential(1)
               }
            carry = result 
            sign = operators(e)
            e.target.classList.add('transparent')
            div = e.target
            count = 1
            return
        }
        e.target.classList.add('transparent')
         div = e.target
         carry = secondNum
         count = 1
        sign = operators(e)

        
    }
}))
const clear = document.querySelector('.clear')
clear.addEventListener('click' , (e)=>{ // resets all variables
    screen.textContent = ''
    text = ''
    firstNum = undefined
    secondNum = 0
    sign = ''
    carry = undefined
})
