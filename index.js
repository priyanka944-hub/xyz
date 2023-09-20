let x = 10 
let xyz;
//local varaible or functinal var
function y(){
    console.log(x)
    var z = 20
    xyz = z
}
//block var
{
    var a = 70
    console.log(xyz)
}


y()


console.log(a)
