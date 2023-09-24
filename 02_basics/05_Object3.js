// API, Data Handling

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}

const {coursename} = course;
const {price} = course;
const {courseInstructor:instructor} = course;

console.log(coursename);//js in hindi
console.log(instructor);//hitesh
console.log(price);//999

const navbar = ({company}) =>{

}
navbar(company="hitesh")

//data extraction/destructuring
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {},
// ]