let a = [1,2,4,5,-1,-4,]

a = a.filter(b =>{
    if(b >= 0){
        return b;
    }
})

console.log(a)