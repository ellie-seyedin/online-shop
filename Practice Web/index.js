function becomeMember(){
    console.log("Welcome!You are a memeber now.");
}

// function random(){
//   var randomNumber = (Math.random()) * 6;
//    var rand = Math.ceil(randomNumber)
//   console.log(randomNumber);
// }

// num1 = prompt("please enter num1:");
// num2 = prompt("please enter num2:");

// function multiply(num1,num2){
//   return  num1 * num2;
//   }

//   alert(multiply(num1,num2));

//   var userName = prompt("what's your name:");
//   function enter(name){
//     var friends = ["Sina", "eli", "ali"];
//     if(friends.includes(userName)){
//         console.log("You can enter");
//     }else{
//         console.log("You can't enter");
//     }

//   }
//   enter(userName);

  //update array
  var friends = ["Sina", "eli", "ali"];
  friends[2]="qoli";
    //insert in an array
    friends.push("somo");

    //pomodoro
    var round=1;
    var breakTime=[];
    function pomodoro(){
        // var breakTime= [5,5,5,15,5,5,5,15,5,5,5,15];
        if(round%4 ==0){
            breakTime.push(15);
        }else{
            breakTime.push(5);
        }
        round++;
    }
    
        var counter = 1;
        while(counter<=20){
        pomodoro();
        counter++;
    }
    pomodoro();
    console.log(breakTime);
    

    function isSpecialArray(arr) {
        for (var i = 0; i < arr.length; i++) {
            if ((arr[i]%2===0 && i%2!==0) || (arr[i]%2!==0 && i%2===0)) {
                return false;
            }
            }
            return true; 
                }

    var obj = document.getElementsByClassName("product-card");
    console.log(obj);  

    var obj1 = document.getElementById("selected");
    obj1.style.width='330px'

    function showReview(){
        // document.querySelector(".review-container").style.opacity="100%";
        // document.querySelector(".product-img").style.filter="brightness(0.4)";
        document.querySelector(".review-container").classList.toggle("hover-review");
        document.querySelector(".product-img").classList.toggle("hover-img");
    }

    function hideReview(){
        document.querySelector(".review-container").classList.toggle("hover-review");
        document.querySelector(".product-img").classList.toggle("hover-img");
    }

    function darkMode(){
        document.getElementById("sun-icon").style.display="none";
        document.getElementById("moon-icon").style.display="block"
        document.getElementsByTagName("body")[0].classList.toggle("body-dark");
        document.querySelector("#intro p").style.color="#EEEFF1"
    }
    
    function lightMode(){
        document.getElementById("sun-icon").style.display="block";
        document.getElementById("moon-icon").style.display="none"
        document.getElementsByTagName("body")[0].classList.toggle("body-dark");
        document.querySelector("#intro p").style.color="#EEEFF1"
    }
    



