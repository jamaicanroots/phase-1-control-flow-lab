function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber < 400)
    return "This one is on me!";
  if(someNumber > 2500)
    return "No can do.";
  if(someNumber > 400 && someNumber < 2000)
    return "That will be twenty bucks.";
  if(someNumber <= 2000)
    return "That will be twenty bucks.";
  if(someNumber > 2000)
    return "I will gladly take your thirty bucks.";
  
  
  
  
}

function ternaryCheckCity(someCity){
  let result
return someCity === "NYC" ? "Ok, sounds good." : "No go."
}
 


function switchOnCharmFromTip(tipamount){
  if(tipamount > 1)
  return "Thank you so much.";
  // Write your code here!
}