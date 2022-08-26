var ratingSelected=false;
var rate1Selected=false;
var rate2Selected=false;
var rate3Selected=false;
var rate4Selected=false;
var rate5Selected=false;

function selectRating1(rating){    
    if(rate1Selected == false){
        rate1Selected=true;
        rate2Selected=false;
        rate3Selected=false;
        rate4Selected=false;
        rate5Selected=false;     
        ratingSelected = true;
        rating = 1;
        document.getElementById('rate1').style.backgroundColor="#fb7413";
        document.getElementById('rate1').style.color="white";
        document.getElementById('rate2').style.backgroundColor="";
        document.getElementById('rate2').style.color="";
        document.getElementById('rate3').style.backgroundColor="";
        document.getElementById('rate3').style.color="";
        document.getElementById('rate4').style.backgroundColor="";
        document.getElementById('rate4').style.color="";
        document.getElementById('rate5').style.backgroundColor="";
        document.getElementById('rate5').style.color="";
        document.getElementById("rating").innerHTML = rating;
    }
    else{
        rate1Selected = false;
        ratingSelected = false;
        document.getElementById('rate1').style.backgroundColor="";
        document.getElementById('rate1').style.color="";
    }

}
function selectRating2(rating){    
    if(rate2Selected == false){
        rate1Selected=false;
        rate2Selected=true;
        rate3Selected=false;
        rate4Selected=false;
        rate5Selected=false;     
        ratingSelected = true;
        rating = 2;
        document.getElementById('rate1').style.backgroundColor="";
        document.getElementById('rate1').style.color="";
        document.getElementById('rate2').style.backgroundColor="#fb7413";
        document.getElementById('rate2').style.color="white";
        document.getElementById('rate3').style.backgroundColor="";
        document.getElementById('rate3').style.color="";
        document.getElementById('rate4').style.backgroundColor="";
        document.getElementById('rate4').style.color="";
        document.getElementById('rate5').style.backgroundColor="";
        document.getElementById('rate5').style.color="";
        document.getElementById("rating").innerHTML = rating;
    }
    else{
        rate2Selected = false;
        ratingSelected = false;
        document.getElementById('rate2').style.backgroundColor="";
        document.getElementById('rate2').style.color="";
    }

}
function selectRating3(rating){    
    if(rate3Selected == false){
        rate1Selected=false;
        rate2Selected=false;
        rate3Selected=true;
        rate4Selected=false;
        rate5Selected=false;     
        ratingSelected = true;
        rating = 3;
        document.getElementById('rate1').style.backgroundColor="";
        document.getElementById('rate1').style.color="";
        document.getElementById('rate2').style.backgroundColor="";
        document.getElementById('rate2').style.color="";
        document.getElementById('rate3').style.backgroundColor="#fb7413";
        document.getElementById('rate3').style.color="white";
        document.getElementById('rate4').style.backgroundColor="";
        document.getElementById('rate4').style.color="";
        document.getElementById('rate5').style.backgroundColor="";
        document.getElementById('rate5').style.color="";
        document.getElementById("rating").innerHTML = rating;
    }
    else{
        rate3Selected = false;
        ratingSelected = false;
        document.getElementById('rate3').style.backgroundColor="";
        document.getElementById('rate3').style.color="";
    }

}
function selectRating4(rating){    
    if(rate4Selected == false){
        rate1Selected=false;
        rate2Selected=false;
        rate3Selected=false;
        rate4Selected=true;
        rate5Selected=false;     
        ratingSelected = true;
        rating = 4;
        document.getElementById('rate1').style.backgroundColor="";
        document.getElementById('rate1').style.color="";
        document.getElementById('rate2').style.backgroundColor="";
        document.getElementById('rate2').style.color="";
        document.getElementById('rate3').style.backgroundColor="";
        document.getElementById('rate3').style.color="";
        document.getElementById('rate4').style.backgroundColor="#fb7413";
        document.getElementById('rate4').style.color="white";
        document.getElementById('rate5').style.backgroundColor="";
        document.getElementById('rate5').style.color="";
        document.getElementById("rating").innerHTML = rating;
    }
    else{
        rate4Selected = false;
        ratingSelected = false;
        document.getElementById('rate4').style.backgroundColor="";
        document.getElementById('rate4').style.color="";
    }

}
function selectRating5(rating){    
    if(rate5Selected == false){
        rate1Selected=false;
        rate2Selected=false;
        rate3Selected=false;
        rate4Selected=false;
        rate5Selected=true;     
        ratingSelected = true;
        rating = 5;
        document.getElementById('rate1').style.backgroundColor="";
        document.getElementById('rate1').style.color="";
        document.getElementById('rate2').style.backgroundColor="";
        document.getElementById('rate2').style.color="";
        document.getElementById('rate3').style.backgroundColor="";
        document.getElementById('rate3').style.color="";
        document.getElementById('rate4').style.backgroundColor="";
        document.getElementById('rate4').style.color="";
        document.getElementById('rate5').style.backgroundColor="#fb7413";
        document.getElementById('rate5').style.color="white";
        document.getElementById("rating").innerHTML = rating;
    }
    else{
        rate5Selected = false;
        ratingSelected = false;
        document.getElementById('rate5').style.backgroundColor="";
        document.getElementById('rate5').style.color="";
    }

}


function submitRating(){
    if(ratingSelected == true){

        document.getElementById('card1Switch').style.display="none";
        document.getElementById('card2Switch').style.display="flex";

    }
   else if (ratingSelected == false){
        document.getElementById('submitButton').style.animation='shake 0.15s';
        setTimeout(() => {document.getElementById('submitButton').style.animation='0s'; }, 150);
    }
}