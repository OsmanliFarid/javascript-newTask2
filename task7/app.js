const func = () =>{
    let namesArray = [
        "Alice",
        "Bob",
        "Catherine",
        "David",
        "Eva",
        "Andrew",
        "Frank",
        "Anna",
        "George",
        "Alex",
      ];
    let newNames = []
    for(let i =0;i<namesArray.length;i++){
        console.log(namesArray[i].charAt(0));
        
        if(namesArray[i].charAt(0) === "A"){
            newNames.push(namesArray[i])
        }
        
        
    }
      console.log(newNames);
      
}
func()