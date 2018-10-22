# Liz's Pirate Shop

Liz's Pirate Shop is a web application created for our friend Piratical Liz in order to sell cheap knock-offs of the original Star Wars trilogy. The web app was created using NodeJS, Express, MongoDB, and Bootstrap.

## Getting Started
The following instructions will help with getting the web app running on your local machine.

### Prerequisites
Have a MongoDB server ready, which can be downloaded [here.](https://www.mongodb.com/download-center/community)

### Installation
Run a MongoDB server by navigating to the binary folder and running `./mongod`<br>
Clone this repo and navigate to the `shopping-cart` directiory<br>
Populate seeder information with `node seed/product_seeder.js`<br>
Run the web application with `npm start`

## Usage

![main screen](./screens/liz-screen1.png)

The main screen shows six movie discs available for purchase: 3 DVDs and 3 Blu-rays. The top right button leads to the shopping cart page and shows how many items are currently in the cart. Clicking "Add to cart" also sends the customer to the shopping cart screen, in which they can view items in the cart, cost and quantity of each item, as well as total cost. Customers can either go back to the main screen with the top left logo or change the quantity of the items within the shopping cart by pressing the + and - buttons.<br>

![shopping cart](./screens/liz-screen2.png)

If a customer adds all 3 DVDs to the cart, the customer will automatically receive a 10% discount on DVDs. If a customer adds all 3 Blu-Rays to the cart, the customer will automatically receive a 15% discount on Blu-Rays. These discounts and savings are shown in the shopping cart whenever available.<br>

![discounts](./screens/liz-screen3.png)

Additionally, if the customer adds 100 or more items to the cart, the customer will receive a 5% bulk discount on the total. This discount is applied to the total after the discounts above.

![bulk discount](./screens/liz-screen4.png)

## Built With

* [Node.js](https://nodejs.org) - JavaScript run-time environment
* [Express](https://expressjs.com/) - web app framework for Node.js
* [MongoDB](https://www.mongodb.com/) - database program
* [Bootstrap](http://getbootstrap.com/) - front-end framework








