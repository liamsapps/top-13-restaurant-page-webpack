"use strict";
(self["webpackChunktop_13_restaurant_page_webpack"] = self["webpackChunktop_13_restaurant_page_webpack"] || []).push([[263,521,704,854],{

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ addContent)
/* harmony export */ });
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(564);
/* harmony import */ var _menuNavigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(779);






console.log("In menu.js test message!");

function addContent() {
    const content = document.querySelector("#content");    

    // MENU NAV - ensure buttons only created once
    if (!document.querySelector('#menu-heading') && !document.querySelector('.menu-nav')) {
        const h1 = document.createElement("h1");
        h1.id = "menu-heading";
        h1.textContent = "Alberto's Eatery - Menu";

        content.appendChild(h1);

        const menuNav = document.createElement("nav");
        menuNav.className = "menu-nav";

        // MENU NAV - NAV BUTTONS
        const saladsBtn = document.createElement("button");
        saladsBtn.id = "salads-btn";
        saladsBtn.textContent = "Salads";

        const pastaBtn = document.createElement("button");
        pastaBtn.id = "pasta-btn";
        pastaBtn.textContent = "Pasta";

        const pizzaBtn = document.createElement("button");
        pizzaBtn.id = "pizza-btn";
        pizzaBtn.textContent = "Pizza";

        const dessertsBtn = document.createElement("button");
        dessertsBtn.id = "desserts-btn";
        dessertsBtn.textContent = "Desserts";

        const wineBtn = document.createElement("button");
        wineBtn.id = "wine-btn";
        wineBtn.textContent = "Wine";

        menuNav.appendChild(saladsBtn);
        menuNav.appendChild(pastaBtn);
        menuNav.appendChild(pizzaBtn);
        menuNav.appendChild(dessertsBtn);
        menuNav.appendChild(wineBtn);
        content.appendChild(menuNav);    
    }
}

(0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__/* .setupNavigation */ .m)();
addContent();
(0,_menuNavigation_js__WEBPACK_IMPORTED_MODULE_1__/* .setupMenuNavigation */ .p)();



/***/ }),

/***/ 426:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(313);


function addPizzaContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "PIZZA";

    content.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Pizza #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const pizza_1_Title = document.createElement("h2");
    pizza_1_Title.textContent = "MARGHERITA";
        
    const pizza_1_Desc = document.createElement("p");
    pizza_1_Desc.textContent = "Fresh basil, mozzarella, olive oil, Mozzarella di Buffalo / Anchovies";
    
    const pizza_1_Price = document.createElement("p");
    pizza_1_Price.textContent = "$14 / $18";
    
    menuItem1.appendChild(pizza_1_Title);
    menuItem1.appendChild(pizza_1_Desc);
    menuPrice1.appendChild(pizza_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Pizza #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const pizza_2_Title = document.createElement("h2");
    pizza_2_Title.textContent = "TOUTE GARNIE";
        
    const pizza_2_Desc = document.createElement("p");
    pizza_2_Desc.textContent = "Pepperoni, mushrooms, green peppers, mozzarella and provolone cheese";   
  
    const pizza_2_Price = document.createElement("p");
    pizza_2_Price.textContent = "$15 / $20";
    
    menuItem2.appendChild(pizza_2_Title);
    menuItem2.appendChild(pizza_2_Desc);
    menuPrice2.appendChild(pizza_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    // Pizza #3
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    const menuPrice3 = document.createElement("div");
    menuPrice3.className = "menu-item";
    
    const pizza_3_Title = document.createElement("h2");
    pizza_3_Title.textContent = "RUSTICA";
        
    const pizza_3_Desc = document.createElement("p");
    pizza_3_Desc.textContent = "Artichokes, black olives, grilled peppers, homemade Italian sausage, garlic and caciocavallo";
    
    const pizza_3_Price = document.createElement("p");
    pizza_3_Price.textContent = "$17 / $24";
    
    menuItem3.appendChild(pizza_3_Title);
    menuItem3.appendChild(pizza_3_Desc);    
    menuPrice3.appendChild(pizza_3_Price);
    
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuPrice3);

    // Pizza #4
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    const menuPrice4 = document.createElement("div");
    menuPrice4.className = "menu-item";
    
    const pizza_4_Title = document.createElement("h2");
    pizza_4_Title.textContent = "MAZZARINA";
        
    const pizza_4_Desc = document.createElement("p");
    pizza_4_Desc.textContent = "Cherry tomatoes, prosciutto, arugula, house vinaigrette, fresh basil, ricotta cheese";
    
    const pizza_4_Price = document.createElement("p");
    pizza_4_Price.textContent = "$17 / $23";
    
    menuItem4.appendChild(pizza_4_Title);
    menuItem4.appendChild(pizza_4_Desc);
    menuPrice4.appendChild(pizza_4_Price);
    
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuPrice4);

    // Pizza #5
    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    const menuPrice5 = document.createElement("div");
    menuPrice5.className = "menu-item";
    
    const pizza_5_Title = document.createElement("h2");
    pizza_5_Title.textContent = "MEAT LOVER";
        
    const pizza_5_Desc = document.createElement("p");
    pizza_5_Desc.textContent = "Pancetta, sausage, spicy calabrese, red onions and mozzarella";
    
    const pizza_5_Price = document.createElement("p");
    pizza_5_Price.textContent = "$17 / $24";
    
    menuItem5.appendChild(pizza_5_Title);
    menuItem5.appendChild(pizza_5_Desc);
    menuPrice5.appendChild(pizza_5_Price);
    
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuPrice5);

    // Pizza #6
    const menuItem6 = document.createElement("div");
    menuItem6.className = "menu-item";
    const menuPrice6 = document.createElement("div");
    menuPrice6.className = "menu-item";
    
    const pizza_6_Title = document.createElement("h2");
    pizza_6_Title.textContent = "VEGETARIANA";
        
    const pizza_6_Desc = document.createElement("p");
    pizza_6_Desc.textContent = "Pesto, grilled vegetables, red onions, black olives and goat cheese Merguez";
    
    const pizza_6_Price = document.createElement("p");
    pizza_6_Price.textContent = "$16 / $22";
    
    menuItem6.appendChild(pizza_6_Title);
    menuItem6.appendChild(pizza_6_Desc);
    menuPrice6.appendChild(pizza_6_Price);
    
    menuItems.appendChild(menuItem6);
    menuItems.appendChild(menuPrice6);

    content.appendChild(menuItems);

}

(0,_menu_js__WEBPACK_IMPORTED_MODULE_0__/* .addContent */ .r)();
addPizzaContent();


/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ setupNavigation)
/* harmony export */ });
// Handle header button clicks 
function setupNavigation() {
  const homeBtn = document.querySelector('#home-btn');  
  const menuBtn = document.querySelector('#menu-btn');  
  const aboutBtn = document.querySelector('#about-btn');
  
  homeBtn.addEventListener('click', () => {    
    window.location.href = 'index.html';
  });

  menuBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
  });

  aboutBtn.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
}



/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ setupMenuNavigation)
/* harmony export */ });
// Handle menu item button clicks
function setupMenuNavigation() {
  const saladsBtn = document.querySelector("#salads-btn");
  const pastaBtn = document.querySelector("#pasta-btn");
  const pizzaBtn = document.querySelector("#pizza-btn");
  const dessertsBtn = document.querySelector("#desserts-btn");
  const wineBtn = document.querySelector("#wine-btn")
    
  saladsBtn.addEventListener('click', () => {
    window.location.href = "salads.html";
  });

  pastaBtn.addEventListener('click', () => {
    window.location.href = "pasta.html";
  });

  pizzaBtn.addEventListener('click', () => {
    window.location.href = "pizza.html";
  });

  dessertsBtn.addEventListener('click', () => {
    window.location.href = "desserts.html";    
  });

  wineBtn.addEventListener('click', () => {
    window.location.href = "wine.html";
  });
  
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(426));
/******/ }
]);