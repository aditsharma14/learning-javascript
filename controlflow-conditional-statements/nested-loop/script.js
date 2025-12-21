let isLoggedIn = true;
let Userrole="admin";
let userMessage;
if(isLoggedIn){
    if (Userrole==="admin"){
        userMessage="Welcome Admin! You have full access.";
    }else{
        userMessage="Welcome Guest! You have no access.";
    }
}else{
    userMessage="Please log in to continue.";
}
console.log(userMessage);