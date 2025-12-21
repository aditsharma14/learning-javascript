let user="Employee";
if(user==="Employee"){
    console.log("Welcome,you have access to dietary services");
}else if(user==="Enrolled member"){
    console.log("Welcome,you have access to dietary services and one to one interaction with dietitian");
}else if(user=="Subscribed member"){
    console.log("Welcome,you have access to partial dietary services");
}else if(user=="Non-subscribed member"){
    console.log("Welcome,you have to take a plan");
}else{
    console.log("Invalid user");
}