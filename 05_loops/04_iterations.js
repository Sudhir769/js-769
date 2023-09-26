//for-in-loop
// For-in loop in JavaScript is used to iterate over the properties of an object.
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by appple'
}

for(let key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}console.log();

//declaring a object employee
const courses = {
	firstCourse: 'JavaScript',
	secondCourse: 'React',
	thirdCourse: 'Angular'
};
let value = '';

//using for in loop
for (let item in courses) {
	value += courses[item] + " ";
}
console.log(value);
console.log();

const courses2 = {

	// Declaring a courses2 object
	firstCourse: "C++ STL",
	secondCourse: "DSA Self Paced",
	thirdCourse: "CS Core Subjects"
};

// Creating a new empty object with
// prototype set to courses2 object
const student1 = Object.create(courses2);

// Defining student1 properties and methods
student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
	console.log(courses2);
}

// Iterating over all properties of
// student1 object
for (let prop in student1) {
	console.log(prop + " -> "
		+ student1[prop]);
}console.log();

const programming = ["js", "rb", "py", "java", "cpp"];
for(let key in programming){
    // console.log(key); //0 1 2 3 4 
    console.log(programming[key]); // js rb py java cpp
}
