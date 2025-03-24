const kebabToUpper = (title) => {
    let a = title.split("-")
    a.splice(0,1,"UPPER")
    
    let deyisdirdirm = a.join("_")
    return deyisdirdirm.toUpperCase()
    
    
    
    
}
const b = kebabToUpper("Kebab-case")
console.log(b);


