console.log('lets see if its bigger or not')
let random = Math.random();
if (random > 0.5){
    alert(`Your number is Greater than 0.5 ${Math.random()}`);
}
    else{
     alert(`Your number is Less than 0.5 ${Math.random()}`)
    }


    let age = Math.random()*70;
    if (age <= 5){
    console.log("This is a child" + age)}
    else if (age <= 10){
    console.log("Child $10"+ age)}
    if (age <= 65){
    console.log("Adult"+ age)}