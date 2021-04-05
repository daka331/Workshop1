/**Напишите функцию, которая принимает
объект basket и подсчитывает сумму
значений
*/

const calculateBasketSum = (basket) => {
    let sum = null;
    for(let key in basket) {
        sum += basket[key];
    }
    return sum;
}
console.log(calculateBasketSum({   
        apple: 10,
        cherry: 20,
    }));