let _remove = (arr,func) =>{

    for(let i = 0; i< arr.length; i++){
        let temp = func(arr[i])
        if(temp == false){
            arr.splice(i,1)
        }
    }
    return arr
}

let filter = (item)=>{
    if(item%2==0){
        return true
    }
    else {
        return false
    }
}

console.log(_remove([1,2,3,4,5,6,7,8,9,10],filter))