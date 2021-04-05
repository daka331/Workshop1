/* Напишите функцию, которая принимает
массив и возвращает массив с
неповторяющимися элементами */

const getArrayWithNoDublicat = (array) => {
    let result = [];
    result = array.reduce((first, second) => first.includes(second)? first : [...first, second], []);
    return result;
}

console.log(getArrayWithNoDublicat([2, 56, 3, 2])); // [2, 56, 3]