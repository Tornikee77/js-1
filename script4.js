// დაწერეთ კოდი, რომელიც გამოთვლის კინოთეატრის ბილეთის ფასს შემდეგი სამი შეკითხვის მიხედვით:

// ასაკი:
// prompt("Enter your age:");
// ფილმის ტიპი (რეგულარული თუ 3D):
// prompt("Enter movie type (regular or 3D):");
// დღის დრო (მატინე თუ საღამო):
// prompt("Enter time of day (matinee or evening):");
// ფასების ლოგიკა:
// თუ მომხმარებელი არის 10 წლის ან ნაკლები, ბილეთის ფასი არის 5 ლარი.
// თუ მომხმარებელი არის 65 წლის ან მეტი, ბილეთის ფასი არის 10 ლარი.
// ყველა სხვა შემთხვევაში ბილეთის ფასი არის 15 ლარი.
// დამატებითი გადასახადი:
// თუ ფილმის ტიპი არის 3D, ფასს ემატება 5 ლარი.
// თუ დღის დრო არის საღამო, ფასს ემატება 5 ლარი.
// საბოლოო შედეგი:
// გამოთვლის შემდეგ, აჩვენეთ საბოლოო ფასი შემდეგი ფორმატით:

// "ბილეთის ფასი თქვენთვის არის: XX ლარი

let age = prompt("Enter your age:");
let typeOfFilm = prompt("Enter movie type (regular or 3D):");
let time = prompt("Enter time of day (matinee or evening):");

let age1 = 10;
let age2 = 65;

let price1 = 5;
let price2 = 10;
let price3 = 15;

let type1 = "3D";
let type2 = "regular";

let time1 = "evening";
let time2 = "matinee";

if (age <= age1) {
  console.log(`ბილეთის ფასი თქვენთვის არის: ${price1} ლარი`);
} else if (age <= age2) {
  console.log(`ბილეთის ფასი თქვენთვის არის: ${price2} `);
} else if (typeOfFilm === type1 && time === time1) {
  console.log(`ბილეთის ფასი თქვენთვის არის: ${price1 + 5} ლარი`);
} else {
  console.log(`ბილეთის ფასი თქვენთვის არის: ${price3} ლარი`);
}
