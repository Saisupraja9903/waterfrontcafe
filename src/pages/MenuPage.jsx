import React, { useState } from "react";
import "../responsive.css";

// --- DUMMY CONTENT ARRAYS ---

const breakfastMenu = [
  {
    category: "Specials",
    items: [
      {
        name: "Upper Deck Breakfast",
        price: "£9.99",
        desc: "Two Bacon, Two Sausages, One Fried Egg, One Hash Brown, Beans & White or Brown Toast",
      },
      {
        name: "Waterfront Breakfast",
        price: "£10.99",
        desc: "Two Bacon, Two Sausages, One Fried Egg, One Hash Brown, Portobello Mushroom Beans & White or Brown Toast",
      },
      {
        name: "Vegetarian Breakfast",
        price: "£8.99",
        desc: "One Fried Egg, Two Hash Browns, Beans, Tomato & Portobello Mushroom, White Or Brown Toast",
      },
      {
        name: "Vegan Breakfast",
        price: "£9.49",
        desc: "Two Vegan Sausages, Two Hash Browns, Avocado, Portobello Mushroom, Grilled Tomato, White Or Brown Toast",
      },
      {
        name: "American Pancake",
        price: "",
        desc: "With Crispy Bacon & Maple Syrup £7.99\nWith Greek Yoghurt and Berries £7.99",
      },
    ],
  },
  {
    category: "Light Bites",
    subtitle: "When you want to keep it light, but satisfying",
    items: [
      {
        name: "Greek Yoghurt",
        price: "£4.99",
        desc: "With Banana & Honey",
      },
      {
        name: "Greek Yoghurt",
        price: "£4.99",
        desc: "With Granola & Berries",
      },
      {
        name: "Two Slices Of Toast & Marmalade",
        price: "£2.99",
        desc: "",
      },
      {
        name: "Two Slices Of Gluten Free Toast & Marmalade",
        price: "£2.99",
        desc: "Gluten Free",
      },
      {
        name: "Toast & Beans (GFO)",
        price: "£4.99",
        desc: "",
      },
    ],
  },
  {
    category: "Eggs",
    subtitle: "Just as you like",
    items: [
      {
        name: "Eggs Benedict (GFO)",
        price: "£8.49",
        desc: "Served With Ham, Avocado, Hollandaise Sauce and Toasted English Muffin",
      },
      {
        name: "Egg Royale (GFO)",
        price: "£8.99",
        desc: "Served With Smoked Salmon, Avocado, Hollandaise Sauce and Toasted English Muffin",
      },
      {
        name: "Omelette",
        price: "£8.99",
        desc: "Two Eggs Omelette with Two Toppings Served with Brown or White Toast\nAdd Toppings +£0.50 Each\nChoose From Ham, Cheese, Peppers, Mushroom, Onion & Bacon, Green Chilli",
      },
      {
        name: "Eggs Your Way With Toast (GFO)",
        price: "£7.49",
        desc: "Scrambled/Poached/Fried",
      },
      {
        name: "Avocado, Tomato & Two Eggs",
        price: "£8.49",
        desc: "Scrambled/Poached/Fried",
      },
    ],
  },
  {
    category: "Breakfast Rolls",
    items: [
      { name: "Sausage Or Bacon Rustic Roll", price: "£6.49", desc: "" },
      { name: "Bacon & Egg Rustic Roll", price: "£7.49", desc: "" },
      { name: "Sausage & Egg Rustic Roll", price: "£7.49", desc: "" },
      { name: "Egg Rustic Roll", price: "£6.49", desc: "" },
      { name: "Breakfast Wrap", price: "£8.99", desc: "Two fried eggs, sausage, bacon, hash browns and cheese with ketchup/brown sauce" },
    ],
  },
  {
    category: "Breakfast Extras",
    subtitle: "Treat yourself with your favourite extra compliment",
    items: [
      { name: "Black Pudding", price: "£1.99", desc: "" },
      { name: "Beans", price: "£1.99", desc: "" },
      { name: "Hash Brown (One)", price: "£1.49", desc: "" },
      { name: "Vegan Sausage", price: "£1.99", desc: "" },
      { name: "Bacon", price: "£1.99", desc: "" },
      { name: "Sausage", price: "£1.99", desc: "" },
      { name: "Egg", price: "£1.99", desc: "" },
      { name: "Scrambled Egg", price: "£2.99", desc: "" },
      { name: "Portobello Mushroom", price: "£2.49", desc: "" },
    ],
  },
  {
    category: "Children's Breakfast",
    subtitle: "Delight your children with all time favourites",
    items: [
      { name: "Bacon Roll", price: "£3.49", desc: "" },
      { name: "Sausage Roll", price: "£3.49", desc: "" },
      {
        name: "Pancakes With Blueberries/Banana & Maple Syrup",
        price: "£4.49",
        desc: "Add Greek Yoghurt £0.49",
      },
    ],
  },
  {
    category: "Pastries",
    subtitle: "Complete your breakfast with our scrumptious pastries",
    items: [
      { name: "Butter Croissant", price: "£2.69", desc: "" },
      { name: "Almond Croissant", price: "£3.69", desc: "" },
      { name: "Cinnamon Swirl", price: "£3.29", desc: "" },
      { name: "Pain-Au-Choc", price: "£2.69", desc: "" },
      { name: "Pain-Au-Raisin", price: "£3.29", desc: "" },
      { name: "Pastel De Nata", price: "£2.29", desc: "" },
      { name: "Cookies", price: "£2.69", desc: "" },
      {
        name: "Scones With",
        price: "",
        desc: "Butter £2.69\nButter & Jam £3.29\nJam & Clotted Cream £3.69",
      },
      { name: "Tea Cake", price: "£3.29", desc: "With Butter and Jam" },
      { name: "Brownie", price: "£3.29", desc: "" },
      { name: "Flapjack", price: "£3.29", desc: "" },
      {
        name: "Additional Varieties",
        price: "",
        desc: "Please Check Our Display Unit For Additional Cake And Pastry Varieties",
      }
    ],
  },
];

const mainMenu = [
  {
    category: "Small Bites",
    items: [
      { name: "Parmesan And Truffle Fries", price: "£4.99", desc: "" },
      { name: "House Chips", price: "£3.49", desc: "Add Seasoning (Curry, Peri Peri or Spicy) +£0.50" },
      { name: "Cheesy Chips", price: "£4.49", desc: "" },
      { name: "Breaded Halloumi Fries", price: "£4.49", desc: "" },
      { name: "Marinated Olives (V,VG)", price: "£4.99", desc: "" },
      { name: "Hummus And Pitta Bread", price: "£5.99", desc: "" },
      { name: "Onion Rings", price: "£3.49", desc: "" },
      { name: "Any 3 of the Above", price: "£11.99", desc: "" },
    ],
  },
  {
    category: "Light Bites",
    items: [
      { name: "Garlic Flatbread", price: "£5.99", desc: "With Caramelised Onions and Cheese" },
      { name: "Spring Rolls (2 Pieces) (Veg)", price: "£5.99", desc: "" },
      { name: "Buttermilk Fried Chicken Strips (3 Pieces)", price: "£6.99", desc: "" },
      { name: "Tempura King Prawns", price: "£7.49", desc: "With Sweet Chilli Dipping Sauce" },
      { name: "Chicken Wings", price: "£7.29", desc: "Glazed With Choice Of Your Sauce\nChoose One - Buffalo, BBQ, Hot Honey, Hot Spicy" },
      { name: "Breaded Mozzarella Sticks", price: "£5.99", desc: "With Red Pepper Chilli Jam" },
      { name: "Goat's Cheese And Caramelised Onion Tartlet", price: "£7.49", desc: "" },
      { name: "Homemade Soup Of The Day", price: "£5.99", desc: "Served With White/Brown/Gluten Free Roll" },
      { name: "Any 3 of the Above", price: "£15.99", desc: "" },
    ],
  },
  {
    category: "Nachos (Tortilla Chips)",
    items: [
      { name: "Waterfront Nachos (NGCI, V)", price: "£10.99", desc: "Salsa, Jalapeno Peppers, Melted Three Cheeses, Soured Cream & Guacamole\nAdd Chicken +£2.00" },
      { name: "Beef Chilli Nachos (NGCI)", price: "£12.99", desc: "Melted Three Cheeses, Soured Cream & Guacamole" },
      { name: "Vegetarian Chilli Nachos (V)", price: "£12.99", desc: "Melted Three Cheeses, Soured Cream & Guacamole" },
    ],
  },
  {
    category: "Italian Kitchen - Pasta",
    subtitle: "Choose From Penne (GFO), Spaghetti",
    items: [
      { name: "Bolognese", price: "£15.99", desc: "Italian Traditional Minced Beef" },
      { name: "Alfredo", price: "£15.99", desc: "Chicken In Creamy Mushroom Sauce" },
      { name: "Arrabbiata (V)", price: "£14.99", desc: "Tomato Sauce, Garlic, Chilli" },
      { name: "Beef Lasagne", price: "£16.99", desc: "With Mixed Salad" },
      { name: "Crab And King Prawn", price: "£18.99", desc: "" },
    ],
  },
  {
    category: "Asian Kitchen",
    subtitle: "Served With Rice & Naan Bread",
    items: [
      { name: "Mild Chicken Curry", price: "£15.49", desc: "" },
      { name: "Hot Chicken Curry", price: "£15.49", desc: "" },
    ],
  },
  {
    category: "Homemade Chilli",
    items: [
      { name: "Homemade Beef Chilli With Rice", price: "£15.49", desc: "" },
      { name: "Homemade Vegetarian Chilli With Rice (V) (Veg)", price: "£15.49", desc: "" },
    ],
  },
  {
    category: "Meat & Fish",
    items: [
      { name: "Fishcakes Of The Day", price: "£14.99", desc: "Mixed Salad, Sweet Chilli Sauce" },
      { name: "Gammon Steak (GFO)", price: "£17.99", desc: "Egg & Chips" },
      { name: "Fish And Chips", price: "£16.49", desc: "Cod, Chips, Mushy Peas & Tartare Sauce" },
      { name: "Pan Fried Supreme Of Salmon", price: "£18.99", desc: "Warm New Potato, Green Beans, Cherry Tomatoes, Rocket, Parmesan Salad & Hollandaise Sauce" },
      { name: "Sirloin Steak 10oz", price: "£24.99", desc: "Mixed Salad, Portobello Mushroom, Roasted Tomato, Chips, Peppercorn Sauce" },
      { name: "Waterfront Chargrilled Chicken", price: "£20.99", desc: "(Most Bones Removed), Coleslaw, Chips & Garnish With Honey Mustard (Other Sauce Option Available)" },
      { name: "Breaded Scampi With Chips", price: "£16.49", desc: "Served with chips, mixed salad, and tartare sauce" },
    ],
  },
  {
    category: "Waterfront Burgers",
    subtitle: "Served In A Soft Potato Brioche Roll With Chips",
    items: [
      { name: "Plant-Based Burger (GFO)", price: "£15.49", desc: "" },
      { name: "6oz Homemade Beef Burger", price: "£14.99", desc: "Add Extra 6oz Beef Patty +£2.99" },
      { name: "Chicken Burger (GFO)", price: "£14.99", desc: "" },
      { name: "Posh Fish Burger (Tartar Sauce)", price: "£14.99", desc: "" },
    ],
  },
  {
    category: "Salads",
    items: [
      { name: "Chicken Caesar Salad", price: "£15.49", desc: "With Baby Gem, Bacon, Parmesan, Tomatoes, Cucumber, Croutons & Caesar Dressing" },
      { name: "Warm Goat Cheese Salad (GFO) (V)", price: "£15.99", desc: "With Beetroot, Tomato, Cucumber, Walnuts & Mixed Leaves. Drizzled with Walnut Oil" },
      { name: "Prawn & Smoked Salmon Salad (GFO)", price: "£16.99", desc: "With Tomato, Cucumber, Mixed Leaves With a Dill & Lime Mayonnaise" },
      { name: "Chef Joe's Special Vegan Salad", price: "£16.99", desc: "Lettuce, Rocket, Chicory, Green Beans, Cherry Tomatoes, Carrot, Cucumber, Beets, Radish, Sweet Potato, Quinoa, Pumpkin Seeds, Tofu & House Dressing" },
    ],
  },
  {
    category: "Baguettes",
    subtitle: "Served With Chips",
    items: [
      { name: "Chicken Mayonnaise & Salad", price: "£12.99", desc: "" },
      { name: "Tuna Mayonnaise & Cucumber", price: "£12.99", desc: "" },
      { name: "Cheese & Salad", price: "£12.99", desc: "" },
      { name: "Ham & Salad", price: "£12.99", desc: "" },
      { name: "Houmous & Salad", price: "£12.99", desc: "" },
    ],
  },
  {
    category: "Speciality Rustic Rolls",
    subtitle: "Served With Chips",
    items: [
      { name: "Chicken, Avocado & Tomato Filled Roll", price: "£10.99", desc: "" },
      { name: "Ham & Cheese With Tomato & Onion Chutney", price: "£9.99", desc: "" },
      { name: "Houmous, Piquillo Peppers, Mixed Leaves & Tomato (Veg)", price: "£8.99", desc: "" },
    ],
  },
  {
    category: "Sourdough Toasties",
    items: [
      { name: "Wiltshire Ham & Mature Cheddar Cheese", price: "£7.99", desc: "" },
      { name: "Brie, Bacon & Cranberry", price: "£7.99", desc: "" },
      { name: "Mozzarella, Tomato & Pesto (V)", price: "£6.99", desc: "" },
    ],
  },
  {
    category: "Wraps",
    subtitle: "Served With Chips",
    items: [
      { name: "Fajita Wrap", price: "£13.99", desc: "Cajun Chicken, Lettuce, Tomato and Cajun" },
      { name: "Caesar Wrap", price: "£13.99", desc: "Grilled Chicken, Lettuce, Crispy Bacon, Parmesan, Lettuce and Caesar Dressing" },
      { name: "Falafel Wrap (Veg)", price: "£13.49", desc: "Falafels, Hummus, Lettuce, Sun-Dried Tomatoes, Caramelised Onion" },
      { name: "BBQ Wrap", price: "£13.99", desc: "Grilled chicken, lettuce, Bacon, and Tomato with BBQ Sauce" },
    ],
  },
  {
    category: "Children's Menu",
    items: [
      { name: "Chicken Goujons", price: "£5.49", desc: "" },
      { name: "Battered Fish & Chips", price: "£6.99", desc: "" },
      { name: "Classic Beef Burger", price: "£6.99", desc: "Served With Your Choice of Chunky Chips, Skinny Fries or Rice" },
      { name: "Pasta With Tomato Sauce & Cheese (GFO)", price: "£6.49", desc: "" },
      { name: "Ham, Egg & Chips (GFO)", price: "£5.99", desc: "" },
      { name: "Lunch Bag (Ham & Cheese)", price: "£6.99", desc: "" },
      { name: "Cheese Pizza", price: "£6.99", desc: "" },
      { name: "Ham & Cheese Pizza", price: "£7.99", desc: "" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Belgian Waffle", price: "£6.99", desc: "With Banana, Ice Cream & Chocolate Sauce" },
      { name: "Treacle Sponge (GFO)", price: "£6.99", desc: "" },
      { name: "Cheesecake Of The Day", price: "£6.99", desc: "" },
      { name: "Chocolate Fondant Cake", price: "£6.99", desc: "" },
      { name: "Mixed Berry Eton Mess", price: "£6.99", desc: "" },
      { name: "Sticky Toffee Pudding", price: "£6.99", desc: "With Vanilla Ice Cream, Toffee Sauce" },
      { name: "Vanilla Espresso", price: "£5.99", desc: "Two Scoops Vanilla Ice Cream & Single Shot of Espresso" },
    ],
  },
];

const drinksMenu = [
  {
    category: "Hot Drinks",
    items: [
      { name: "Espresso", price: "£2.50", desc: "Rich and intense single shot." },
      { name: "Flat White", price: "£3.40", desc: "Smooth micro-foamed milk over a double espresso." },
      { name: "English Breakfast Tea", price: "£2.80", desc: "A classic robust blend, served by the pot." },
    ],
  },
  {
    category: "Cold Drinks & Alcohol",
    items: [
      { name: "Freshly Squeezed Orange Juice", price: "£3.95", desc: "" },
      { name: "Craft Lager (Pint)", price: "£5.50", desc: "Locally brewed, crisp and refreshing." },
      { name: "House Wine (White/Red)", price: "£6.50", desc: "Carefully selected premium house wine (175ml)." },
    ],
  },
];

const pizzaMenu = [
  {
    category: "Italian Pizza",
    subtitle: "Freshly cooked 12” pizza on a classic Italian base, layered with our signature tomato sauce",
    items: [
      { name: "Thames Classic", price: "£11.99", desc: "Seasoning Mozzarella, fresh basil leaves, and extra virgin olive oil (chilli flakes – optional)" },
      { name: "Benson Blaze", price: "£14.99", desc: "Mozzarella and Pepperoni" },
      { name: "Riverside Roaster", price: "£15.99", desc: "Mozzarella, tender chicken breast, pepper, onion, mushroom" },
      { name: "Tandoori Cruiser", price: "£15.99", desc: "Mozzarella, Tandoori chicken breast, onion, fresh chillies, jalapenos" },
      { name: "Ham & Pineapple", price: "£14.99", desc: "Mozzarella, ham and pineapple" },
      { name: "Benson Garden", price: "£14.99", desc: "Mozzarella, mushroom, peppers, onion and sweetcorn" },
      { name: "Riverside Vegan", price: "£14.99", desc: "Plant-based cheese, mushroom, peppers, onion and sweetcorn" },
      { name: "Spicy Squadron", price: "£17.99", desc: "Mozzarella, Cajun spiced chicken, red onions, cherry tomato, peppers and garnished with chilli flakes" },
    ],
  },
  {
    category: "Extra Toppings",
    items: [
      { name: "£2.99 Each for extra", price: "", desc: "Ham, Pepperoni, Chicken, Ground beef" },
      { name: "£1.49 Each for extra", price: "", desc: "Peppers, Onions, Tomatoes, Mushrooms, Fresh Chillies, Jalapenos, Pineapple" },
    ],
  },
  {
    category: "The Secret Behind Waterfront Café’s Perfectly Baked Pizzas",
    subtitle: "We believe great pizza starts with the perfect bake.\nThat’s why we use a state-of-the-art electric pizza oven inspired by centuries of Italian tradition but designed for today’s world.\nCrafted for precision and efficiency, our oven delivers exceptional flavour, texture, and consistency every visit.\nHere’s why our pizzas taste so incredible:",
    items: [
      { name: "Authentic Italian Flavour, Every Time", price: "", desc: "Our oven, imported from Italy, reaches a perfect 500°C, ensuring a beautifully crisp base with that signature golden crust. The high heat caramelises toppings to perfection, melting the cheese into a decadent, bubbling delight—just as you’d find in the pizzerias of Naples." },
      { name: "Unbeatable Consistency", price: "", desc: "Thanks to innovative Air Trap System® technology, the heat stays locked inside the oven, guaranteeing perfect, even cooking from edge to centre. Every pizza we serve is flawlessly baked, with no soggy middles or uneven crusts - just deliciousness in every bite." },
      { name: "Sustainably Baked, 100% Wood-Free", price: "", desc: "Our electric oven is completely wood-free, making it an eco-friendly choice that reduces waste without compromising taste. It uses up to 30% less energy than traditional ovens, allowing you to enjoy your pizza with confidence, knowing it’s made with sustainability in mind." },
      { name: "Experience the Difference", price: "", desc: "At Waterfront Cafe, we combine the best of tradition and technology to bring you genuinely exceptional pizza.\nWhether you love a classic Margherita or something more adventurous, our expertly baked pizzas are a taste experience." },
      { name: "Recognised by the True Neapolitan Pizza Association (AVPN)", price: "", desc: "Our Zanolli pizza oven meets the standards of the Associazione Verace Pizza Napoletana (AVPN), the global authority on authentic Neapolitan pizza.\nThis means every pizza we serve stays true to Italian traditions, bringing a slice of Naples to your table." }
    ],
  }
];

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const getActiveMenu = () => {
    switch (activeTab) {
      case "breakfast": return breakfastMenu;
      case "main": return mainMenu;
      case "pizza": return pizzaMenu;
      case "drinks": return drinksMenu;
      default: return breakfastMenu;
    }
  };

  const activeMenuData = getActiveMenu();

  const renderDesc = (desc) => {
    if (!desc) return null;
    return (
      <div className="menu-item-desc" style={{ marginTop: "4px" }}>
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
    <main className="menu-page-wrapper">
      {/* HEADER SECTION */}
      <div className="menu-header-banner">
        <div className="menu-header-inner">
          <h1 className="menu-page-title">Menus</h1>
          <div className="menu-tabs">
            <button className={`menu-tab ${activeTab === "breakfast" ? "active" : ""}`} onClick={() => setActiveTab("breakfast")}>BREAKFAST MENU</button>
            <button className={`menu-tab ${activeTab === "main" ? "active" : ""}`} onClick={() => setActiveTab("main")}>MAIN MENU</button>
            <button className={`menu-tab ${activeTab === "pizza" ? "active" : ""}`} onClick={() => setActiveTab("pizza")}>PIZZA MENU</button>
            <button className={`menu-tab ${activeTab === "drinks" ? "active" : ""}`} onClick={() => setActiveTab("drinks")}>DRINKS MENU</button>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="menu-content-container">
        <div className="menu-content-inner">
          {activeTab === "breakfast" && (
            <div className="menu-intro-text">
              <p className="menu-quote">"Dawn's First Light, Benson's First Bite – Waterfront Mornings".</p>
              <p className="menu-time">Served from 0830 am to 1130 am</p>
              <p className="menu-dietary">GFO – Gluten Free Option Available Upon Request</p>
              <p className="menu-dietary">Please Speak To A Staff Member Regarding Dietary Or Allergen Requirements.</p>
            </div>
          )}
          {activeTab === "main" && (
            <div className="menu-intro-text">
              <p className="menu-quote">"ARRIVE AS A GUEST | LEAVE AS A FRIEND | COME BACK AS FAMILY"</p>
              <p className="menu-time">MAINS SERVED FROM 11:30 AM</p>
              <p className="menu-dietary">V - Vegetarian, VEG - Vegan, GFO - Gluten-Free Options Available Upon Request.</p>
              <p className="menu-dietary">Please Speak to A Staff Member Regarding Dietary Or Allergen Requirements.</p>
            </div>
          )}
          {activeTab === "pizza" && (
            <div className="menu-intro-text">
              <p className="menu-quote">"ARRIVE AS A GUEST | LEAVE AS A FRIEND | COME BACK AS FAMILY"</p>
              <p className="menu-time">PIZZA SERVED FROM 11:30 AM to 18:30 PM</p>
              <p className="menu-dietary">GFO – Gluten-Free Option Available Upon Request</p>
              <p className="menu-dietary">Please Speak to a Staff Member Regarding Dietary or Allergen Requirements.</p>
            </div>
          )}
          <div className="menu-grid">
            {/* LEFT COLUMN */}
            <div className="menu-layout-column">
              {(activeTab === "breakfast" ? activeMenuData.slice(0, 3) : activeTab === "pizza" ? activeMenuData.slice(0, 2) : activeMenuData.slice(0, Math.ceil(activeMenuData.length / 2))).map((section, idx) => (
                <div key={`left-${idx}`} className="menu-section">
                  <h3 className="menu-section-title">{section.category}</h3>
                  {section.subtitle && <span className="menu-section-subtitle" style={{ whiteSpace: "pre-line" }}>{section.subtitle}</span>}
                  <div className="menu-items-list">
                    {section.items.map((item, i) => (
                      <div key={i} className="menu-item-card">
                        <div className="menu-item-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
                          <span className="menu-item-name">{item.name}</span>
                          {item.price && <span className="menu-item-price">{item.price}</span>}
                        </div>
                        {item.desc && renderDesc(item.desc)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="menu-layout-column">
              {(activeTab === "breakfast" ? activeMenuData.slice(3) : activeTab === "pizza" ? activeMenuData.slice(2) : activeMenuData.slice(Math.ceil(activeMenuData.length / 2))).map((section, idx) => (
                <div key={`right-${idx}`} className="menu-section">
                  <h3 className="menu-section-title">{section.category}</h3>
                  {section.subtitle && <span className="menu-section-subtitle" style={{ whiteSpace: "pre-line" }}>{section.subtitle}</span>}
                  <div className="menu-items-list">
                    {section.items.map((item, i) => (
                      <div key={i} className="menu-item-card">
                        <div className="menu-item-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
                          <span className="menu-item-name">{item.name}</span>
                          {item.price && <span className="menu-item-price">{item.price}</span>}
                        </div>
                        {item.desc && renderDesc(item.desc)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuPage;