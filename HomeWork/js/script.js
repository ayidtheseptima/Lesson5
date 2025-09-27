// //11) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

const student = {
	name: "Іван",
	specialty: "Комп’ютерні науки",
	averageGrade: 85,
	missedClasses: 3,

	showInfo() {
		console.log(
			`Ім'я: ${this.name}, Спеціальність: ${this.specialty}, Середній бал: ${this.averageGrade}, Пропущено занять: ${this.missedClasses}`
		);
	},
};

const student1 = {
	name: "Aria",
	specialty: "Engenier",
	averageGrade: 90,
	missedClasses: 1,
};

const student2 = {
	name: "Andrew",
	specialty: "Math",
	averageGrade: 78,
	missedClasses: 4,
};

const student3 = {
	name: "Maria",
	specialty: "Philosophy",
	averageGrade: 82,
	missedClasses: 2,
};

student.showInfo.call(student1);

student.showInfo.apply(student2);

const showMariaInfo = student.showInfo.bind(student3);
showMariaInfo();

// 2
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це так

// const showHtmlInfo = () => {
// 	alert(
// 		"HTML (HyperText Markup Language) — це мова розмітки для створення структури веб-сторінок."
// 	);
// };

// const showCssInfo = () => {
// 	alert(
// 		"CSS (Cascading Style Sheets) — це мова стилів для оформлення та дизайну веб-сторінок."
// 	);
// };

// document.getElementById("buttonHtml").onclick = showHtmlInfo;
// document.getElementById("buttonCss").onclick = showCssInfo;

//3
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// // функція має повертати назву товару і вартість
// // перевірити на варіантах:
// // 1) banana 30, 4,5
// // 2) cherry 58, 1,3
// // 3) jrange 89. 3,4
// function shop(product, pricePerKg, quantity) {
// 	const cost = pricePerKg * quantity;
// 	return `Товар: ${product}, Вартість: ${cost.toFixed(2)} грн`;
// }

// console.log(shop("banana", 55, 4.5));
// console.log(shop("cherry", 88, 1.3));
// console.log(shop("orange", 99, 3.4));
