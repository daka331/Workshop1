/* Напишите функцию, которая принимает
строку с числами и возвращает строку с
минимальным и максимальным
элементом через пробел */

const minAndMaxElement = (string) => {
    let getArray = string.split(' ');
    getArray = getArray.map(Number);
    const minElement = Math.min.apply(null, getArray);
    const maxElement = Math.max.apply(null, getArray);
    let result = '';
    result = `"${minElement} ${maxElement}"`;
    return result;
}
   console.log(minAndMaxElement("2 46 87 1 5"));  // "1 87"