function push(enter) {
  let answer = document.getElementById("answer")
  let enter_number = enter.innerHTML;
  
  
  
  if (enter_number == "AC") {
    answer.innerHTML = "0"
  }else if(enter_number == "=") {
    answer.innerHTML = eval(answer.innerHTML)
  } else{
    if (answer.innerHTML == "0") {
      answer.innerHTML = enter_number
      }else{
       answer.innerHTML += enter_number
      }
    }
  }
  
  
  function huu (enter) {
    let answer = document.getElementById("answer")
    let enter_number = enter.innerHTML;
    answer.innerHTML += enter_number
    if(answer.innerHTML.slice(-1) == "+" || answer.innerHTML.slice(-1) == "-" || answer.innerHTML.slice(-1) == "*" || answer.innerHTML.slice(-1) == "/"){
      console.log("大丈夫");
        answer.innerHTML.slice(0, -1);
   }else{
     console.log("大丈夫でない");
   }
  }