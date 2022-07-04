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
   result = a / b
   return results
}