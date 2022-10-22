let firstName = prompt("Enter you name")
if(!firstName){
    console.log("Enter Your name please") //! ite represesnts firstname is fasle or not given it will say its true andretune this
}
else{
    console.log(firstName)
}

let age = prompt("Enter Your age")
if(!(age > 0 && age <= 5 || age >= 65)){
    console.log("Your are not free")
}
else{
    console.log("You are free")
}