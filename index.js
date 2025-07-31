alert("JavaScript is working!");

let username = prompt("Enter your username");
let password = prompt("Enter your password");

let role = "";
let securityLevel = "";

if ((username === "admin" || username === "user") && password === "1234") {
    if (username === "admin") {
        role = "admin";
        securityLevel = "high";
    } else {
        role = "user";
        securityLevel = "low";
    }
    alert("Login successful! Welcome " + role);
} else {
    alert("Invalid credentials. Access denied.");
    throw "Stop program because of wrong login.";
}

let customerName = prompt("What is your name?");
let age = parseInt(prompt("What is your age") || "0");
let coffeeType = (prompt("Which coffee do you want? (espresso, latte, cappuccino)") || "").toLowerCase();
let quantity = parseInt(prompt("How many cups?") || "1");

let price = 0;

if (coffeeType === "espresso") {
    price = 2.5;
} else if (coffeeType === "latte") {
    price = 3.5;
} else if (coffeeType === "cappuccino") {
    price = 4.0;
} else {
    alert("Invalid coffee type.");
    throw "Invalid coffee type.";
}

let total = price * quantity;

alert(`Thank you ${customerName}! Your order of ${quantity} ${coffeeType}(s) will cost $${total}.`);
