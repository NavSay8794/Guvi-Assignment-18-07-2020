let _nth = (arr, index) =>{
    if(index < 0){
        return arr[arr.length + index]
    }
    else{
        return arr[index]
    }
}

console.log(_nth(['a', 'b', 'c', 'd','e'] , -1))