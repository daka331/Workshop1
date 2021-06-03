/* Напишите функцию, которая принимает
строку с числами и возвращает строку с
минимальным и максимальным
элементом через пробел */

const minAndMaxElement = (string) => {
    let result = '';
    while(typeof string === 'string') {
    let getArray = string.split(' ');
    
    getArray = getArray.map(Number);
    
    const minElement = Math.min.apply(null, getArray);
    const maxElement = Math.max.apply(null, getArray);
    
    result = `"${minElement} ${maxElement}"`;
    return result;
    }
    result = "Error!";
    return result;
}
   console.log(minAndMaxElement("2 46 87 1 5"));  // "1 87"
    console.log(minAndMaxElement(246)); 