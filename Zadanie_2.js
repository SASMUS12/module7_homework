// Задание 2. Написать функцию, которая принимает в качестве
// аргументов строку и объект, а затем проверяет есть ли у
// переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

const obj = {
	city: 'Rostov',
	age: 30,
	country: 'Russia',
};

const checkName = (str, obj) => {
	return obj.hasOwnProperty(str);
};

console.log(checkName('city', obj));
console.log(checkName('hello', obj));
