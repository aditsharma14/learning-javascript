let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator"; 
        break;
    case "subscriber":
        userCategory = "Subscriber"; 
        break;
    case "guest":
        userCategory = "Guest User"; 
        break;
    default:
        userCategory = "Unknown User"; 
}
console.log(`The user is categorized as: ${userCategory}.`);