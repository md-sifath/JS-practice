
//Codding Challenge 3//////
/********************** 

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


//     COdding challenge  4   //
/************************ 

var jhon= {
    Fullname: 'Jhon Vond',
    mass: 60,
    height:1.2,
    calBMI: function(){
        return this.mass*(this.height*this.height);
    }
};
var mark={
    Fullname: 'Mark hard',
    mass: 58,
    height: 1.5,
    calBMI: function(){
        return this.mass*(this.height*this.height);
    }
};
 jhon.BMI=jhon.calBMI();
 mark.BMI=mark.calBMI();

 if(jhon.BMI > mark.BMI){
     console.log(jhon);
 }
else if(mark.BMI> jhon.BMI){
    console.log(mark);
}
else {
    console.log('BMI is same');
}

/*********************************END***************************** */


//     COdding challenge  5   //
/*********************************************** */

var Jhon= {
    Fullname:'Jhon Smith',
    bills:[124,48,268,180,42],

    caltip: function(){

       this.tips=[];
        this.totalbill=[];

        for(var  i=0; i<5; i++){
            var per;
            if(this.bills[i]<50){
                per=0.2;
            }
            else if(this.bills[i]>=50 && this.bills[i]<=200){
                per=.15;
            }
            else {
                per=.10;
            }
            this.tips[i]=per*this.bills[i];
            this.totalbill[i]=this.tips[i]+this.bills[i];
        }
    }

};

Jhon.caltip();
var Mark= {
    fullname: 'Mark millar',
    bills:[124,48,268,180],

    caltip: function(){

       this.tips=[];
        this.totalbill=[];

        for(var  i=0; i<this.bills.length; i++){
            var per;
            if(this.bills[i]<100){
                per=0.2;
            }
            else if(this.bills[i]>=100 && this.bills[i]<=300){
                per=.1;
            }
            else {
                per=.25;
            }
            this.tips[i]=per*this.bills[i];
            this.totalbill[i]=this.tips[i]+this.bills[i];
        }
    }

};

 function calavg(tips){
     var sum=0;
     for(var i=0; i< tips.length; i++){
         sum+=tips[i];
     }
     return sum/tips.length;
 }
 Mark.caltip();

 Jhon.avg=calavg(Jhon.tips);
 Mark.avg=calavg(Mark.tips);
console.log(Jhon);

console.log(Mark);

/************************************END****************************** */
































