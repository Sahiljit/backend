
try{
    console.log("start of try")

    setTimeout(function(){
        throw new Error("error is here")
    },1000)

    // throw new Error("error is here")


}
catch(error){
    console.log("inside catch block")
    console.log(error)
    
}