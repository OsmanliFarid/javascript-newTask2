const func = () =>{
    let array = [1,2,3]
    let array2 = [1,2,3,4]
    let array_cre = array.concat(array2)
    let arrNew = []
    for(let i =0;i<array_cre.length;i++){
        let arr_topla = 0
        
        for(let j = 0;j<array_cre.length;j++){
            if(array_cre[i] === array_cre[j]){
                arr_topla++
            }
        }
        if(arr_topla === 1){
            arrNew.push(array_cre[i])
        }
        
    }
    console.log(arrNew);
    
    
    
    
}
func()