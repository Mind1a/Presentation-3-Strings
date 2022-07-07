"use strict";
// Strings

const greeting = " Hello World";
const nick = "Mind1aArabul1";

// პოზიციების მიხედვით შეგვიძლია სტრინგის გამოძახება:
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);

// პირადპირ სტრინგიდანაც შეგვიძლია გამოვიძახოთ
console.log("Mind1a"[0]);

// შეგვიძლია გავიგოთ სიგრძე სტრინგის :

console.log(nick.length);
console.log("nick".length);

// სტრინგებს ასევე აქვთ მეთოდები , ზოგიერთი მათგანი გაქვს ასევე მასივის მეთოდებს.

console.log(greeting.indexOf("o"));
console.log(greeting.lastIndexOf("o"));

// მთლიანი სიტყვების მოძებნაც შეგვიძლია (-1 თუ არ მოიძებნა) :

console.log(greeting.indexOf("World"));

// შემდეგი არის slice მეთოდი, თუ გადავცემთ 1 რიცხვს , პირველიდან დაიწყებს ათვლას:

console.log(greeting.slice(4));

// ორი რიცხვის გადაცემის შემთხვევაში მუშაობს როგორც დან-მდე

console.log(greeting.slice(4, 8));

// თუ მივუთითებთ მინუს ნიშანს დაიწყებს საპირისპირო მიმართულებით. (აიღებს ბოლო 2-ს)

console.log(greeting.slice(-2));

// ჩაიწერება პატარა ასოებით:

console.log(greeting.toLowerCase());
console.log("teESTWt".toLowerCase());

// ჩაიწერება დიდი ასოებით:
console.log(greeting.toUpperCase());
console.log("test".toUpperCase());

// შეგვიძლია გადავცეთ პირდაპირ მდებარეობა რომელი გადდიდეს ან პირიქით :  (და დავუმატოთ ზემოთ ნახსენები slice დანარჩენი ასოებისთვის)

const newNick = nick[0].toLowerCase() + nick.slice(1);
console.log(newNick);

// space-ის გასაუქმებლად თავში და ბოლოში შეგვიძლია გამოვიყენოთ შემდეგი მეთოდი :

console.log(greeting.trim());

// სტრინგში ასოების შესაცვლელად გამოიყენება replace მეთოდი:

console.log(nick.replace("1", "i").replace("a", "@"));

// ყველას შესაცვლელად შეგვიძლია გამოვიყენოთ : replaceAll

console.log(nick.replaceAll("1", "i").replace("a", "@"));

// Booleans მეთოდი : includes - რომელიც აბრუნებს True/False იმის მიხედვით შეიცავს თუ არა გადაცემული ელემენტები არსებულში.

console.log(nick.includes("Arabul1"));

// იწყება :  startsWith

console.log(nick.startsWith("Min"));

// split : ყოფს სიტყვებს გადაცემული ელემენტის მიხედვით, და იქნება ახალი ერეი ,

console.log("mindia+arabuli".split("+"));

// ერეის გასაერთიანებლად შეგვიძლია გამოვიყენოთ : დესტრუქტურიზაცია.

const [Fname, surname] = "mindia+arabuli".split("+");

console.log(Fname, surname);

// გაერთიანების მეთოდი :

const firstName = ["mindia"];

const lastName = ["arabuli"];

console.log(firstName, lastName);

console.log([firstName, lastName].join(" ")); // მივიღეთ გაერთიანებული სტრინგი 2 ერეისგან (ფრჩხილებში გადაეცემა გაერთიანების ადგილას რა დაიწეროს)

// padding ()

console.log(greeting.padStart(15, "+")); // პირველ ელემენტად გადაეცემა რამდენ ელემენტიანი სტრინგი უნდა მივიღოთ და დასაწყისში დაემატება მეორედ გადაცემული ელემენტი

// Repeat

console.log(greeting.repeat(2));

// Update: Reverse

const array1 = ["one", "two", "three"];
const reversed = array1.reverse();
console.log(reversed);
