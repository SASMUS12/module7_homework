// Задание 3. Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj() {
	return Object.create(null);
}
console.log(emptyObj());
