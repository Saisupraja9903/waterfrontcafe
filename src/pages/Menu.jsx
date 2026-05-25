import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../responsive.css";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
const breakfastMenu = {
  left: [

    {
      title: "UPPER DECK BREAKFAST",
      desc: "Two Bacon, Two Sausages, One Fried Egg & Beans, White Or Brown Toast",
    },

    {
      title: "VEGETARIAN BREAKFAST",
      desc: "One Fried Egg, Two Hash Browns, Beans, Tomato & Portobello Mushroom, White Or Brown Toast",
    },

    {
      title: "VEGAN BREAKFAST",
      desc: "Two Vegan Sausages, Two Hash Browns, Avocado, Portobello Mushroom, Grilled Tomato, White Or Brown Toast",
    },

   {
  title: "AMERICAN PANCAKE",
  desc: "With Crispy Bacon & Maple Syrup\nWith Greek Yoghurt And Berries",
},

   {
  title: "LIGHT BITES",
  highlight: true,
  desc: "When you want to keep it light, but satisfying",
},

    {
      title: "GREEK YOGHURT",
      desc: "With Banana & Honey",
    },

    {
      title: "GREEK YOGHURT",
      desc: "With Granola & Berries",
    },

    {
      title: "TWO SLICES OF TOAST & MARMALADE",
      desc: "Vegan",
    },

    {
      title: "TWO SLICES OF GLUTEN FREE TOAST & MARMALADE",
      desc: "Gluten Free",
    },

    {
      title: "TWO SLICES OF SOURDOUGH TOAST & MARMALADE",
    },

    {
      title: "TOAST & BEANS (GFO)",
    },

  {
  title: "EGGS",
  highlight: true,
  desc: "Just as you like",
},

    {
      title: "EGGS BENEDICT (GFO)",
      desc: "Served With Ham, Hollandaise Sauce And Toasted English Muffin",
    },

    {
      title: "EGG ROYALE (GFO)",
      desc: "Served With Smoked Salmon, Hollandaise Sauce And Toasted English Muffin",
    },

    {
      title: "OMELETTE",
      desc: "Two Eggs Omelette With Two Toppings Served With Brown Or White Toast Add Toppings +£ Please Ask Choose From Ham, Cheese, Peppers, Mushroom, Onion & Bacon",
    },

    {
      title: "EGGS YOUR WAY WITH TOAST (GFO)",
      desc: "Scrambled/Poached/Fried",
    },

    {
      title: "AVOCADO, TOMATO & TWO EGGS",
      desc: "Scrambled/Poached/Fried",
    },

    {
      title: "AVOCADO, MUSHROOM & TWO EGGS",
      desc: "Scrambled/Poached/Fried",
    },

  ],

  right: [

    {
      title: "SAUSAGE OR BACON RUSTIC ROLL",
    },

    {
      title: "BACON & EGG RUSTIC ROLL",
    },

    {
      title: "SAUSAGE & EGG RUSTIC ROLL",
    },

    {
      title: "FRIED EGG RUSTIC ROLL",
    },

    {
      title: "BLACK PUDDING",
    },

    {
      title: "BEANS",
    },

    {
      title: "HASH BROWN (ONE)",
    },

    {
      title: "VEGAN SAUSAGE",
    },

    {
      title: "BACON",
    },

    {
      title: "SAUSAGE",
    },

    {
      title: "EGG",
    },

    {
      title: "SCRAMBLED EGG",
    },

    {
      title: "PORTOBELLO MUSHROOM",
    },

    {
      title: "BACON ROLL",
    },

    {
      title: "SAUSAGE ROLL",
    },

    {
      title: "PANCAKES WITH BLUEBERRIES/BANANA & MAPLE SYRUP",
      desc: "Add Greek Yoghurt £ Please Ask",
    },

   {
  title: "PASTRIES",
  highlight: true,
  desc: "Complete your breakfast with our scrumptious pastries",
},

    {
      title: "BUTTER CROISSANT",
    },

    {
      title: "ALMOND CROISSANT",
    },

    {
      title: "CINNAMON SWIRL",
    },

    {
      title: "PAIN-AU-CHOC",
    },

    {
      title: "PAIN-AU-RAISIN",
    },

    {
      title: "PASTEL DE NATA",
    },

    {
      title: "COOKIES",
    },

    {
      title: "SCONES WITH",
      desc: `
Butter
Butter & Jam
Jam & Clotted Cream
Tea Cake (With Butter And Jam)
Brownie
Flapjack
      `,
    },

  ],
};
 const mainMenu = {
  left: [

    {
      title: "SMALL BITES",
      desc: "Parmesan And Truffle Fries",
    },

    {
      title: "HOUSE CHIPS",
      desc: "Add Flavour (Curry Or Spicy) +£ Please Ask",
    },

    {
      title: "CHEESY CHIPS",
    },

    {
      title: "MIXED SALAD",
    },

    {
      title: "ONION RINGS",
    },

    {
      title: "Any 3 Small Bites",
      desc: "£ Please Ask",
    },

  {
  title: "LIGHT BITES",
  highlight: true,
  desc: "When you want to keep it light, but satisfying",
},

    {
      title: "GARLIC FLATBREAD",
      desc: "With Caramelised Onions And Cheese",
    },

    {
      title: "SPRING ROLLS (2 PIECES) (VEG)",
    },

    {
      title: "SAMOSAS (2 PIECES) (VEG)",
    },

    {
      title: "TEMPURA KING PRAWNS",
      desc: "With Sweet Chilli Dipping Sauce",
    },

    {
      title: "CHICKEN WINGS GLAZED WITH CHOICE OF YOUR SAUCE",
      desc: "Choose One - Buffalo, BBQ, Teriyaki, Hot Spicy",
    },

    {
      title: "BREADED MOZZARELLA",
      desc: "With Red Pepper Chilli Jam",
    },

    {
      title: "GOAT’S CHEESE AND CARAMELISED ONION TARTLET",
    },

    {
      title: "HOMEMADE SOUP OF THE DAY",
      desc: "Served With White/Brown/Gluten Free Roll",
    },

    {
      title: "Any 3 Light Bites",
      desc: "£ Please Ask",
    },

    {
      title: "NACHOS",
      desc: "Tortilla Chips, Salsa, Jalapeno, Melted 3 Cheeses, Soured Cream & Guacamole",
    },

    {
      title: "WATERFRONT NACHOS (GFO, V)",
      desc: "Standard / Add Beef Chilli / Add Chicken / Add Corn Veg Chilli Mince (V)",
    },

    {
      title: "INDIAN KITCHEN",
      desc: "Served With Rice & Naan Bread",
    },

    {
      title: "MILD CHICKEN CURRY",
    },

    {
      title: "HOT CHICKEN CURRY",
    },

    {
      title: "ITALIAN KITCHEN",
    },

    {
      title: "PIZZA 10” CHEESE & TOMATO",
      desc: "Add Topping + £0.50 Each Mushroom, Onion, Peppers, Ham, Chicken, Pepperoni, Minced Beef, Sweetcorn, Jalapeno, Olives",
    },

    {
      title: "PASTA - BOLOGNESE",
      desc: "Italian Traditional Minced Beef Choose From Penne (GFO), Spaghetti, Linguine, Tagliatelle",
    },

    {
      title: "PASTA - ALFREDO",
      desc: "Chicken In Creamy Mushroom Sauce Choose From Penne (GFO), Spaghetti, Linguine, Tagliatelle",
    },

    {
      title: "PASTA - ARRABBIATA (V)",
      desc: "Tomato Sauce, Garlic, Chilli Choose From Penne (GFO), Spaghetti, Linguine, Tagliatelle",
    },

    {
      title: "PASTA - BEEF LASAGNE",
      desc: "With Mixed Salad Choose From Penne (GFO), Spaghetti, Linguine, Tagliatelle",
    },

    {
      title: "SALADS",
    },

    {
      title: "CHICKEN CEASAR SALAD",
      desc: "With Baby Gem, Bacon, Parmesan, Tomatoes, Cucumber, Croutons & Caesar Dressing",
    },

    {
      title: "WARM GOAT CHEESE SALAD (GFO) (V)",
      desc: "With Beetroot, Tomato, Cucumber, Walnuts & Mixed Leaves. Drizzled with Walnut Oil",
    },

    {
      title: "PRAWN & SMOKED SALMON SALAD (GFO)",
      desc: "With Tomato, Cucumber, Mixed Leaves With a Dill & Lime Mayonnaise",
    },

    {
      title: "HOMEMADE MINCE CHILLI",
    },

    {
      title: "HOMEMADE BEEF CHILLI WITH BASMATI RICE",
    },

    {
      title: "HOMEMADE VEGETARIAN CHILLI WITH BASMATI RICE (V) (VEG)",
    },

  ],

  right: [

    {
      title: "MEAT & FISH",
    },

    {
      title: "FISHCAKES OF THE DAY",
      desc: "Mixed Salad, Sweet Chilli Sauce",
    },

    {
      title: "GARLIC & BUTTER PRAWNS",
      desc: "Served With Rustic Roll",
    },

    {
      title: "GAMMON STEAK (GFO)",
      desc: "Egg & Chips",
    },

    {
      title: "HOMEMADE BEER BATTERED COD FILLET",
      desc: "Chips, Mushy Peas & Tartare Sauce",
    },

    {
      title: "SIRLOIN STEAK 10OZ",
      desc: "Mixed Salad, Portobello Mushroom, Roasted Tomato, Chips, Peppercorn Sauce",
    },

    {
      title: "WATERFRONT CHARGRILLED CHICKEN",
      desc: "(Most Bones Removed), Coleslaw, Chips & Garnish With Honey Mustard (Other Sauce Option Available)",
    },

    {
      title: "WATERFRONT BURGERS",
      desc: "Served In A Soft Potato Brioche Roll With Chips",
    },

    {
      title: "PLANT-BASED BURGER (GFO)",
    },

    {
      title: "6OZ HOMEMADE BEEF BURGER",
      desc: "Add Extra 6oz Beef Patty +£ Please Ask",
    },

    {
      title: "CHICKEN BURGER (GFO)",
    },

    {
      title: "POSH FISH BURGER (TARTAR SAUCE)",
    },

    {
      title: "TOASTED SOURDOUGH SANDWICHES",
    },

    {
      title: "WILTSHIRE HAM & MATURE CHEDDAR CHEESE",
    },

    {
      title: "BRIE, BACON & CRANBERRY",
    },

    {
      title: "MOZZARELLA, TOMATO & PESTO (V)",
    },

    {
      title: "SPECIALITY RUSTIC ROLLS",
      desc: "Served With Chips",
    },

    {
      title: "CHICKEN, AVOCADO & TOMATO FILLED ROLL",
    },

    {
      title: "WILTSHIRE HAM & CHEDDAR CHEESE, TOMATO & ONION CHUTNEY",
    },

    {
      title: "HOUMOUS, PIQUILLO PEPPERS, MIXED LEAVES & TOMATO (VEG)",
    },

    {
      title: "WRAPS (SERVED WITH CHIPS)",
    },

    {
      title: "FAJITA WRAP",
      desc: "Cajun Chicken, Lettuce, Tomato & Sour Cream",
    },

    {
      title: "CAESAR WRAP",
      desc: "Grilled Chicken, Lettuce, Sun-Dried Tomatoes, Parmesan, Rocket & Caesar Dressing",
    },

    {
      title: "CONZALES WRAP",
      desc: "Lettuce, Tomato, Bacon, Feta Cheese And Sour Cream",
    },

    {
      title: "FALAFEL WRAP (VEG)",
      desc: "Falafels, Hummus, Lettuce, Sun-Dried Tomatoes, Caramelised Onion",
    },

    {
      title: "CHILDREN’S MENU",
    },

    {
      title: "CHICKEN GOUJONS",
    },

    {
      title: "BATTERED FISH & CHIPS",
    },

    {
      title: "CLASSIC BEEF BURGER",
    },

    {
      title: "SEARED SALMON & PEAS",
      desc: "Served With Your Choice Of Chunky Chips, Skinny Fries, Mashed Potato Or Rice",
    },

    {
      title: "PASTA WITH HOMEMADE TOMATO & CHEESE (GFO)",
    },

    {
      title: "SAUSAGE, MASH & GRAVY",
    },

    {
      title: "HAM, EGG & CHIPS (GFO)",
    },

    {
      title: "KIDS LUNCH BAG (HAM & CHEESE)",
    },

    {
      title: "CHEESE PIZZA",
    },

    {
      title: "KIDS HAM & CHEESE PIZZA",
    },

    {
      title: "DESSERTS",
    },

    {
      title: "BELGIAN WAFFLE 🧇",
      desc: "With Banana 🍌 Ice Cream 🍨 & Chocolate 🍫 Sauce",
    },

    {
      title: "TREACLE SPONGE 🍰 (GFO)",
    },

    {
      title: "CHEESECAKE OF THE DAY 🍰",
    },

    {
      title: "APPLE CRUMBLE",
    },

    {
      title: "MIXED BERRY ETON MESS",
    },

    {
      title: "CHOICE OF ICE CREAMS FROM BEN & JERRY’S COUNTER",
      desc: "Wide range of cup or cone flavours from our exclusive Ben & Jerry's Counter",
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
  const currentMenu =
    activeTab === "breakfast"
      ? breakfastMenu
      : activeTab === "main"
      ? mainMenu
      : drinksMenu;

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
                : "DRINKS MENU"}
            </h1>

            <p>
              "Dawn's First Light, Benson's First Bite – Waterfront Mornings".
            </p>

            <h4>Served from 08:30 am to 11:30 am</h4>

            <h4>GFO – Gluten Free Option Available Upon Request</h4>

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

            <h2>SPECIALS</h2>

            {currentMenu.left.map((item, index) => (
              <div
  className={`menu-item 
    ${item.noBorder ? "no-border" : ""} 
    ${item.extraSpace ? "extra-space" : ""}
  `}
  key={index}
>               <h3 className={item.highlight ? "menu-highlight" : ""}>
  {item.title}
</h3>
                <p
  className={item.boldDesc ? "bold-desc" : ""}
  style={{ whiteSpace: "pre-line" }}
>
  {item.desc}
</p>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="menu-column">

            <h2>
              {activeTab === "breakfast"
                ? "BREAKFAST ROLLS"
                : activeTab === "main"
                ? "CHEF SPECIALS"
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
  {item.title}
</h3>
                {item.desc && <p>{item.desc}</p>}
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