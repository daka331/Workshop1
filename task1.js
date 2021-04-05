/*
Напишите функцию, которая принимает в качестве
аргумента число типа Number и возвращает массив
цифр данного числа
*/

const getArrayOfNumerals = (number) => {
    let getArray = [];
    let convMinus = ( number < 0 ) ? -number : number;
    let strNumber = convMinus.toString();
    
    
    for(let i = 0; i < strNumber.length; i++) {
        let num = Number(strNumber[i]);
        getArray.push(num);
    }
    return getArray;
}
    
console.log(getArrayOfNumerals(100)); // [1, 0, 0]
console.log(getArrayOfNumerals(-2500)); // [2, 5, 0, 0] 
    