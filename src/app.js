function generateExcuse() {
  // Who Generator //

  let who = [
    "The milkman ",
    "My grandma with dementia ",
    "The kid who thinks hes a ninja turtle ",
    "Three squirles and a raccoon "];

    let shuffle = Math.random();
    let totalWho = who.length;
    let shuffleIndex = Math.floor(shuffle * totalWho);
    let randomWho = who[shuffleIndex];
   

    // ACTION GENERATOR //

    let action = [
      "spilled rotten milk all over ",
      "stole ",
      "pretended to be a sprinkler while peeing all over ",
      "broke "];
  
      let shuffleAction = Math.random();
      let totalAction = action.length;
      let shuffleActionIndex = Math.floor(shuffleAction * totalAction);
      let randomAction = action[shuffleActionIndex];
      

    // WHAT GENERATOR //

    let what = [
      "my dog ",
      "my car ",
      "me "];
  
      let shuffleWhat = Math.random();
      let totalWhat = what.length;
      let shuffleWhatIndex = Math.floor(shuffleWhat * totalWhat);
      let randomWhat = what[shuffleWhatIndex];
      
 
      // WHEN GENERATOR //

  let when = [
    "yesterday.",
    "while I was on the toilet.",
    "when I was getting ready.",
    "during my lunch.",
    "as I hopped out of my car to dance to Drake."
  ];
  let shuffleWhen = Math.random();
      let totalWhen = when.length;
      let shuffleWhenIndex = Math.floor(shuffleWhen * totalWhen);
      let randomWhen = when[shuffleWhenIndex];
      let excuseElement = document.querySelector(".excuse");
      
      excuseElement.innerHTML = randomWho + randomAction + randomWhat + randomWhen;
  
}

window.onload = generateExcuse()
