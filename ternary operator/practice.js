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
function positivenegative(number){
    return(
        number>=0?"number is positive":"number is negative"
    );
};
console.log(positivenegative(-67));