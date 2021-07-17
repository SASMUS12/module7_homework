let sumPower = 0;
class ElectroAppliance {
	constructor(name, brand, power) {
		this.name = name; // Название прибора
		this.brand = brand; // Фирма
		this.power = power; // Мощность
	}

	//Методы включают/выключают прибор из розетки и возвращают потребляемую мощность всех включенных приборов.

	turnOn() {
		sumPower += this.power;
		console.log(
			'Включен ' + this.name + ' номинальной мощностью ' + this.power + ' Вт.'
		);
		console.log(
			`Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
		);
	}
	turnOff() {
		sumPower -= this.power;
		console.log(
			'В данный момент ' +
				this.name +
				' выключен и не потребляет никакой энергии.'
		);
		console.log(
			`Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
		);
	}
}
//Создан класс электроприборы для кухни (встроенные и отдельно_стоящие):
class ElectroApplianceForKitchen extends ElectroAppliance {
	constructor(name, brand, power, built_in) {
		super(name, brand, power);
		this.name = name; // Название прибора
		this.brand = brand; // Фирма
		this.built_in = built_in;
		this.power = power; //Встроенный
	}
	getInfo() {
		console.log(
			`${this.name} ${this.brand} мощность - ${this.power} Вт, ${this.built_in}.`
		);
	}
}
//Создан класс компьютеры:

class Сomputer extends ElectroAppliance {
	constructor(name, brand, power, diagonal) {
		super(name, brand, power);
		this.name = name; // Название прибора
		this.brand = brand; // Фирма
		this.power = power; //Мощность
		this.diagonal = diagonal; // Диагональ
	}
	getInfo() {
		console.log(
			`${this.name}, ${this.brand}, мощность - ${this.power} Вт, диагональ - ${this.diagonal}.`
		);
	}
}

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
