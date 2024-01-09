// insert Element in Array using js Dsa quation

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,14];
const newEl =200
const position = 2
for(let i=array.length-1;i>=0;i--){
    console.log(array[i])
    if(i>=position){
        array[i+1]=array[i]
        if(i==position){
            array[i]=newEl
        }
    }
}
console.log(array)