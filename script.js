function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя превая программа!");

	function showSkills() {
		let skills = ['html5', 'css3', 'Figma', 'Photoshop'];

		for(let i = 0; i < skills.length; i++) {
			document.write("Я владею: " + skills[i] + "<br>");
		}
	}
	showSkills();

	function checkAge() {
		if(age > 18) {
			document.write("Если ещё номного поработать, то можно будет идти зарабатывать деньги.")
		} else {
			document.write("Нужно учиться большеБъ, до 18 лет, а после зарабатывать деньги или можно уже сейчас, если ты ас.")
		}
	}
	checkAge();

	function calcPow(num) {
		console.log(num * num)
	};
	calcPow(4);
}

myFirstApp("Sergey", 15);
