const messagesArray = [];
messagesArray.push("Message1");
messagesArray.push("Message2");
messagesArray.push("Message3");
messagesArray.push("Message4");
messagesArray.push("Message5");

let counter = 5;
const wholeMessageArray = []

for (let i = 0; i < 3; i++) {
  let randomMessageIndex = Math.floor(Math.random() * counter);
  wholeMessageArray.push(messagesArray[randomMessageIndex])
  messagesArray.splice(randomMessageIndex, 1);
  counter--;
}

console.log(`${wholeMessageArray[0]}+${wholeMessageArray[1]}+${wholeMessageArray[2]}`)
