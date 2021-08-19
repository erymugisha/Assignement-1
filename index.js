var email_input = document.getElementById("email"),
    submit_btn = document.getElementById("btn"),
    error_msg = document.getElementById("error_msg");

function submit(){
     if (email_input.value === ""){
        error_msg.innerHTML = "Whoops! It looks like you forgot to add your email.";
        email_input.style.border = "2px solid rgba(134, 0, 0, 0.76)"; 
     } else if (!email_input.value.includes("@") ||
     !email_input.value.includes(".")) {
        error_msg.innerHTML = "Please provide a valid email address";
        email_input.style.border = "2px solid rgba(134, 0, 0, 0.76)"; 
     } else {
      error_msg.innerHTML = "";
      email_input.style.border = "2px solid rhsl(0, 0%, 59%)";
     }
}  

