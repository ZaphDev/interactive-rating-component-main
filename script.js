var rating="0";
var ratingSelected=true;

document.getElementById("rating").innerHTML = rating;
function submitRating(){
    if(ratingSelected == true){
    document.getElementById('card1Switch').style.display="none";
    document.getElementById('card2Switch').style.display="flex";
    }
    else {
        
    }
}