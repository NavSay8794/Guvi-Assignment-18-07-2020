let _reverse = (arr) => {
    let temp = 0
    if(arr.length %2==0){
        for(let i = 0; i<arr.length/2; i++){
            temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
    }
    else{
        for(let i = 0; i<((arr.length-1)/2)+1; i++){
            temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
    }

    return arr
}

console.log(_reverse([1,2,3,4,5,6,7,8,9]))