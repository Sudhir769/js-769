let myDate = new Date();
console.log(typeof myDate);//object

console.log(myDate); //2023-09-22T03:54:16.707Z

console.log(myDate.toString()); //Fri Sep 22 2023 03:54:16 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); //Fri Sep 22 2023

console.log(myDate.toLocaleString()); //9/22/2023, 3:55:55 AM
console.log();

let newDate = new Date(2023, 0, 17);
console.log(newDate.toDateString());//Tue Jan 17 2023

let newDate2 = new Date(2023, 0, 17, 5, 3);
console.log(newDate2.toLocaleString()); //1/17/2023, 5:03:00 AM
console.log(newDate2.toLocaleDateString());//1/17/2023


let newDate3 = new Date("12-24-2023"); //mm/dd/yyyy
console.log(newDate3.toLocaleString()); //1/14/2023, 12:00:00 AM

let newDate4 = new Date("2023-01-18"); // yyyy/mm/dd
console.log(newDate4.toLocaleString()); //1/18/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1695356242564 ms
console.log(newDate3.getTime()); //1703376000000
console.log(Math.floor(Date.now()/1000)); //1695356381 sec

newDate3.toLocaleString('default', {
    weekday:"long",
    hour:"numeric"
})
console.log(newDate3); //2023-12-24T00:00:00.000Z