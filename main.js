function push(enter) {
  let answer = document.getElementById("answer")
  let enter_namber = enter.innerHTML;
  
  
  
  if (enter_namber == "AC") {
    answer.innerHTML = "0"
  }else if(enter_namber == "=") {
    answer.innerHTML = eval(answer.innerHTML)
  } else{
    if (answer.innerHTML == "0") {
      answer.innerHTML = enter_namber
    }else {
      answer.innerHTML += enter_namber
    }
  }
  if(enter_namber.slice(-1) == "+" || "-" || "*" || "/"){
   let enz = enter_number.slice(-1);
   enz = enter_namber
   answer.HTML = enz
 }
}
 