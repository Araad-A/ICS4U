function checkPassword(){
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username === "USERNAME" && password === "PASSWORD"){
        location.href = "addScore.html";
    }else{
        alert("INCORRECT USERNAME/PASSWORD - PLEASE TRY AGAIN.");
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
    }
}