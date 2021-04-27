/* Разработайте функцию buildURL, которая принимает
URL адрес, массив объектов с параметрами и
возвращает строку с собранным URL
*/

const buildURL = (URL, options) => {
    
    if ( options == undefined ) {
        return URL;
    }

    let objectOptions = {};
    let result = '';

    for(let i = 0; i < options.length; i++) {
        Object.assign(objectOptions, options[i]);
    }

    result = `${URL}?page=${objectOptions.page}&post=${objectOptions.post}`;
    return result;

}

console.log(buildURL('http://yandex.ru/', [{ page: 'settings' }, { post: 1 }]));
console.log(buildURL('http://vk.com/'));