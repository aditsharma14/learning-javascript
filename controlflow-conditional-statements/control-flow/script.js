let Userrole="admin";
let acceslevel;
if (Userrole==="admin"){
    acceslevel="full access";
}else if (Userrole==="subadmin"){
    acceslevel="limited access";
}else if (Userrole==="user"){
    acceslevel="access to content";
}else{
    acceslevel="no access";
}
console.log(`The user with role ${Userrole} has ${acceslevel}.`);