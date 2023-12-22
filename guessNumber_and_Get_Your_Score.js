let a=Math.floor(Math.random()*10)+1;
let gn;
let b=0;
while(gn!=a){
gn=prompt("Guess the number between 1 to 10");
gn=Number.parseInt(gn);
  if(gn>a){
    console.log("Your guess is greater than the number");
    b++;
  }
  else if(gn<a){
    console.log("Your guess is less than the number");
    b++;
  }
}
if(gn==a){
  console.log("You guessed the number");
  console.log("Your score is "+(100-b));
}
