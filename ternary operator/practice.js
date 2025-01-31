function passwordchecker(ps){
    return(
        ps==15? "password is good":"Please enter a password with 15 characters"
    )
}
console.log(passwordchecker("password"));
function votingage(age){
    return(
        age>=18?"you are eligible to vote":"you are not eligible to vote"
    )
}
console.log(votingage(56));