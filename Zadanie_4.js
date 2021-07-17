function ElectroAppliance(name, brand, power) {
	this.name = name; // Название прибора
	this.brand = brand; // Фирма
	this.power = power; // Мощность
}

//Методы включают/выключают прибор из розетки и возвращают потребляемую мощность всех включенных приборов.

let sumPower = 0;

ElectroAppliance.prototype.turnOn = function () {
	sumPower += this.power;
	console.log(
		'Включен ' + this.name + ' номинальной мощностью ' + this.power + ' Вт.'
	);
	console.log(
		`Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
	);
};
ElectroAppliance.prototype.turnOff = function () {
	sumPower -= this.power;
	console.log(
		'В данный момент ' +
			this.name +
			' выключен и не потребляет никакой энергии.'
	);
	console.log(
		`Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
	);
};

//Создан класс электроприборы для кухни (встроенные и отдельно_стоящие):

function ElectroApplianceForKitchen(name, brand, power, built_in) {
	this.name = name; // Название прибора
	this.brand = brand; // Фирма
	this.built_in = built_in;
	this.power = power; //Встроенный

	this.getInfo = function () {
		console.log(
			`${this.name}, ${this.brand}, мощность - ${this.power} Вт, ${this.built_in}.`
		);
	};
}

//Создан класс компьютеры:

function Сomputer(name, brand, power, diagonal) {
	this.name = name; // Название прибора
	this.brand = brand; // Фирма
	this.power = power; //Мощность
	this.diagonal = diagonal; // Диагональ
	this.getInfo = function () {
		console.log(
			`${this.name}, ${this.brand}, мощность - ${this.power} Вт, диагональ - ${this.diagonal}.`
		);
	};
}
//Создаем делигирующую связь между классами:

ElectroApplianceForKitchen.prototype = new ElectroAppliance();
Сomputer.prototype = new ElectroAppliance();

//Созданы экземпляры электроприборов:

const refrigerator = new ElectroApplianceForKitchen(
	'Холодильник',
	'libher',
	1300,
	'отдельно стоящий'
);
const microwave = new ElectroApplianceForKitchen(
	'СВЧ-печь',
	'Horizont',
	2200,
	'встроенная'
);
const notebook = new Сomputer('Lep_top', 'Samsung', 90, '19.1 inch');

microwave.getInfo();
refrigerator.getInfo();
notebook.getInfo();
refrigerator.turnOn();
notebook.turnOn();
microwave.turnOn();
microwave.turnOff();
refrigerator.turnOff();
notebook.turnOff();
