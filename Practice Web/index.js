    function becomeMember(){
    console.log("Welcome!You are a memeber now.");
}

    var productImg = document.querySelector(".product-img");
    productImg.addEventListener("mouseover",showReview);
    productImg.addEventListener("mouseout",hideReview)

    var video = document.querySelector("video");
    video.addEventListener("ended", function(){
        console.log("The video ended.")
    }); 

    function showReview(){
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
    



