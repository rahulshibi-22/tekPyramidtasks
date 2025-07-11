let arr = [8,4,2,10];
// console.log(arr.at(-2));

function greatestNum(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const element1 = arr[i];
        // console.log(element1);
        
        for (let j =  i; j < arr.length; j++) {
            const element2 = arr[j];
            console.log(element2);
            
            if (element1>element2){
                
            }
        }
    }
}
console.log(greatestNum(arr));