module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.dvdDiscount = false;
    this.bluDiscount = false;
    this.bulkDiscount = false;
    this.hasDiscount = this.dvdDiscount || this.bluDiscount || this.bulkDiscount;

    this.calculatePrice = function() {
        if (this.totalQty == 0) {
            var returnValue = 0
            this.totalPrice = returnValue.toFixed(2);
        }
        var dvdCount = 0;
        var dvdPrice = 0;
        var bluCount = 0;
        var bluPrice = 0;
        for (var id in this.items) {
            if (this.items[id].item.format == "dvd" && this.items[id].qty > 0) {
                dvdCount++;
                dvdPrice += this.items[id].price;
            } else if (this.items[id].item.format == "blu" && this.items[id].qty > 0) {
                bluCount++;
                bluPrice += this.items[id].price;
            }
        }
        this.beforeDiscount = dvdPrice + bluPrice;
        this.beforeDiscount = this.beforeDiscount.toFixed(2);
        if (dvdCount == 3) {
            dvdPrice = 0.9 * dvdPrice;
            this.dvdDiscount = true;
            console.log("DVD discount applied.\n");
        } else {
            this.dvdDiscount = false;
            console.log("DVD discount not applied.\n");
        }
        if (bluCount == 3) {
            bluPrice = 0.85 * bluPrice;
            this.bluDiscount = true;
            console.log("Blu-ray discount applied.\n");
        } else {
            this.bluDiscount = false;
        }
        this.totalPrice = dvdPrice + bluPrice;
        if (this.totalQty >= 100) {
            this.totalPrice = 0.95 * this.totalPrice;
            this.bulkDiscount = true;
            console.log("Bulk discount applied.\n");
        } else {
            this.bulkDiscount = false;
        }
        this.totalPrice = this.totalPrice.toFixed(2);
        this.hasDiscount = this.dvdDiscount || this.bluDiscount || this.bulkDiscount;
    }
    this.calculatePrice();

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.calculatePrice();
    };

    this.remove = function(item, id) {
        if (this.items[id].qty == 0) {
            return;
        }
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.calculatePrice();
    };

    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};