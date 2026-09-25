const priceOfIceCream = 5;
let paymentRecieved = prompt("Welcome to the Icecream Shop! How much are you paying?");
let isPaymentEnough = paymentRecieved >= priceOfIceCream;
if (isPaymentEnough) {
    print ("Thanks! Enjoy the Ice Cream!");
}
else {
    print ("Not enough cash!");
}
if (paymentRecieved > priceOfIceCream) {
    print ("Here's your change $" + (paymentRecieved - priceOfIceCream));
}