// Задание 1. Написать, функцию, которая принимает
// в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const car = {
	model: 'LADA',
	weight: 500,
	price: 3000,
};
let carJiguli = Object.create(car);

carJiguli.model = 'Vesta';
carJiguli.color = 'Сердолик';
carJiguli.location = 'Россия';
carJiguli.carInfo = '2019';

function getOwnPropery(arg) {
	for (let index in carJiguli) {
		if (carJiguli.hasOwnProperty(index)) {
			console.log(`${index} : ${carJiguli[index]}`);
		}
	}
}
getOwnPropery(carJiguli);-25000