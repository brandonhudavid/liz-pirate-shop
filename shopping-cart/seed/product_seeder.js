var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } );

var products = [
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/91uddP3RA5L._SY445_.jpg",
        title: "Star Wars Episode IV DVD",
        description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.",
        price: 20,
        format: "dvd"
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/51RAG8KYHEL._SY445_.jpg",
        title: "Star Wars Episode V DVD",
        description: "The adventure continues in this \"Star Wars\" sequel. Luke Skywalker (Mark Hamill), Han Solo (Harrison Ford), Princess Leia (Carrie Fisher) and Chewbacca (Peter Mayhew) face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader (David Prowse).",
        price: 20,
        format: "dvd"
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/81SSy4cXhIL._SY445_.jpg",
        title: "Star Wars Episode VI DVD",
        description: "Luke Skywalker (Mark Hamill) battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo (Harrison Ford) and Princess Leia (Carrie Fisher) reaffirm their love and team with Chewbacca, Lando Calrissian (Billy Dee Williams), the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.",
        price: 20,
        format: "dvd"
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/91uddP3RA5L._SY445_.jpg",
        title: "Star Wars Episode IV Blu-Ray",
        description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.",
        price: 25,
        format: "blu"
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/51RAG8KYHEL._SY445_.jpg",
        title: "Star Wars Episode V Blu-Ray",
        description: "The adventure continues in this \"Star Wars\" sequel. Luke Skywalker (Mark Hamill), Han Solo (Harrison Ford), Princess Leia (Carrie Fisher) and Chewbacca (Peter Mayhew) face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader (David Prowse).",
        price: 25,
        format: "blu"
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/81SSy4cXhIL._SY445_.jpg",
        title: "Star Wars Episode VI Blu-Ray",
        description: "Luke Skywalker (Mark Hamill) battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo (Harrison Ford) and Princess Leia (Carrie Fisher) reaffirm their love and team with Chewbacca, Lando Calrissian (Billy Dee Williams), the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.",
        price: 25,
        format: "blu"
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}