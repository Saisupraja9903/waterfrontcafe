import React, { useState } from "react";

// --- DUMMY CONTENT ARRAYS ---

const breakfastMenu = [
  {
    category: "Specials",
    items: [
      {
        name: "Upper Deck Breakfast",
        price: "",
        desc: "Two Bacon, Two Sausages, One Fried Egg & Beans, White Or Brown Toast",
      },
      {
        name: "Vegetarian Breakfast",
        price: "",
        desc: "One Fried Egg, Two Hash Browns, Beans, Tomato & Portobello Mushroom, White Or Brown Toast",
      },
      {
        name: "Vegan Breakfast",
        price: "",
        desc: "Two Vegan Sausages, Two Hash Browns, Avocado, Portobello Mushroom, Grilled Tomato, White Or Brown Toast",
      },
   {
  title: "AMERICAN PANCAKE",
  desc: "With Crispy Bacon & Maple Syrup\nWith Greek Yoghurt And Berries",
  boldDesc: true,
  noBorder: true,
  extraSpace: true,
},
    ],
  },
  {
    category: "Light Bites",
    subtitle: "When you want to keep it light, but satisfying",
    items: [
      {
        name: "Greek Yoghurt",
        price: "",
        desc: "With Banana & Honey",
      },
      {
        name: "Greek Yoghurt",
        price: "",
        desc: "With Granola & Berries",
      },
      {
        name: "Two Slices Of Toast & Marmalade",
        price: "",
        desc: "Vegan",
      },
      {
        name: "Two Slices Of Gluten Free Toast & Marmalade",
        price: "",
        desc: "Gluten free",
      },
      {
        name: "Two Slices Of Sourdough Toast & Marmalade",
        price: "",
        desc: "",
      },
      {
        name: "Toast & Beans (GFO)",
        price: "",
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
        price: "",
        desc: "Served With Ham, Hollandaise Sauce And Toasted English Muffin",
      },
      {
        name: "Egg Royale (GFO)",
        price: "",
        desc: "Served With Smoked Salmon, Hollandaise Sauce And Toasted English Muffin",
      },
      {
        name: "Omelette",
        price: "",
        desc: "Two Eggs Omelette With Two Toppings Served With Brown Or White Toast. Add Toppings +£ Please Ask. Choose From Ham, Cheese, Peppers, Mushroom, Onion & Bacon",
      },
      {
        name: "Eggs Your Way With Toast (GFO)",
        price: "",
        desc: "Scrambled / Poached / Fried",
      },
      {
        name: "Avocado, Tomato & Two Eggs",
        price: "",
        desc: "Scrambled / Poached / Fried",
      },
      {
        name: "Avocado, Mushroom & Two Eggs",
        price: "",
        desc: "Scrambled / Poached / Fried",
      },
    ],
  },
  {
    category: "Breakfast Rolls",
    items: [
      { name: "Sausage Or Bacon Rustic Roll", price: "", desc: "" },
      { name: "Bacon & Egg Rustic Roll", price: "", desc: "" },
      { name: "Sausage & Egg Rustic Roll", price: "", desc: "" },
      { name: "Fried Egg Rustic Roll", price: "", desc: "" },
    ],
  },
  {
    category: "Breakfast Extras",
    subtitle: "Treat yourself with your favourite extra compliment",
    items: [
      { name: "Black Pudding", price: "", desc: "" },
      { name: "Beans", price: "", desc: "" },
      { name: "Hash Brown (One)", price: "", desc: "" },
      { name: "Vegan Sausage", price: "", desc: "" },
      { name: "Bacon", price: "", desc: "" },
      { name: "Sausage", price: "", desc: "" },
      { name: "Egg", price: "", desc: "" },
      { name: "Scrambled Egg", price: "", desc: "" },
      { name: "Portobello Mushroom", price: "", desc: "" },
    ],
  },
  {
    category: "Children's Breakfast",
    subtitle: "Delight your children with all time favourites",
    items: [
      { name: "Bacon Roll", price: "", desc: "" },
      { name: "Sausage Roll", price: "", desc: "" },
      {
        name: "Pancakes With Blueberries/Banana & Maple Syrup",
        price: "",
        desc: "Add Greek Yoghurt £ Please Ask",
      },
    ],
  },
  {
    category: "Pastries",
    subtitle: "Complete your breakfast with our scrumptious pastries",
    items: [
      { name: "Butter Croissant", price: "", desc: "" },
      { name: "Almond Croissant", price: "", desc: "" },
      { name: "Cinnamon Swirl", price: "", desc: "" },
      { name: "Pain-Au-Choc", price: "", desc: "" },
      { name: "Pain-Au-Raisin", price: "", desc: "" },
      { name: "Pastel De Nata", price: "", desc: "" },
      { name: "Cookies", price: "", desc: "" },
      {
        name: "Scones",
        price: "",
        desc: "With Butter / Butter & Jam / Jam & Clotted Cream",
      },
      { name: "Tea Cake", price: "", desc: "With Butter And Jam" },
      { name: "Brownie", price: "", desc: "" },
      { name: "Flapjack", price: "", desc: "" },
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
    category: "Starters & Sharing",
    items: [
      {
        name: "Soup of the Day",
        price: "£6.50",
        desc: "Served with warm crusty bread and salted butter.",
      },
      {
        name: "Crispy Salt & Pepper Squid",
        price: "£8.95",
        desc: "Served with garlic mayonnaise and a wedge of lemon.",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Waterfront Beef Burger",
        price: "£15.50",
        desc: "Brioche bun, mature cheddar, smoked bacon, gem lettuce, tomato, house relish, and skin-on fries.",
      },
      {
        name: "Beer Battered Fish & Chips",
        price: "£16.50",
        desc: "Fresh haddock fillet, thick-cut chips, mushy peas, and tartare sauce.",
      },
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

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const getActiveMenu = () => {
    switch (activeTab) {
      case "breakfast": return breakfastMenu;
      case "main": return mainMenu;
      case "drinks": return drinksMenu;
      default: return breakfastMenu;
    }
  };

  const activeMenuData = getActiveMenu();

  return (
    <main className="menu-page-wrapper">
      {/* HEADER SECTION */}
      <div className="menu-header-banner">
        <div className="menu-header-inner">
          <h1 className="menu-page-title">Menus</h1>
          <div className="menu-tabs">
            <button className={`menu-tab ${activeTab === "breakfast" ? "active" : ""}`} onClick={() => setActiveTab("breakfast")}>BREAKFAST MENU</button>
            <button className={`menu-tab ${activeTab === "main" ? "active" : ""}`} onClick={() => setActiveTab("main")}>MAIN MENU</button>
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
          <div className="menu-grid">
            {/* LEFT COLUMN */}
            <div className="menu-layout-column">
              {(activeTab === "breakfast" ? activeMenuData.slice(0, 3) : activeMenuData.slice(0, Math.ceil(activeMenuData.length / 2))).map((section, idx) => (
                <div key={`left-${idx}`} className="menu-section">
                  <h3 className="menu-section-title">{section.category}</h3>
                  {section.subtitle && <span className="menu-section-subtitle">{section.subtitle}</span>}
                  <div className="menu-items-list">
                    {section.items.map((item, i) => (
                      <div key={i} className="menu-item-card">
                        <div className="menu-item-header">
                          <span className="menu-item-name">{item.name}</span>
                          {item.price && <span className="menu-item-price">{item.price}</span>}
                        </div>
                        {item.desc && <p className="menu-item-desc">{item.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="menu-layout-column">
              {(activeTab === "breakfast" ? activeMenuData.slice(3) : activeMenuData.slice(Math.ceil(activeMenuData.length / 2))).map((section, idx) => (
                <div key={`right-${idx}`} className="menu-section">
                  <h3 className="menu-section-title">{section.category}</h3>
                  {section.subtitle && <span className="menu-section-subtitle">{section.subtitle}</span>}
                  <div className="menu-items-list">
                    {section.items.map((item, i) => (
                      <div key={i} className="menu-item-card">
                        <div className="menu-item-header">
                          <span className="menu-item-name">{item.name}</span>
                          {item.price && <span className="menu-item-price">{item.price}</span>}
                        </div>
                        {item.desc && <p className="menu-item-desc">{item.desc}</p>}
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