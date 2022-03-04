function moveF() {
    document.querySelector(".card-container").style.width = "100vw";
    document.querySelector("#card1").style.left = "20vw";
    document.querySelector("#card2").style.left = "40vw";
    document.querySelector("#card3").style.left = "60vw";
    document.querySelector("#card4").style.left = "80vw";
    var nodes = document
      .querySelector(".card-container")
      .getElementsByTagName("div");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.transform = "translate(-50%, -50%)";
    }
    document.querySelector("#btn").style.display = "block";
  }
    function moveF2() {
      document.querySelector(".card-container").style.width = "100vw";
      document.querySelector("#card1").style.left = "20vw";
      document.querySelector("#card1").style.top = "10vh";
      document.querySelector("#card2").style.left = "80vw";
      document.querySelector("#card2").style.top = "10vh";
      document.querySelector("#card3").style.left = "20vw";
      document.querySelector("#card3").style.top = "50vh";
      document.querySelector("#card4").style.left = "80vw";
      document.querySelector("#card4").style.top = "50vh";
      var nodes = document
        .querySelector(".card-container")
        .getElementsByTagName("div");
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.transform = "translate(-50%, -50%)";
      }
      document.querySelector("#btn").style.display = "block";
    }
    function moveB() {
      document.querySelector("#card1").style.left = "50%";
      document.querySelector("#card1").style.top = "50%";
      document.querySelector("#card2").style.left = "50%";
      document.querySelector("#card2").style.top = "50%";
      document.querySelector("#card3").style.left = "50%";
      document.querySelector("#card3").style.top = "50%";
      document.querySelector("#card4").style.left = "50%";
      document.querySelector("#card4").style.top = "50%";

      document.querySelector("#card1").style.transform =
        "translate(-50%,-50%) rotate(10deg)";
      document.querySelector("#card2").style.transform =
        "translate(-50%,-50%) rotate(5deg)";
      document.querySelector("#card3").style.transform =
        "translate(-50%,-50%) rotate(-5deg)";
      document.querySelector("#card4").style.transform =
        "translate(-50%,-50%) rotate(-10deg)";
      document.querySelector("#btn").style.display = "none";
    }
    const mediaQuery = window.matchMedia("(max-width: 650px)");
    if (mediaQuery.matches) {
      var element = document.querySelector(".card-container");
      element.removeAttribute("onclick");
      element.setAttribute("onclick", "moveF2()");
    }
    
  
    document.getElementById('b1').addEventListener('click',()=>{
      window.location.href ="resume";
    });
    document.getElementById('b2').addEventListener('click',()=>{
      window.location.href ="sub";
    });
    document.getElementById('b3').addEventListener('click',()=>{
      window.location.href ="job";
    });
    document.getElementById('b4').addEventListener('click',()=>{
        window.location.href ="cn";
      });
    