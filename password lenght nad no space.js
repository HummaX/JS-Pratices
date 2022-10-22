let password = prompt('Enter you password')

if (password.length >= 8) {
    console.log('long enough')
}
else{
    console.log('password is too short')
}
if (password.indexOf(' ') === -1){
    console.log('Good Password')
}
else{
    alert('No spaces allowed')
}
