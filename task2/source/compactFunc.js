let _compact = (arr) =>{
    let compactArray = []
    for(let i =0; i< arr.length; i++){
        if(arr[i] != false && arr[i] != null && arr[i] != 0 && arr[i] != "" && arr[i] != undefined){
            compactArray.push(arr[i])
        }
    }
    return compactArray
}

console.log(_compact([0, 1, false, 2, '', 3,4,true , "", 5, null , 6,undefined,0,7,8,false]))