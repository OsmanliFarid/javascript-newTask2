const func = (arr) =>{
    let arrNew = []
    let mesaj = ""
     for(let i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arrNew.push(arr[i])
        }
        
     }
     if(arrNew.length > 0){
        return arrNew
     }else{
        return arr
     }
     
}
const a = func([5,6,7,8,34,-4,-5])
console.log(a);

