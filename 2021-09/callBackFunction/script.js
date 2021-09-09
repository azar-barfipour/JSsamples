let numbers=[1,8,7,2,5,3,20,19];
let result=numbers.sort(example);
console.log(result);

function example(value1,value2){
    return value1 - value2;
   
}


 result= numbers.sort(function(value1,value2){
    return value1 - value2;
})

console.log(result);

 result= numbers.sort((value1,value2) => value1 - value2)
 console.log(result);


