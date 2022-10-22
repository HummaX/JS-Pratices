let animals = ['lion','zebra']
for (let i = 0; i < animals.length; i++){
    console.log(i,animals[i])
}
// just try the 2 versions and compare the results. 
//console.log(animals) will just display the entire array. console.log(animals[i]) 
//prints each individual item as a string as the for loop iterates through the array. 
//The second approach is useful when you need to perform actions on each item of an array, just as one example.