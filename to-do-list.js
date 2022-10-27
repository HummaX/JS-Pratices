let decide = prompt('What would you like to do');
let data = []
while(decide !== 'quit'){  
    if(decide === 'add'){
       add = data.push(prompt('Enter a Task'));
       console.log(add)}
   else if(decide === 'remove'){
    h = prompt('Enter Task number')
   remove = data.splice(`${h}`)
   }
   else if (decide === 'list Tasks'){
    for (let i = 0; i <= data.length -1; i++){
    console.log(`${i +1} : ${data[i]}`)}}
   decide = prompt('What would you like to do')
}
if(decide == 'quit'){
    console.log('You quit!')
}
