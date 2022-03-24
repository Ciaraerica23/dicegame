

  function rollDice(){
    let num1=Math.ceil(Math.random()*6);
  let diceImage="dice"+num1+".png";
  let image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",diceImage);
  let num2=Math.ceil(Math.random()*6);
    let diceImage2="dice"+num2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",diceImage2);
    let head=document.querySelector("h1");
    if(num1>num2){head.innerHTML="🚩Player 1 Wins!";}
    else if(num2>num1){head.innerHTML="🚩Player 2 Wins!";}
    else{head.innerHTML="🚩It's a Draw🚩!";}

  }

  let diceButton=document.querySelector("button");
  diceButton.addEventListener("click",rollDice);
