var a =5;
var b = 10;
var mtName = "Sean";



//Question 1
function addNums(numA, numB) {
    return numA + numB;
}

//Question 2 - Double == checks values, triple === checks value and type!
function CheckNums(num1, num2) {
    if(num2 > num1) {
        return false;
    }
    else if(num2 === num1) {
        return "Values are the same";
    }
    else{
        return true;
    }
}

//Question 3 - Comma separated list - Arraylist
function wordList(w1, w2, w3, w4) {
    var words = [w1,w2,w3,w4];
    return words
}

//Question 4 - convert hours to minutes 
function convertMins(mins){
    hours = mins / 60;
    return hours;
}

//Question 5 - Math.PI
function circle(radius) {
    area = Math.PI * radius * radius;
    perimeter = 2 * Math.PI * radius;

    return "area = " + area + " perimeter = " + perimeter;
}

//Question 6 -convert miles to km/km to miles
function convertUnits(distance, unit) {
    var miles;
    var km;
    if(unit === "miles") {
       miles = distance * 1.60934// mile to km conversion
       return "miles = " + miles;
    }
    else if (unit === "kilometres") {
        km = distance * 0.621371//km to miles
        return "Kilometers = " + km;
    }
}

//Question 7 - BMI Calculation --Calculation could be off
function calcBMI(weight, height) {
    var total;//local variables can cause unexpected RefenceError if not done properly
    var BMI;
    total =  weight * height;
    BMI = total / height;
    return "Your total amount on the BMI is: " + BMI;
}
//Question 8 -output day & date ----CHECK! -"Uncaught ReferenceError: calcBMI is not defined at <anonymous>:1:1"
function setDate(day, date, month) {
   var d = new Date(day, date, month);
   d = getDay(day);
   d = getDate(date);
   d = getMonth(month);
   return "Day: "+day+ "the "+date+ "of "+month;
}

//Question 9 - Palindrome --CHECK! -returns false if word is same, uncaught reference error if false word
function palindrome(word) {
    if(word == "palindrome"){
        return true;
    }
    else if(word != "palindrome") {
        return false;
    }

}

//Question 10 - Calculator(tricky - if statement/loop can be used here..)
function calculator(num1, operator, num2) {
    var op = ["+", "-", "*", "/"];//operator loop

    for(i = 0; i < op.length; i++) {//for loop

        if(operator == op[i]) {
            return eval(num1 + op[i] + num2);//eval - reads expressions from string types and executes it
        }
    }
}