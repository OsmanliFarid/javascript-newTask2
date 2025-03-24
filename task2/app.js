const func = () =>{
    let array1 = ["salam","dunya"]
    let array2 = ["salam"]
    let arr = []
    for(let i = 0;i<array1.length;i++){
        if(!array2.includes(array1[i])){
            arr.push(array1[i])
        }
        
        
    }
    console.log(arr.join(""));
    
}
func()