
function randomNumberGenerator (amount){
    let randomNumber = Math.floor((Math.random()*amount)+1);
    return randomNumber;
}



function getMonth(season){
    let monthName;
    switch (Number(season)){
    case 1: 
    monthName ="January";
    break;
    case 2: 
    monthName ="February";
    break;
    case 3: 
    monthName ="March";
    break;
    case 4: 
    monthName ="April";
    break;
    case 5: 
    monthName ="May";
    break;
    case 6: 
    monthName ="June";
    break;
    case 7: 
    monthName ="July";
    break;
    case 8: 
    monthName ="August";
    break;
    case 9: 
    monthName ="September";
    break;
    case 10:
    monthName = "October";
    break;
    case 11:
    monthName = "November";
    break;
    case 12:
    monthName = "December";
    break;
    default:
    monthName = "All Year";
    break;
}//end switch
return monthName;
}//end function getMonth

function getFortune(note){
    let message;
 switch(Number(note)){
     case 1:
     message = "You will win big today.";
     break;
     case 2: 
     message ="Beware danger is coming.";
     break;
     case 3: 
     message ="You will find a box of chocolates.";
     break;
     case 4: 
     message ="You will break a bone.";
     break;
     case 5: 
     message ="You will bring much happiness to your family.";
     break;
     default: 
     message ="Death is looming near.";
     break;
}//end switch
return message;
console.log(message)
}//end getFortune

let month = randomNumberGenerator(12);

let day = randomNumberGenerator(30);

let fortuneNumber = randomNumberGenerator(5);


console.log(month)
console.log(day)
console.log(fortuneNumber)

let monthNameHere = getMonth(month)
let fortuneMessage = getFortune(fortuneNumber)
document.getElementById('fortune').innerHTML = `On ${monthNameHere}, ${day} :  ${fortuneMessage}`;