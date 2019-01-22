

function monthNumber () {
    let month = Math.floor((Math.random()*12)+1);
    return month;
}

function monthDay (){
    let day = Math.floor((Math.random()*30)+1);
    return day;
}

function fortuneNumber() {
    let fotune = Math.floor((Math.random()*5)+1);
    return fortune;
}

switch (month){
    case 1: "January";
    case 2: "February";
    case 3: "March";
    case 4: "April";
    case 5: "May";
    case 6: "June";
    case 7: "July";
    case 8: "August";
    case 9: "September";
    case 10: "October";
    case 11: "November";
    case 12: "December";
    default: "All Year";
}

 switch(fortune){
     case 1: "You will win big today.";
     case 2: "Beware danger is coming.";
     case 3: "You will find a box of chocolates.";
     case 4: "You will break a bone.";
     case 5: "You will bring much happiness to your family.";
     default: "Death is looming near.";

}//end switch

document.getElementById('fortune').innerHTML = `On $(month), (day) $(fortune)`;