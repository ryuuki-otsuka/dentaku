function huu(enter){
  let answer = document.getElementById("answer")
  let enter_number = enter.innerHTML;
  console.log("大丈夫");
  if(enter_number == "AC"){
    answer.innerHTML = "0"
  }else if (enter_number == "="){
    answer.innerHTML = eval(answer.innerHTML)
  }else{
    if(answer.innerHTML == "0"){
      answer.innerHTML == enter_number
    }else{
      answer.innerHTML += enter_number
    }
  }
}
