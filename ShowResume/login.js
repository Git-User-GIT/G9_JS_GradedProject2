function loginCheck(){
var usernameInput=document.getElementById("uname").value;
 var passwordInput=document.getElementById("psw").value;
 console.log(usernameInput);
 console.log(passwordInput);

if(usernameInput == "user" && passwordInput == "user"){
   location.replace("success.html")
  }else{
        location.replace("https://www.w3schools.com")
        //  alert("incorrect login");
    }
}