
//Codding Challenge 3//////
//********************** */

var bill1= 124;
var bill2=48;
var bill3=268;

function tip_calculator(bills){
    var per;
    if(bills <50){
        per=.2;
    }
    else if(bills>=50 && bills<=200){
        per=.15;
    } else {
        per=.10;
    }
    return per*bills;
}
var bills=[bill1, bill2, bill3];
var tips=[tip_calculator(bills[0]),tip_calculator(bills[1]),tip_calculator(bills[2])];
console.log(tips);

/*********************END************************** */


