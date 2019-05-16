function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log(`The phone brand is  ${this.brand}, color is ${this.color} and the price is ${this.price}.`);
}


const iPhone6S = new Phone(`Apple`, 2250, `silver`);
const SamsungGalaxyS6 = new Phone(`Samsung`, 2250, `black`);
const OnePlusOne = new Phone(`One Plus`, 2250, `white`);
const phones = [iPhone6S, SamsungGalaxyS6, OnePlusOne];
for (ele of phones) {
    ele.printInfo();
}