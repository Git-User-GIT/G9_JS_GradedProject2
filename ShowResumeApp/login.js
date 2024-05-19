const userNameList=["userabc","userA","userB","userC"];
const passwordList=["passABC","passwordA","passwordB","passwordc"];

function submitForm(){
    var userNameInput =document.getElementById("username").value;
    var passwordInput =document.getElementById("password").value;
    for(let i=0;i<userNameList.length;i++){
        if(userNameList[i] === userNameInput){
        for(let j=0;j<passwordList.length;j++){
            if(passwordList[j] === passwordInput){
                console.log("success")
                location.replace("resume.html");
            }else if(j>= passwordList.length){
                alert("Incorrect Passowrd !!")   
            }}
        }else if(i>=userNameList.length){
        alert("Incorrect username") }
      }
    }
