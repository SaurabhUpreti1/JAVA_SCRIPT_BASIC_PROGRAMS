let a=Math.floor(Math.random()*100);
if(a>=0 && a<=10){
    let b=prompt("enter first number");
    let c=prompt("enter second number");
    let d=prompt("which operation do you wanna perform");
    if(d=="+"){
        console.log(b-c);
    }
    else if(d=="-"){
        console.log(b/c);
    }
    else if(d=="*"){
        console.log(b+c);
    }
    else if(d=="/"){
        console.log(b**c);
    }    
}
else{
    let b=prompt("enter first number");
    let c=prompt("enter second number");
    let d=prompt("which operation do you wanna perform");
    if(d=="+"){
        console.log(b+c);
    }
    else if(d=="-"){
        console.log(b-c);
    }
    else if(d=="*"){
        console.log(b*c);
    }
    else if(d=="/"){
        console.log(b/c);
    }   

}