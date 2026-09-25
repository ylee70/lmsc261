const conesSoldPerHour = 14;
const inventory = 700;
for (let hour = 1; hour <= 12; hour++) {
    const conesSold = conesSoldPerHour * hour;
    const inventoryLeft = inventory - conesSold;
 print(conesSoldPerHour * hour + " cones sold at hour " + hour);
print(inventoryLeft);
}