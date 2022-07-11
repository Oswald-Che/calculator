function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }
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
    if (firstNum == 0) {
        screen.textContent = 'ERROR!!!'
        return screen.textContent
    }
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

let text = '', firstNum, secondNum , sign, result , carry , count, div , b
 
const screen  = document.querySelector('#screen')
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click' , (e)=>{
    if(e.target.id == 'operate'){
        if (!sign || !carry || !firstNum) return
       result = operate(sign ,carry ,firstNum);
    //    console.log(result)
       screen.textContent = result
       if(isOverflown(screen)){
        screen.textContent = Number(screen.textContent).toExponential(1)
       }
       return
     }
    let y = e.target.textContent
    if(!isNaN(y) || y == '.'){
         if(count){
           screen.textContent = ''
            count = undefined
            // console.log(div)
            div.classList.remove('transparent')
        }
        if(y == '.' && text.includes('.')) return
       if(isOverflown(screen)){    
        let f = Number(screen.textContent)
        screen.textContent = f.toExponential(1)
       
       }
       else if(!isOverflown(screen)){
        if(screen.textContent.includes('+')){
            b = `${Number(screen.textContent)}` + `${y}`
            console.log(b)
            b = Number(b) 
            console.log(b)
            b = b.toExponential(1)
            screen.textContent = b
        }
        else{
    screen.textContent = screen.textContent + y}}
    text = `${text}${y}`
    firstNum = Number(text)
    // console.log(firstNum)
    }
    else if(y == '+/-'){
        if (firstNum > 0) {
            text = `-${text}`
            screen.textContent = text
            firstNum = -firstNum

            }
        else if(firstNum < 0){
            text = text.slice(1)
            screen.textContent = text
            firstNum = -firstNum
        }
    }
    else if( y == 'C'){
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
        if (!firstNum){
            div.classList.remove('transparent')
           sign = operators(e)
            return
        } secondNum = firstNum
        //  console.log(secondNum)
        text = ''
        firstNum = undefined
        // console.log(sign)
        if (secondNum && carry) {
            result = operate(sign ,carry ,secondNum );
            // console.log(result)       
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
clear.addEventListener('click' , (e)=>{
    screen.textContent = ''
    text = ''
    firstNum = 0
    secondNum = 0
    sign = ''
    d = undefined
})
