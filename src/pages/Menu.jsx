import React, { useState } from "react";
import "../responsive.css";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
const breakfastMenu = {
  left: [

    {
      title: "UPPER DECK BREAKFAST",
      desc: "Two Bacon, Two Sausages, One Fried Egg, One Hash Brown, Beans & White or Brown Toast",
    },

    {
      title: "WATERFRONT BREAKFAST",
      desc: "Two Bacon, Two Sausages, One Fried Egg, One Hash Brown, Portobello Mushroom Beans & White or Brown Toast",
    },

    {
      title: "VEGETARIAN BREAKFAST",
      desc: "One Fried Egg, Two Hash Browns, Beans, Tomato & Portobello Mushroom, White or Brown Toast",
    },

    {
      title: "VEGAN BREAKFAST",
      desc: "Two Vegan Sausages, Two Hash Browns, Avocado, Portobello Mushroom, Grilled Tomato, White or Brown Toast",
    },

   {
  title: "AMERICAN PANCAKE",
  desc: "With Crispy Bacon & Maple Syrup £7.99\nWith Greek Yoghurt and Berries £7.99",
},

   {
  title: "LIGHT BITES",
  highlight: true,
  desc: "When you want to keep it light, but satisfying",
},

    {
      title: "GREEK YOGHURT",
      desc: "With Banana & Honey £4.99\nWith Granola & Berries £4.99",
    },

    {
      title: "TWO SLICES OF TOAST & MARMALADE £2.99",
    },

    {
      title: "TWO SLICES OF GLUTEN FREE TOAST & MARMALADE £2.99",
    },

    {
      title: "TOAST & BEANS (GFO) £4.99",
    },

  {
  title: "EGGS",
  highlight: true,
  desc: "Just as you like",
},

    {
      title: "EGGS BENEDICT (GFO)",
      desc: "Served With Ham, Avocado, Hollandaise Sauce and Toasted English Muffin",
    },

    {
      title: "EGG ROYALE (GFO)",
      desc: "Served With Smoked Salmon, Avocado, Hollandaise Sauce and Toasted English Muffin",
    },

    {
      title: "OMELETTE",
      desc: "Two Eggs Omelette with Two Toppings Served with Brown or White Toast\nAdd Toppings +£0.50 Each\nChoose From Ham, Cheese, Peppers, Mushroom, Onion & Bacon, Green Chilli",
    },

    {
      title: "EGGS YOUR WAY WITH TOAST (GFO)",
      desc: "Scrambled/Poached/Fried £7.49",
    },

    {
      title: "AVOCADO, TOMATO & TWO EGGS",
      desc: "Scrambled/Poached/Fried £8.49",
    },

  ],

  right: [

    {
      title: "SAUSAGE OR BACON RUSTIC ROLL £6.49",
    },

    {
      title: "BACON & EGG RUSTIC ROLL £7.49",
    },

    {
      title: "SAUSAGE & EGG RUSTIC ROLL £7.49",
    },

    {
      title: "EGG RUSTIC ROLL £6.49",
    },

    {
      title: "BREAKFAST WRAP £8.99",
      desc: "Two fried eggs, sausage, bacon, hash browns and cheese with ketchup/brown sauce",
    },

    {
      title: "BREAKFAST EXTRAS",
      highlight: true,
    },

    {
      title: "BLACK PUDDING £1.99",
    },

    {
      title: "BEANS £1.99",
    },

    {
      title: "HASH BROWN (ONE) £1.49",
    },

    {
      title: "VEGAN SAUSAGE £1.99",
    },

    {
      title: "BACON £1.99",
    },

    {
      title: "SAUSAGE £1.99",
    },

    {
      title: "EGG £1.99",
    },

    {
      title: "SCRAMBLED EGG £2.99",
    },

    {
      title: "PORTOBELLO MUSHROOM £2.49",
    },

    {
      title: "CHILDREN’S BREAKFAST",
      highlight: true,
    },

    {
      title: "BACON ROLL £3.49",
    },

    {
      title: "SAUSAGE ROLL £3.49",
    },

    {
      title: "PANCAKES WITH BLUEBERRIES/BANANA & MAPLE SYRUP",
      desc: "Add Greek Yoghurt £0.49",
    },

   {
  title: "PASTRIES",
  highlight: true,
  desc: "Complete your breakfast with our scrumptious pastries",
},

    {
      title: "BUTTER CROISSANT £2.69",
    },

    {
      title: "ALMOND CROISSANT £3.69",
    },

    {
      title: "CINNAMON SWIRL £3.29",
    },

    {
      title: "PAIN-AU-CHOC £2.69",
    },

    {
      title: "PAIN-AU-RAISIN £3.29",
    },

    {
      title: "PASTEL DE NATA £2.29",
    },

    {
      title: "COOKIES £2.69",
    },

    {
      title: "SCONES WITH",
      desc: `
Butter £2.69
Butter & Jam £3.29
Jam & Clotted Cream £3.69
Tea Cake (With Butter and Jam) £3.29
Brownie £3.29
Flapjack £3.29
      `,
    },

    {
      title: "Additional Varieties",
      desc: "Please Check Our Display Unit for Additional Cake and Pastry Varieties",
    },

  ],
};
 const mainMenu = {
  left: [

    {
      title: "SMALL BITES",
      highlight: true,
    },
    {
      title: "PARMESAN AND TRUFFLE FRIES £4.99",
    },
    {
      title: "HOUSE CHIPS £3.49",
      desc: "Add Seasoning (Curry, Peri Peri or Spicy) +£0.50",
    },
    {
      title: "CHEESY CHIPS £4.49",
    },
    {
      title: "BREADED HALLOUMI FRIES £4.49",
    },
    {
      title: "MARINATED OLIVES (V,VG) £4.99",
    },
    {
      title: "HUMMUS AND PITTA BREAD £5.99",
    },
    {
      title: "ONION RINGS £3.49",
    },
    {
      title: "Any 3 of the Above For £11.99",
    },

    {
      title: "LIGHT BITES",
      highlight: true,
    },
    {
      title: "GARLIC FLATBREAD £5.99",
      desc: "With Caramelised Onions and Cheese",
    },
    {
      title: "SPRING ROLLS (2 PIECES) (VEG) £5.99",
    },
    {
      title: "BUTTERMILK FRIED CHICKEN STRIPS (3 PIECES) £6.99",
    },
    {
      title: "TEMPURA KING PRAWNS £7.49",
      desc: "With Sweet Chilli Dipping Sauce",
    },
    {
      title: "CHICKEN WINGS £7.29",
      desc: "Glazed With Choice Of Your Sauce\nChoose One - Buffalo, BBQ, Hot Honey, Hot Spicy",
    },
    {
      title: "BREADED MOZZARELLA STICKS £5.99",
      desc: "With Red Pepper Chilli Jam",
    },
    {
      title: "GOAT’S CHEESE AND CARAMELISED ONION TARTLET £7.49",
    },
    {
      title: "HOMEMADE SOUP OF THE DAY £5.99",
      desc: "Served With White/Brown/Gluten Free Roll",
    },
    {
      title: "Any 3 of the Above For £15.99",
    },

    {
      title: "NACHOS (TORTILLA CHIPS)",
      highlight: true,
    },
    {
      title: "WATERFRONT NACHOS (NGCI, V) £10.99",
      desc: "Salsa, Jalapeno Peppers, Melted Three Cheeses, Soured Cream & Guacamole\nAdd Chicken +£2.00",
    },
    {
      title: "BEEF CHILLI NACHOS (NGCI) £12.99",
      desc: "Melted Three Cheeses, Soured Cream & Guacamole",
    },
    {
      title: "VEGETARIAN CHILLI NACHOS (V) £12.99",
      desc: "Melted Three Cheeses, Soured Cream & Guacamole",
    },

    {
      title: "ITALIAN KITCHEN - PASTA",
      highlight: true,
      desc: "Choose From Penne (GFO), Spaghetti",
    },
    {
      title: "BOLOGNESE £15.99",
      desc: "Italian Traditional Minced Beef",
    },
    {
      title: "ALFREDO £15.99",
      desc: "Chicken In Creamy Mushroom Sauce",
    },
    {
      title: "ARRABBIATA (V) £14.99",
      desc: "Tomato Sauce, Garlic, Chilli",
    },
    {
      title: "BEEF LASAGNE £16.99",
      desc: "With Mixed Salad",
    },
    {
      title: "CRAB AND KING PRAWN £18.99",
    },

    {
      title: "ASIAN KITCHEN",
      highlight: true,
      desc: "Served With Rice & Naan Bread",
    },
    {
      title: "MILD CHICKEN CURRY £15.49",
    },
    {
      title: "HOT CHICKEN CURRY £15.49",
    },

    {
      title: "HOMEMADE CHILLI",
      highlight: true,
    },
    {
      title: "HOMEMADE BEEF CHILLI WITH RICE £15.49",
    },
    {
      title: "HOMEMADE VEGETARIAN CHILLI WITH RICE (V) (VEG) £15.49",
    },

  ],

  right: [

    {
      title: "MEAT & FISH",
      highlight: true,
    },
    {
      title: "FISHCAKES OF THE DAY £14.99",
      desc: "Mixed Salad, Sweet Chilli Sauce",
    },
    {
      title: "GAMMON STEAK (GFO) £17.99",
      desc: "Egg & Chips",
    },
    {
      title: "FISH AND CHIPS £16.49",
      desc: "Cod, Chips, Mushy Peas & Tartare Sauce",
    },
    {
      title: "PAN FRIED SUPREME OF SALMON £18.99",
      desc: "Warm New Potato, Green Beans, Cherry Tomatoes, Rocket, Parmesan Salad & Hollandaise Sauce",
    },
    {
      title: "SIRLOIN STEAK 10OZ £24.99",
      desc: "Mixed Salad, Portobello Mushroom, Roasted Tomato, Chips, Peppercorn Sauce",
    },
    {
      title: "WATERFRONT CHARGRILLED CHICKEN £20.99",
      desc: "(Most Bones Removed), Coleslaw, Chips & Garnish With Honey Mustard (Other Sauce Option Available)",
    },
    {
      title: "BREADED SCAMPI WITH CHIPS £16.49",
      desc: "Served with chips, mixed salad, and tartare sauce",
    },

    {
      title: "WATERFRONT BURGERS",
      highlight: true,
      desc: "Served In A Soft Potato Brioche Roll With Chips",
    },
    {
      title: "PLANT-BASED BURGER (GFO) £15.49",
    },
    {
      title: "6OZ HOMEMADE BEEF BURGER £14.99",
      desc: "Add Extra 6oz Beef Patty +£2.99",
    },
    {
      title: "CHICKEN BURGER (GFO) £14.99",
    },
    {
      title: "POSH FISH BURGER (TARTAR SAUCE) £14.99",
    },

    {
      title: "SALADS",
      highlight: true,
    },
    {
      title: "CHICKEN CAESAR SALAD £15.49",
      desc: "With Baby Gem, Bacon, Parmesan, Tomatoes, Cucumber, Croutons & Caesar Dressing",
    },
    {
      title: "WARM GOAT CHEESE SALAD (GFO) (V) £15.99",
      desc: "With Beetroot, Tomato, Cucumber, Walnuts & Mixed Leaves. Drizzled with Walnut Oil",
    },
    {
      title: "PRAWN & SMOKED SALMON SALAD (GFO) £16.99",
      desc: "With Tomato, Cucumber, Mixed Leaves With a Dill & Lime Mayonnaise",
    },
    {
      title: "CHEF JOE'S SPECIAL VEGAN SALAD £16.99",
      desc: "Lettuce, Rocket, Chicory, Green Beans, Cherry Tomatoes, Carrot, Cucumber, Beets, Radish, Sweet Potato, Quinoa, Pumpkin Seeds, Tofu & House Dressing",
    },

    {
      title: "BAGUETTES",
      highlight: true,
      desc: "Served With Chips",
    },
    {
      title: "CHICKEN MAYONNAISE & SALAD £12.99",
    },
    {
      title: "TUNA MAYONNAISE & CUCUMBER £12.99",
    },
    {
      title: "CHEESE & SALAD £12.99",
    },
    {
      title: "HAM & SALAD £12.99",
    },
    {
      title: "HOUMOUS & SALAD £12.99",
    },

    {
      title: "SPECIALITY RUSTIC ROLLS",
      highlight: true,
      desc: "Served With Chips",
    },
    {
      title: "CHICKEN, AVOCADO & TOMATO FILLED ROLL £10.99",
    },
    {
      title: "HAM & CHEESE WITH TOMATO & ONION CHUTNEY £9.99",
    },
    {
      title: "HOUMOUS, PIQUILLO PEPPERS, MIXED LEAVES & TOMATO (VEG) £8.99",
    },

    {
      title: "SOURDOUGH TOASTIES",
      highlight: true,
    },
    {
      title: "WILTSHIRE HAM & MATURE CHEDDAR CHEESE £7.99",
    },
    {
      title: "BRIE, BACON & CRANBERRY £7.99",
    },
    {
      title: "MOZZARELLA, TOMATO & PESTO (V) £6.99",
    },

    {
      title: "WRAPS",
      highlight: true,
      desc: "Served With Chips",
    },
    {
      title: "FAJITA WRAP £13.99",
      desc: "Cajun Chicken, Lettuce, Tomato and Cajun",
    },
    {
      title: "CAESAR WRAP £13.99",
      desc: "Grilled Chicken, Lettuce, Crispy Bacon, Parmesan, Lettuce and Caesar Dressing",
    },
    {
      title: "FALAFEL WRAP (VEG) £13.49",
      desc: "Falafels, Hummus, Lettuce, Sun-Dried Tomatoes, Caramelised Onion",
    },
    {
      title: "BBQ WRAP £13.99",
      desc: "Grilled chicken, lettuce, Bacon, and Tomato with BBQ Sauce",
    },

    {
      title: "CHILDREN’S MENU",
      highlight: true,
    },
    {
      title: "CHICKEN GOUJONS £5.49",
    },
    {
      title: "BATTERED FISH & CHIPS £6.99",
    },
    {
      title: "CLASSIC BEEF BURGER £6.99",
      desc: "Served With Your Choice of Chunky Chips, Skinny Fries or Rice",
    },
    {
      title: "PASTA WITH TOMATO SAUCE & CHEESE (GFO) £6.49",
    },
    {
      title: "HAM, EGG & CHIPS (GFO) £5.99",
    },
    {
      title: "LUNCH BAG (HAM & CHEESE) £6.99",
    },
    {
      title: "CHEESE PIZZA £6.99",
    },
    {
      title: "HAM & CHEESE PIZZA £7.99",
    },

    {
      title: "DESSERTS",
      highlight: true,
    },
    {
      title: "BELGIAN WAFFLE £6.99",
      desc: "With Banana, Ice Cream & Chocolate Sauce",
    },
    {
      title: "TREACLE SPONGE (GFO) £6.99",
    },
    {
      title: "CHEESECAKE OF THE DAY £6.99",
    },
    {
      title: "CHOCOLATE FONDANT CAKE £6.99",
    },
    {
      title: "MIXED BERRY ETON MESS £6.99",
    },
    {
      title: "STICKY TOFFEE PUDDING £6.99",
      desc: "With Vanilla Ice Cream, Toffee Sauce",
    },
    {
      title: "VANILLA ESPRESSO £5.99",
      desc: "Two Scoops Vanilla Ice Cream & Single Shot of Espresso",
    },

  ],
};
 const drinksMenu = {
  left: [

    {
      title: "SPARKLING WINE",
    },

    {
      title: "PROSECCO",
      desc: "Le Dolci Colline, Adria Vini, Italy - Perfectly Fruity Fizz, Lively And Refreshing, Best Drunk By The River! 125ML / BOTTLE",
    },

    {
      title: "CHAMPAGNE GREMILLET",
      desc: "Brut Selection, France - Crisp, Elegant, Balanced And An Attractive Creamy Style 125ML / BOTTLE",
    },

    {
      title: "WHITE WINE",
    },

    {
      title: "HOUSE WINE",
      desc: "Classic French Table Wine, Aromatic, Fresh And Dry, Very Easy Drinking 175ML / 250ML / BOTTLE",
    },

    {
      title: "SAUVIGNON BLANC",
      desc: "Sierra Grande - A Vibrant, Dry, Lemony Sauvignon From Chile 175ML / 250ML / BOTTLE",
    },

    {
      title: "PINOT GRIGIO",
      desc: "Sanvigilio, Venezie, Italy - Flavourful, Tangy, Balanced Pinot With Apple And Citrus Notes 175ML / 250ML / BOTTLE",
    },

    {
      title: "CHARDONNAY",
      desc: "Cape Heights, South Africa - Unoaked Chardonnay, A Fresh Round Mix Of Melon And Citrus Flavours 175ML / 250ML / BOTTLE",
    },

    {
      title: "SAUVIGNON BLANC",
      desc: "Moko Black, Marlborough - New Zealand's Finest, Aromatic, Gooseberry And Tropical Flavours And A Full Crisp Palate 175ML / 250ML / BOTTLE",
    },

    {
      title: "GAVI LA BATTISTINA",
      desc: "Piemont, Italy - A Very High Class Wine, Juicy Textured With A Weighty Fruit Feel 175ML / 250ML / BOTTLE",
    },

    {
      title: "MACON-CHARNAY",
      desc: "Clos De I’Eglise, Burgundy – Freshness And Elegance Are The Key To The Nose And Palate 175ML / 250ML / BOTTLE",
    },

    {
      title: "ROSE WINE",
    },

    {
      title: "HOUSE WINE",
      desc: "France – Soft, Red Berry Flavours, Dry With A Refreshing Finish 175ML / 250ML / BOTTLE",
    },

    {
      title: "PINOT GRIGIO BLUSH",
      desc: "Sanvigillo, Italy – Elegant Salmon Pink Rose With Juicy Summer Fruits And An Off-Dry Finish 175ML / 250ML / BOTTLE",
    },

    {
      title: "GRIS DE GRIS ROSÉ",
      desc: "France – Château l’Hemitage, Delicate But Vibrant, With Notes Of Fleshy Peaches 175ML / 250ML / BOTTLE",
    },

    {
      title: "TABALI",
      desc: "Pedregoso, Chile – Fresh And Fruity Pinot Noir Rosé With Excellent Fruit And Crispness 175ML / 250ML / BOTTLE",
    },

    {
      title: "RED WINE",
    },

    {
      title: "HOUSE WINE",
      desc: "Classically French, Light And Flavoursome, With Ample Spicy, Juicy Fruit 175ML / 250ML / BOTTLE",
    },

    {
      title: "MERLOT",
      desc: "Sierra Grande, Chile – Earthy, Plummy, Rich Character With Good Structure, Easy To Drink 175ML / 250ML / BOTTLE",
    },

    {
      title: "SHIRAZ",
      desc: "Cape Heights, South Africa – A Ripe And Juicy Shiraz, Packed With Dark Fruit Flavours And Black Pepper Notes On The Palate 175ML / 250ML / BOTTLE",
    },

    {
      title: "RIOJA VEGA PIEDRA",
      desc: "Spain – Bodegas Serres, Light And Plummy With A Long, Smooth Finish 175ML / 250ML / BOTTLE",
    },

    {
      title: "MALBEC",
      desc: "Nieto, Argentina – Vibrant and well Structured, Full Bodied. Rich And Warming With A Fleshy Black Fruit 175ML / 250ML / BOTTLE",
    },

    {
      title: "CHATEAU CARCANIEUX",
      desc: "Bordeaux Claret – An Aromatic Bouquet Of Ripe Fruits And Spices With A Delicate Finish Of Oak 175ML / 250ML / BOTTLE",
    },

  ],

  right: [

    {
      title: "COLD DRINKS",
    },

    {
      title: "WATER STILL/SPARKLING",
      desc: "Small / Large",
    },

    {
      title: "Coke/Diet/Zero/Sprite Zero/Fanta",
    },

    {
      title: "JUICES",
      desc: "Mango / Pineapple / Cranberry",
    },

    {
      title: "TROPICANA ORANGE",
    },

    {
      title: "CAPELLA APPLE",
    },

    {
      title: "BOTTLE GREEN",
      desc: "Appletiser / Elderflower / Eld & Pomegranate",
    },

    {
      title: "FENTAMANS",
      desc: "Pink Lemonade / Ginger Beer / Vict Lemonade",
    },

    {
      title: "J20",
      desc: "App & Man / App & Rasp / OJ & Pass",
    },

    {
      title: "SANPELLEGRINO",
      desc: "Lemon / Blood Orange / Orange / Grapefruit",
    },

    {
      title: "HOT DRINKS",
    },

    {
      title: "POTS OF ENGLISH BREAKFAST TEA",
    },

    {
      title: "SPECIALITY TEAS",
      desc: "Lemon Ginger / Camomile / Redbush / Green / Peppermint / Assam / Darjeeling / Lapsang / Chai / Cranberry / Straw-Rasp & Straw",
    },

    {
      title: "MOCHACCINO",
    },

    {
      title: "LATTE/CAPPUCCINO",
    },

    {
      title: "AMERICANO",
    },

    {
      title: "FILTER COFFEE",
    },

    {
      title: "ESPRESSO",
    },

    {
      title: "DOUBLE ESPRESSO",
    },

    {
      title: "FLAT WHITE",
    },

    {
      title: "ICED COFFEE",
    },

    {
      title: "HOT CHOCOLATE",
    },

    {
      title: "MILKSHAKES",
      desc: "CHOCOLATE / STRAWBERRY / VANILLA",
    },

    {
      title: "KIDS",
    },

    {
      title: "KIDS COLD MILK",
    },

    {
      title: "KIDS JUICE",
    },

    {
      title: "DRAUGHT BEERS",
    },

    {
      title: "SAN MIGUEL 5%",
    },

    {
      title: "1664 5%",
    },

    {
      title: "WAINWRIGHT AMBER 4.1%",
    },

    {
      title: "BROOKLYN STONEWALL 5.5%",
    },

    {
      title: "SOMERSBY CIDER 4.5%",
    },

    {
      title: "RENEGADE BREWSKI 4.1%",
    },

    {
      title: "BOTTLED BEERS",
      desc: "Peroni 5%, Sol 4%",
    },

    {
      title: "Bottled Beers (0%)",
      desc: "Heineken 0%, Peroni 0%",
    },

    {
      title: "COCKTAILS & SPIRITS",
    },

    {
      title: "SPIRITS",
      desc: "Vodka / Malibu / Whisky / Gin / Rum 25ML / 50ML",
    },

    {
      title: "LIQUOR",
      desc: "Baileys / Tequila / Disaronno / Tia Maria 25ML / 50ML",
    },

    {
      title: "MIXERS",
    },

    {
      title: "COCKTAILS",
      desc: "Sex On The Beach / Woo-Woo / Classic Martini / Mojito",
    },

  ],
};
 const pizzaMenu = {
  left: [
    {
      desc: "FRESHLY COOKED 12” PIZZA ON A CLASSIC ITALIAN BASE, LAYERED WITH OUR SIGNATURE TOMATO SAUCE",
      boldDesc: true,
    },
    {
      title: "THAMES CLASSIC £11.99",
      desc: "Seasoning Mozzarella, fresh basil leaves, and extra virgin olive oil (chilli flakes – optional)",
    },
    {
      title: "BENSON BLAZE £14.99",
      desc: "Mozzarella and Pepperoni",
    },
    {
      title: "RIVERSIDE ROASTER £15.99",
      desc: "Mozzarella, tender chicken breast, pepper, onion, mushroom",
    },
    {
      title: "TANDOORI CRUISER £15.99",
      desc: "Mozzarella, Tandoori chicken breast, onion, fresh chillies, jalapenos",
    },
    {
      title: "HAM & PINEAPPLE £14.99",
      desc: "Mozzarella, ham and pineapple",
    },
    {
      title: "BENSON GARDEN £14.99",
      desc: "Mozzarella, mushroom, peppers, onion and sweetcorn",
    },
    {
      title: "RIVERSIDE VEGAN £14.99",
      desc: "Plant-based cheese, mushroom, peppers, onion and sweetcorn",
    },
    {
      title: "SPICY SQUADRON £17.99",
      desc: "Mozzarella, Cajun spiced chicken, red onions, cherry tomato, peppers and garnished with chilli flakes",
    },
    {
      title: "EXTRA TOPPINGS",
      highlight: true,
    },
    {
      title: "£2.99 Each for extra",
      desc: "Ham, Pepperoni, Chicken, Ground beef",
    },
    {
      title: "£1.49 Each for extra",
      desc: "Peppers, Onions, Tomatoes, Mushrooms, Fresh Chillies, Jalapenos, Pineapple",
    },
  ],
  right: [
    {
      desc: "We believe great pizza starts with the perfect bake.\nThat’s why we use a state-of-the-art electric pizza oven inspired by centuries of Italian tradition but designed for today’s world.\nCrafted for precision and efficiency, our oven delivers exceptional flavour, texture, and consistency every visit.\nHere’s why our pizzas taste so incredible:",
      boldDesc: true,
    },
    { title: "Authentic Italian Flavour, Every Time", desc: "Our oven, imported from Italy, reaches a perfect 500°C, ensuring a beautifully crisp base with that signature golden crust. The high heat caramelises toppings to perfection, melting the cheese into a decadent, bubbling delight—just as you’d find in the pizzerias of Naples." },
    { title: "Unbeatable Consistency", desc: "Thanks to innovative Air Trap System® technology, the heat stays locked inside the oven, guaranteeing perfect, even cooking from edge to centre. Every pizza we serve is flawlessly baked, with no soggy middles or uneven crusts - just deliciousness in every bite." },
    { title: "Sustainably Baked, 100% Wood-Free", desc: "Our electric oven is completely wood-free, making it an eco-friendly choice that reduces waste without compromising taste. It uses up to 30% less energy than traditional ovens, allowing you to enjoy your pizza with confidence, knowing it’s made with sustainability in mind." },
    { title: "Experience the Difference", desc: "At Waterfront Cafe, we combine the best of tradition and technology to bring you genuinely exceptional pizza.\nWhether you love a classic Margherita or something more adventurous, our expertly baked pizzas are a taste experience." },
    { title: "Recognised by the True Neapolitan Pizza Association (AVPN)", desc: "Our Zanolli pizza oven meets the standards of the Associazione Verace Pizza Napoletana (AVPN), the global authority on authentic Neapolitan pizza.\nThis means every pizza we serve stays true to Italian traditions, bringing a slice of Naples to your table." },
  ],
};
  const currentMenu =
    activeTab === "breakfast"
      ? breakfastMenu
      : activeTab === "main"
      ? mainMenu
      : activeTab === "pizza"
      ? pizzaMenu
      : drinksMenu;

  const renderTitle = (title) => {
    if (!title) return null;
    const priceRegex = /(.*?)\s+(£\d+(?:\.\d{2})?)\s*$/;
    const match = title.match(priceRegex);
    if (match) {
      return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
          <span>{match[1]}</span>
          <span>{match[2]}</span>
        </div>
      );
    }
    return <span>{title}</span>;
  };

  const renderDesc = (desc, isBold) => {
    if (!desc) return null;
    return (
      <div className={isBold ? "bold-desc" : ""} style={{ marginTop: "4px" }}>
        {desc.split('\n').map((line, i) => {
          const priceRegex = /(.*?)\s+(£\d+(?:\.\d{2})?)\s*$/;
          const match = line.match(priceRegex);
          if (match) {
            return (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
                <span>{match[1]}</span>
                <span>{match[2]}</span>
              </div>
            );
          }
          return <div key={i}>{line}</div>;
        })}
      </div>
    );
  };

  return (
    <>
      {/* <Navbar /> */}

      <main className="menu-page">

        {/* TOP SECTION */}
        <div className="menu-top">

          <div className="menu-heading">
            <h1>
              {activeTab === "breakfast"
                ? "BREAKFAST MENU"
                : activeTab === "main"
                ? "MAIN MENU"
                : activeTab === "pizza"
                ? "PIZZA MENU"
                : "DRINKS MENU"}
            </h1>

            <p>
              {activeTab === "main" || activeTab === "pizza" ? '"ARRIVE AS A GUEST | LEAVE AS A FRIEND | COME BACK AS FAMILY"' : '"Dawn\'s First Light, Benson\'s First Bite – Waterfront Mornings".'}
            </p>

            <h4>
              {activeTab === "main" ? "MAINS SERVED FROM 11:30 AM" : activeTab === "pizza" ? "PIZZA SERVED FROM 11:30 AM to 18:30 PM" : "Served from 08:30 am to 11:30 am"}
            </h4>

            <h4>
              {activeTab === "main" ? "V - Vegetarian, VEG - Vegan, GFO - Gluten-Free Options Available Upon Request." : activeTab === "pizza" ? "GFO – Gluten-Free Option Available Upon Request" : "GFO – Gluten Free Option Available Upon Request"}
            </h4>

            <h4>
              Please Speak To A Staff Member Regarding Dietary Or Allergen
              Requirements.
            </h4>
          </div>

          {/* TABS */}
          <div className="menu-tabs">

            <button
              className={activeTab === "breakfast" ? "active" : ""}
              onClick={() => setActiveTab("breakfast")}
            >
              BREAKFAST MENU
            </button>

            <button
              className={activeTab === "main" ? "active" : ""}
              onClick={() => setActiveTab("main")}
            >
              MAIN MENU
            </button>

            <button
              className={activeTab === "pizza" ? "active" : ""}
              onClick={() => setActiveTab("pizza")}
            >
              PIZZA MENU
            </button>

            <button
              className={activeTab === "drinks" ? "active" : ""}
              onClick={() => setActiveTab("drinks")}
            >
              DRINKS MENU
            </button>

          </div>
        </div>

        {/* MENU CONTENT */}
        <div className="menu-grid">

          {/* LEFT */}
          <div className="menu-column">

            <h2>
              {activeTab === "main"
                ? "STARTERS & BITES"
                : activeTab === "pizza"
                ? "ITALIAN PIZZA"
                : "SPECIALS"}
            </h2>

            {currentMenu.left.map((item, index) => (
              <div
  className={`menu-item 
    ${item.noBorder ? "no-border" : ""} 
    ${item.extraSpace ? "extra-space" : ""}
  `}
  key={index}
>               <h3 className={item.highlight ? "menu-highlight" : ""}>
                  {renderTitle(item.title)}
                </h3>
                {item.desc && renderDesc(item.desc, item.boldDesc)}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="menu-column">

            <h2>
              {activeTab === "breakfast"
                ? "BREAKFAST ROLLS"
                : activeTab === "main"
                ? "MAINS & GRILL"
                : activeTab === "pizza"
                ? "THE PERFECT BAKE"
                : "COLD DRINKS"}
            </h2>

            {currentMenu.right.map((item, index) => (
              <div
  className={`menu-item 
    ${item.noBorder ? "no-border" : ""} 
    ${item.extraSpace ? "extra-space" : ""}
  `}
  key={index}
>               <h3 className={item.highlight ? "menu-highlight" : ""}>
                  {renderTitle(item.title)}
                </h3>
                {item.desc && renderDesc(item.desc, item.boldDesc)}
              </div>
            ))}
          </div>

        </div>

      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Menu;