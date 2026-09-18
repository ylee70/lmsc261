const activities = [
    "babysit tadpoles", 
    "flies for lunch", 
    "tongue stretch", 
    "swimming lesson"
];

let peopleInput = prompt ("Choose an activity number!");
let index = peopleInput % activities.length;
print(activities[index]);   