let numFrogs = prompt("How many frogs are about to jump in?");
const maxFrogCapacity = 15;
let isPondOverCapacity = Number(numFrogs) > maxFrogCapacity;
messageToPrint = isPondOverCapacity ? "It's too crowded" : "come on in!";
print(messageToPrint);